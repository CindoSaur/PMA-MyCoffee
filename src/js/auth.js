// ════════════════════════════════════════════
//  auth.js — Fresh Market authentication
//  Uses localStorage to persist users & session
// ════════════════════════════════════════════

const AUTH_USERS_KEY = 'fm_users';      // stores all registered accounts
const AUTH_SESSION_KEY = 'fm_session';  // stores the currently logged-in user
const AUTH_RESET_KEY = 'fm_password_resets';

const DEFAULT_ACCOUNTS = [
  {
    name: 'Admin User',
    email: 'admin@polycoffee.vn',
    password: 'admin1234',
    role: 'admin',
    blocked: false,
    joined: '2025-01-01',
  },
  {
    name: 'Linh Nguyen',
    email: 'customer@polycoffee.vn',
    password: 'customer1234',
    role: 'customer',
    blocked: false,
    joined: '2025-03-15',
  },
  {
    name: 'Minh Staff',
    email: 'staff@polycoffee.vn',
    password: 'staff1234',
    role: 'staff',
    blocked: false,
    joined: '2025-02-10',
  },
];

// ── Helpers ──────────────────────────────────

function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || '[]');
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getResetRequests() {
  return JSON.parse(localStorage.getItem(AUTH_RESET_KEY) || '{}');
}

function saveResetRequests(requests) {
  localStorage.setItem(AUTH_RESET_KEY, JSON.stringify(requests));
}

function getSession() {
  return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || 'null');
}

function saveSession(user) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}

function createPasswordResetRequest(email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const users = getUsers();
  const exists = users.some(u => u.email === normalizedEmail);
  if (!exists) return { ok: false, message: 'Email not found' };

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const requests = getResetRequests();
  requests[normalizedEmail] = {
    code,
    expiresAt: Date.now() + 10 * 60 * 1000,
  };
  saveResetRequests(requests);
  return { ok: true, code };
}

function completePasswordReset(email, code, newPassword) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedCode = String(code || '').trim();
  const requests = getResetRequests();
  const req = requests[normalizedEmail];
  if (!req) return { ok: false, message: 'No reset request found. Please request a new code.' };
  if (Date.now() > req.expiresAt) {
    delete requests[normalizedEmail];
    saveResetRequests(requests);
    return { ok: false, message: 'Reset code expired. Please request a new one.' };
  }
  if (req.code !== normalizedCode) return { ok: false, message: 'Invalid reset code' };
  if (!newPassword || newPassword.length < 8) return { ok: false, message: 'Password must be at least 8 characters' };

  const users = getUsers();
  const idx = users.findIndex(u => u.email === normalizedEmail);
  if (idx === -1) return { ok: false, message: 'Account no longer exists' };

  users[idx].password = newPassword;
  saveUsers(users);
  delete requests[normalizedEmail];
  saveResetRequests(requests);
  return { ok: true };
}

function seedAccounts() {
  const users = getUsers();
  if (!Array.isArray(users) || users.length === 0) {
    saveUsers(DEFAULT_ACCOUNTS);
  }
}


// ── Tab switching ─────────────────────────────

function switchTab(tab) {
  document.getElementById('form-login').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('form-register').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
}

// ── Toggle password visibility ────────────────

function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.querySelector('.mi').textContent = isHidden ? 'visibility_off' : 'visibility';
}

// ── Login ─────────────────────────────────────

function handleLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pw    = document.getElementById('login-pw').value;

  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  if (!pw)                             { showToast('Please enter your password'); return; }

  const users = getUsers();
  const user  = users.find(u => u.email === email && u.password === pw);

  if (!user) {
    showToast('Incorrect email or password');
    return;
  }

  if (user.blocked) {
    showToast('Your account is blocked. Please contact support.');
    return;
  }

  saveSession({ name: user.name, email: user.email, role: user.role || 'customer' });
  showSuccess(user.name);
}

// ── Register ──────────────────────────────────

function handleRegister() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const pw    = document.getElementById('reg-pw').value;

  if (!name)                           { showToast('Please enter your name');              return; }
  if (!email || !email.includes('@'))  { showToast('Please enter a valid email');          return; }
  if (pw.length < 8)                   { showToast('Password must be at least 8 characters'); return; }

  const users = getUsers();

  if (users.find(u => u.email === email)) {
    showToast('An account with this email already exists');
    return;
  }

  users.push({ name, email, password: pw, role: 'customer' });
  saveUsers(users);
  saveSession({ name, email, role: 'customer' });
  showSuccess(name);
}

// ── Success & redirect ────────────────────────

function showSuccess(name) {
  document.getElementById('form-login').style.display     = 'none';
  document.getElementById('form-register').style.display  = 'none';
  document.querySelector('.login-tabs').style.display      = 'none';
  document.querySelector('.login-heading').style.display   = 'none';
  document.querySelector('.login-sub').style.display       = 'none';

  // Personalise the success message
  const s = document.getElementById('login-success');
  const msg = s.querySelector('.success-msg');
  if (msg) msg.textContent = `Welcome back, ${name}!`;

  s.style.display = 'flex';
  setTimeout(() => { window.location.href = '/'; }, 2000);
}

// ── Toast ─────────────────────────────────────

let toastTmr;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTmr);
  toastTmr = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── On page load: seed accounts + redirect if already logged in ──

window.addEventListener('DOMContentLoaded', () => {
  seedAccounts();
  const session = getSession();
  if (session) {
    window.location.href = '/';
  }
});
