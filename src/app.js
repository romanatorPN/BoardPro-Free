const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Отключаем для локальной разработки
}));
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// General middleware
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Статические файлы
app.use(express.static(path.join(__dirname, '../public')));

// Basic routes for testing
app.get('/api', (req, res) => {
  res.json({
    message: 'BoardPro Free API',
    version: '1.0.0',
    status: 'OK'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    database: process.env.DATABASE_URL ? 'Connected' : 'Not configured'
  });
});

// Mock auth endpoints for testing
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock validation
  if (email === 'admin@test.com' && password === 'password') {
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: 1,
          email: 'admin@test.com',
          first_name: 'Admin',
          last_name: 'User',
          role: 'admin'
        },
        organization: {
          id: 1,
          name: 'Test Organization',
          slug: 'test-org'
        },
        token: 'mock.jwt.token'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { email, password, first_name, last_name, organization_name } = req.body;
  
  res.status(201).json({
    success: true,
    message: 'Registration successful',
    data: {
      user: {
        id: 2,
        email,
        first_name,
        last_name,
        role: 'admin'
      },
      organization: organization_name ? {
        id: 2,
        name: organization_name,
        slug: organization_name.toLowerCase().replace(/\s+/g, '-')
      } : null,
      token: 'mock.jwt.token'
    }
  });
});

// Mock profile endpoint
app.get('/api/auth/profile', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (token === 'mock.jwt.token') {
    res.json({
      success: true,
      data: {
        user: {
          id: 1,
          email: 'admin@test.com',
          first_name: 'Admin',
          last_name: 'User',
          role: 'admin'
        },
        organization: {
          id: 1,
          name: 'Test Organization',
          slug: 'test-org'
        }
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler только для API маршрутов
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Все остальные маршруты отдают index.html для SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
