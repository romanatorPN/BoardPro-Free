// API base URL
const API_URL = window.location.origin;

// DOM элементы
const tabButtons = document.querySelectorAll('.tab-button');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginAlert = document.getElementById('loginAlert');
const registerAlert = document.getElementById('registerAlert');

// Переключение вкладок
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Убираем активные классы
        tabButtons.forEach(btn => btn.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));

        // Добавляем активный класс
        button.classList.add('active');

        // Показываем нужную форму
        if (tabName === 'login') {
            loginForm.classList.add('active');
        } else {
            registerForm.classList.add('active');
        }

        // Скрываем алерты
        hideAlert(loginAlert);
        hideAlert(registerAlert);
    });
});

// Обработка формы входа
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = loginForm.querySelector('button[type="submit"]');
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Показываем состояние загрузки
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    hideAlert(loginAlert);

    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Сохраняем токен
            if (rememberMe) {
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));
            } else {
                sessionStorage.setItem('token', data.data.token);
                sessionStorage.setItem('user', JSON.stringify(data.data.user));
            }

            // Показываем успешное сообщение
            showAlert(loginAlert, 'Вход выполнен успешно! Перенаправление...', 'success');

            // Перенаправляем на дашборд через 1 секунду
            setTimeout(() => {
                window.location.href = '/dashboard.html';
            }, 1000);
        } else {
            showAlert(loginAlert, data.message || 'Ошибка входа', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showAlert(loginAlert, 'Ошибка соединения с сервером', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
});

// Обработка формы регистрации
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = registerForm.querySelector('button[type="submit"]');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const organizationName = document.getElementById('organizationName').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Валидация
    if (password !== confirmPassword) {
        showAlert(registerAlert, 'Пароли не совпадают', 'error');
        return;
    }

    if (password.length < 6) {
        showAlert(registerAlert, 'Пароль должен содержать минимум 6 символов', 'error');
        return;
    }

    if (!agreeTerms) {
        showAlert(registerAlert, 'Необходимо согласиться с условиями использования', 'error');
        return;
    }

    // Показываем состояние загрузки
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    hideAlert(registerAlert);

    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                organization_name: organizationName,
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Сохраняем токен
            sessionStorage.setItem('token', data.data.token);
            sessionStorage.setItem('user', JSON.stringify(data.data.user));

            // Показываем успешное сообщение
            showAlert(registerAlert, 'Регистрация успешна! Перенаправление...', 'success');

            // Перенаправляем на дашборд через 1 секунду
            setTimeout(() => {
                window.location.href = '/dashboard.html';
            }, 1000);
        } else {
            showAlert(registerAlert, data.message || 'Ошибка регистрации', 'error');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showAlert(registerAlert, 'Ошибка соединения с сервером', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
});

// Функции для работы с алертами
function showAlert(element, message, type) {
    element.textContent = message;
    element.className = `alert ${type}`;
    element.style.display = 'block';
}

function hideAlert(element) {
    element.style.display = 'none';
}

// Проверка авторизации при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
        // Пользователь уже авторизован, проверяем валидность токена
        fetch(`${API_URL}/api/auth/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Токен валиден, перенаправляем на дашборд
                window.location.href = '/dashboard.html';
            }
        })
        .catch(error => {
            console.error('Token validation error:', error);
        });
    }
});

// Автофокус на поле email при загрузке
document.getElementById('loginEmail').focus();
