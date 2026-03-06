// ========== Google OAuth Configuration ==========
// NOTE: Replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Google OAuth Client ID
// Get your Client ID from: https://console.cloud.google.com/

// ========== Google Sign-Up Handler ==========
function handleGoogleSignup(response) {
    if (response.credential) {
        // Decode JWT token to get user info
        const userInfo = decodeJWT(response.credential);
        
        console.log('Google Sign-Up Successful:', userInfo);
        console.log('Email Access:', userInfo.email);
        
        // Store the credential for backend verification
        storeGoogleToken(response.credential);
        
        // Store user data
        const userData = {
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
            signInMethod: 'google',
            createdAt: new Date().toISOString(),
            creatorType: document.getElementById('creator-type') ? document.getElementById('creator-type').value : ''
        };
        
        storeUserData(userData);
        
        // Pre-fill the signup form with Google data
        preFillSignupForm(userInfo);
        
        // Show success message
        showGoogleSignupSuccess(userInfo);
    } else {
        console.error('Google Sign-Up failed:', response);
    }
}

// ========== Decode JWT Token ==========
function decodeJWT(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

// ========== Pre-fill Form with Google Data ==========
function preFillSignupForm(googleUser) {
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    
    if (fullnameInput && googleUser.name) {
        fullnameInput.value = googleUser.name;
        fullnameInput.disabled = true;
    }
    
    if (emailInput && googleUser.email) {
        emailInput.value = googleUser.email;
        emailInput.disabled = true;
    }
    
    // Scroll to creator type field for user to continue
    document.getElementById('creator-type').focus();
}

// ========== Show Google Signup Success ==========
function showGoogleSignupSuccess(userInfo) {
    // Create success alert
    const successAlert = document.createElement('div');
    successAlert.className = 'success-message show';
    successAlert.style.cssText = `
        background: #d1fae5;
        border: 2px solid #10b981;
        color: #065f46;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        display: block;
        text-align: center;
        font-weight: 600;
    `;
    successAlert.innerHTML = `
        <strong>✓ Google Account Connected!</strong><br>
        Welcome, ${userInfo.name}! Your profile is ready.
    `;
    
    const formContainer = document.querySelector('.auth-form-container');
    formContainer.insertBefore(successAlert, formContainer.querySelector('form'));
    
    // Redirect to profile page after 2 seconds
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 2000);
}

// ========== Alternative: Manual Google Login Button ==========
function handleGoogleSignupManual() {
    // This function is called when the user clicks the manual Google button
    // Initialize Google Sign-In if the automatic method fails
    
    if (!window.google) {
        alert('Google Sign-In library is not loaded. Please refresh the page.');
        return;
    }
    
    google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            console.log('Prompt was not shown');
        }
    });
}

// ========== Handle Google Sign-In for Login Page ==========
function handleGoogleLogin(response) {
    if (response.credential) {
        const userInfo = decodeJWT(response.credential);
        console.log('Google Login Successful:', userInfo);
        console.log('Email Access:', userInfo.email);
        
        // Store the credential for backend verification
        storeGoogleToken(response.credential);
        
        // Store user data
        const userData = {
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
            signInMethod: 'google',
            lastLogin: new Date().toISOString(),
            creatorType: ''
        };
        
        storeUserData(userData);
        
        // Simulate login process
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message show';
        successMsg.innerHTML = `<strong>Success!</strong> Logged in as ${userInfo.email}. Redirecting to profile...`;
        
        const form = document.getElementById('loginForm');
        if (form) {
            form.parentElement.insertBefore(successMsg, form);
        }
        
        // Redirect to profile page after 2 seconds
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 2000);
    } else {
        console.error('Google Login failed:', response);
    }
}

// ========== Initialize Google Sign-In ==========
function initializeGoogleSignIn() {
    if (window.google && window.google.accounts) {
        console.log('Google Sign-In SDK loaded and ready');
        
        // Configure Google Sign-In with email scope
        google.accounts.id.initialize({
            client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
            callback: handleGoogleSignup,
            auto_select: false,
            itp_support: true,
            flowName: 'GeneralOAuthFlow',
            // Request email scope for email access
            scope: 'email profile',
        });
        
        // Render the Google Sign-In button if on signup page
        if (document.getElementById('g_id_onload')) {
            google.accounts.id.renderButton(
                document.querySelector('.g_id_signin'),
                {
                    theme: 'outline',
                    size: 'large',
                    text: 'signup_with',
                    logo_alignment: 'left',
                }
            );
        }
    }
}

// ========== Setup Google Sign-In on Page Load ==========
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Google SDK to load
    setTimeout(initializeGoogleSignIn, 500);
});

// ========== Alternative Setup with Mutation Observer ==========
const observer = new MutationObserver(function(mutations) {
    if (window.google && window.google.accounts && document.getElementById('g_id_onload')) {
        initializeGoogleSignIn();
        observer.disconnect();
    }
});

// Start observing for Google SDK to be available
observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
});

// ========== Store User Data to localStorage ==========
function storeUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data stored successfully');
}

// ========== Store Google Token for Backend Authentication ==========
function storeGoogleToken(token) {
    // Store in localStorage or sessionStorage
    localStorage.setItem('googleToken', token);
    
    // Or send to your backend for verification
    // Example:
    // fetch('/api/auth/google', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ token: token })
    // })
    // .then(res => res.json())
    // .then(data => {
    //     localStorage.setItem('authToken', data.authToken);
    //     window.location.href = 'profile.html';
    // });
}

// ========== Setup Instructions ==========
// To use Google Sign-In with Email Access, follow these steps:
// 
// 1. Go to: https://console.cloud.google.com/
// 2. Create a new project or select existing one
// 3. Enable Google+ API
// 4. Create OAuth 2.0 Client ID (Web Application)
// 5. Configure OAuth Consent Screen:
//    - User Type: External
//    - App name: CreativeAI
//    - User support email: your-email@example.com
//    - Developer contact: your-email@example.com
//    - Scopes to add:
//      * email
//      * profile
//      * openid
// 6. Add authorized JavaScript origins:
//    - http://localhost:3000
//    - http://127.0.0.1:3000
//    - https://yourdomain.com
// 7. Add authorized redirect URIs:
//    - http://localhost:3000/signup.html
//    - http://localhost:3000/login.html
//    - https://yourdomain.com/signup.html
//    - https://yourdomain.com/login.html
// 8. Copy your Client ID
// 9. Replace 'YOUR_GOOGLE_CLIENT_ID' in signup.html and login.html with your actual Client ID
// 10. Replace 'YOUR_GOOGLE_CLIENT_ID' in this file with your actual Client ID
//
// Email Scopes Included:
// - email: Access to user's email address ✓
// - profile: Access to user's name, profile picture, etc. ✓
// - openid: OpenID Connect for identity verification ✓

console.log('%cGoogle OAuth Setup Required', 'font-size: 14px; color: #f59e0b; font-weight: bold;');
console.log('Email scope is enabled - users will grant email access during signup');
console.log('See setup instructions in google-auth.js');
