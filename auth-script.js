// ========== Login Form Validation =========
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        let isValid = true;
        
        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Validate password
        if (!password.value) {
            showError(password, 'Password is required');
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(password);
        }
        
        if (isValid) {
            submitLoginForm(this);
        }
    });
}

// ========== Signup Form Validation =========
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const creatorType = document.getElementById('creator-type');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const terms = document.querySelector('input[name="terms"]');
        
        let isValid = true;
        
        // Validate full name
        if (!fullname.value.trim()) {
            showError(fullname, 'Full name is required');
            isValid = false;
        } else if (fullname.value.trim().length < 2) {
            showError(fullname, 'Name must be at least 2 characters');
            isValid = false;
        } else {
            clearError(fullname);
        }
        
        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Validate creator type
        if (!creatorType.value) {
            showError(creatorType, 'Please select a creator type');
            isValid = false;
        } else {
            clearError(creatorType);
        }
        
        // Validate password
        if (!password.value) {
            showError(password, 'Password is required');
            isValid = false;
        } else if (!isValidPassword(password.value)) {
            showError(password, 'Password must have 8+ chars, 1 uppercase, 1 number');
            isValid = false;
        } else {
            clearError(password);
        }
        
        // Validate confirm password
        if (!confirmPassword.value) {
            showError(confirmPassword, 'Please confirm your password');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            clearError(confirmPassword);
        }
        
        // Validate terms
        if (!terms.checked) {
            const termsGroup = terms.closest('.form-group');
            termsGroup.classList.add('error');
            const errorMsg = termsGroup.querySelector('.error-message');
            errorMsg.textContent = 'You must agree to the terms';
            errorMsg.classList.add('show');
            isValid = false;
        } else {
            const termsGroup = terms.closest('.form-group');
            termsGroup.classList.remove('error');
            const errorMsg = termsGroup.querySelector('.error-message');
            errorMsg.classList.remove('show');
        }
        
        if (isValid) {
            submitSignupForm(this);
        }
    });
}

// ========== Form Validation Helper Functions =========
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // At least 8 characters, 1 uppercase, 1 number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMsg = formGroup.querySelector('.error-message');
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    const errorMsg = formGroup.querySelector('.error-message');
    errorMsg.classList.remove('show');
}

// ========== Submit Login Form =========
function submitLoginForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message show';
        successMsg.innerHTML = '<strong>Success!</strong> Signed in successfully. Redirecting...';
        form.parentElement.insertBefore(successMsg, form);
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 1500);
}

// ========== Submit Signup Form =========
function submitSignupForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message show';
        successMsg.innerHTML = '<strong>Welcome!</strong> Account created successfully. Redirecting...';
        form.parentElement.insertBefore(successMsg, form);
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 1500);
}

// ========== Social Login Buttons =========
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const provider = this.classList.contains('google-btn') ? 'Google' :
                        this.classList.contains('github-btn') ? 'GitHub' :
                        this.classList.contains('microsoft-btn') ? 'Microsoft' : 'Unknown';
        
        // Simulate social login
        alert(`Social login with ${provider} would be handled here with OAuth/provider SDK`);
    });
});

// ========== Real-time Password Validation =========
const passwordInput = document.getElementById('password');
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const hint = this.closest('.form-group').querySelector('.password-hint');
        if (hint) {
            const isValid = isValidPassword(this.value);
            if (this.value.length > 0) {
                hint.style.color = isValid ? '#10b981' : '#ef4444';
                hint.textContent = isValid ? '✓ Password strength: Good' : '✗ Min 8 chars, 1 uppercase, 1 number';
            }
        }
    });
}

// ========== Password Visibility Toggle =========
function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.innerHTML = '👁️';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 5px;
            color: var(--text-light);
            transition: color 0.3s;
        `;
        
        input.style.position = 'relative';
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            this.innerHTML = isPassword ? '🙈' : '👁️';
        });
    });
}

// Initialize password toggles
document.addEventListener('DOMContentLoaded', addPasswordToggle);

// ========== Form Auto-focus =========
const firstInput = document.querySelector('.auth-form input');
if (firstInput) {
    firstInput.focus();
}

// ========== Enter Key Submit =========
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn && !submitBtn.disabled) {
                this.dispatchEvent(new Event('submit'));
            }
        }
    });
});

// ========== Forgot Password Link =========
const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here.\n\nA reset link would be sent to your email address.');
    });
}

// ========== Console Message =========
console.log('%cCreativeAI Auth Pages', 'font-size: 16px; color: #6366f1; font-weight: bold;');
console.log('Login and Signup forms are ready to use!');
