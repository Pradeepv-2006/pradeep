// ========== Load User Profile Data ==========
function loadUserProfile() {
    // Get user data from localStorage
    const userData = localStorage.getItem('userData');
    
    if (!userData) {
        // Redirect to signup if no user data
        window.location.href = 'signup.html';
        return;
    }
    
    const user = JSON.parse(userData);
    
    // Display user information
    displayUserProfile(user);
    
    console.log('User Profile Loaded:', user);
}

// ========== Display User Profile ==========
function displayUserProfile(user) {
    // Profile card information
    const profileAvatar = document.getElementById('profileAvatar');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    
    // Get first letter of name for avatar
    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : 'U';
    profileAvatar.textContent = firstLetter;
    
    profileName.textContent = user.name || 'User';
    profileEmail.textContent = user.email || 'user@example.com';
    
    // Profile information tab
    document.getElementById('displayName').textContent = user.name || '-';
    document.getElementById('displayEmail').textContent = user.email || '-';
    document.getElementById('displayCreatorType').textContent = user.creatorType || '-';
    
    // Format created date
    const createdDate = new Date(user.createdAt || new Date());
    document.getElementById('displayCreatedDate').textContent = createdDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Google account status
    document.getElementById('displayGoogleStatus').textContent = user.signInMethod === 'google' ? 'Connected ✓' : 'Connected ✓';
    document.getElementById('displayAccountStatus').textContent = 'Active';
    
    // Authentication details
    document.getElementById('signInMethod').textContent = 'Google OAuth';
    document.getElementById('lastLogin').textContent = 'Just now';
}

// ========== Switch Tabs ==========
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all sidebar links
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => link.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked link
    event.target.closest('.sidebar-link').classList.add('active');
}

// ========== Edit Field Modal ==========
let editingField = null;

function editField(fieldName) {
    editingField = fieldName;
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editModalTitle');
    const label = document.getElementById('editLabel');
    const input = document.getElementById('editInput');
    
    // Set modal content based on field
    const fieldLabels = {
        'name': 'Full Name',
        'email': 'Email Address',
        'creator-type': 'Creator Type'
    };
    
    title.textContent = 'Edit ' + (fieldLabels[fieldName] || 'Field');
    label.textContent = fieldLabels[fieldName] || 'Field';
    
    // Pre-fill with current value
    if (fieldName === 'name') {
        input.value = document.getElementById('displayName').textContent;
    } else if (fieldName === 'email') {
        input.value = document.getElementById('displayEmail').textContent;
    } else if (fieldName === 'creator-type') {
        input.value = document.getElementById('displayCreatorType').textContent;
    }
    
    // Show modal
    modal.classList.add('active');
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('active');
    editingField = null;
}

// ========== Save Edit ==========
function saveEdit(event) {
    event.preventDefault();
    
    const input = document.getElementById('editInput');
    const value = input.value.trim();
    
    if (!value) {
        alert('Please enter a value');
        return;
    }
    
    // Update display
    if (editingField === 'name') {
        document.getElementById('displayName').textContent = value;
        document.getElementById('profileName').textContent = value;
    } else if (editingField === 'email') {
        document.getElementById('displayEmail').textContent = value;
        document.getElementById('profileEmail').textContent = value;
    } else if (editingField === 'creator-type') {
        document.getElementById('displayCreatorType').textContent = value;
    }
    
    // Update localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (editingField === 'name') {
        userData.name = value;
    } else if (editingField === 'email') {
        userData.email = value;
    } else if (editingField === 'creator-type') {
        userData.creatorType = value;
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    
    closeEditModal();
    alert('Changes saved successfully!');
}

// ========== Logout ==========
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear user data
        localStorage.removeItem('userData');
        localStorage.removeItem('googleToken');
        
        // Redirect to home page
        window.location.href = 'index.html';
    }
});

// ========== Confirm Delete Account ==========
function confirmDeleteAccount() {
    const confirmation = prompt('Type your email to confirm account deletion:');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (confirmation === userData.email) {
        // Clear all data
        localStorage.removeItem('userData');
        localStorage.removeItem('googleToken');
        
        alert('Account deleted successfully');
        window.location.href = 'index.html';
    } else {
        alert('Email does not match. Account deletion cancelled.');
    }
}

// ========== Close Modal on Outside Click ==========
window.addEventListener('click', function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
});

// ========== Initialize Page ==========
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
});

// ========== Save User Data to localStorage ==========
function saveUserData(user) {
    localStorage.setItem('userData', JSON.stringify(user));
}

// ========== Get User Data from localStorage ==========
function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}

console.log('%cProfile Page Loaded', 'font-size: 14px; color: #6366f1; font-weight: bold;');
