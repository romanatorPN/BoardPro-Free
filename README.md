# BoardPro Free - Backend

Free alternative to BoardPro for board meeting management.

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Production (Render.com)
- Automatically deployed from GitHub
- Environment variables configured in Render dashboard

## API Endpoints

- `GET /` - API info
- `GET /api/health` - Health check
- `POST /api/auth/login` - Login (test: admin@test.com / password)
- `POST /api/auth/register` - Register
- `GET /api/auth/profile` - Get profile

## Test Credentials
- Email: admin@test.com
- Password: password

## Environment Variables

Required for production:
- `DATABASE_URL` - PostgreSQL connection string (auto-provided by Render)
- `JWT_SECRET` - Secret for JWT tokens
- `FRONTEND_URL` - Frontend domain for CORS

## License
MIT