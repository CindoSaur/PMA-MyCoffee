// ════════════════════════════════════════════
//  auth.js — MyCoffee authentication
//  Uses localStorage to persist users & session
// ════════════════════════════════════════════

const AUTH_USERS_KEY = 'fm_users';                // stores all registered accounts
const AUTH_SESSION_KEY = 'fm_session';            // stores the currently logged-in user
const AUTH_REMEMBER_EMAIL_KEY = 'fm_remember_email';
const AUTH_REMEMBER_ENABLED_KEY = 'fm_remember_enabled';
const AUTH_RESET_EMAIL_KEY = 'fm_reset_email';
const AUTH_RESET_OTP_KEY = 'fm_reset_otp';
const AUTH_RESET_OTP = '123456';

// ── Helpers ──────────────────────────────────

function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || '[]');
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
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

function getRememberedEmail() {
  return localStorage.getItem(AUTH_REMEMBER_EMAIL_KEY) || '';
}

function isRememberEnabled() {
  return localStorage.getItem(AUTH_REMEMBER_ENABLED_KEY) === '1';
}

function setRememberState(email, enabled) {
  if (enabled) {
    localStorage.setItem(AUTH_REMEMBER_ENABLED_KEY, '1');
    localStorage.setItem(AUTH_REMEMBER_EMAIL_KEY, email || '');
    return;
  }
  localStorage.removeItem(AUTH_REMEMBER_ENABLED_KEY);
  localStorage.removeItem(AUTH_REMEMBER_EMAIL_KEY);
}

function ensureDefaultUsers() {
  const users = getUsers();
  if (users.length) return;
  const defaults = [
    { name: 'Admin User', email: 'admin@polycoffee.vn', password: 'admin1234', role: 'admin', blocked: false },
    { name: 'Minh Staff', email: 'staff@polycoffee.vn', password: 'staff1234', role: 'staff', blocked: false },
    { name: 'Linh Nguyen', email: 'customer@polycoffee.vn', password: 'customer1234', role: 'customer', blocked: false }
  ];
  saveUsers(defaults);
}

function issueDemoOtp(email) {
  localStorage.setItem(AUTH_RESET_EMAIL_KEY, (email || '').trim().toLowerCase());
  localStorage.setItem(AUTH_RESET_OTP_KEY, AUTH_RESET_OTP);
  return AUTH_RESET_OTP;
}

function getResetEmail() {
  return localStorage.getItem(AUTH_RESET_EMAIL_KEY) || '';
}

function clearResetFlow() {
  localStorage.removeItem(AUTH_RESET_EMAIL_KEY);
  localStorage.removeItem(AUTH_RESET_OTP_KEY);
}

function resetPasswordWithOtpDemo(email, otp, newPassword) {
  const normalizedEmail = (email || '').trim().toLowerCase();
  const validOtp = localStorage.getItem(AUTH_RESET_OTP_KEY) || AUTH_RESET_OTP;
  if (!normalizedEmail || !otp || !newPassword) {
    return { ok: false, message: 'Please fill all fields' };
  }
  if (otp !== validOtp) {
    return { ok: false, message: 'OTP is invalid. Use demo OTP 123456' };
  }
  if (newPassword.length < 8) {
    return { ok: false, message: 'Password must be at least 8 characters' };
  }

  const users = getUsers();
  const idx = users.findIndex(u => (u.email || '').toLowerCase() === normalizedEmail);
  if (idx === -1) {
    return { ok: false, message: 'Account not found' };
  }

  users[idx].password = newPassword;
  saveUsers(users);
  clearResetFlow();
  return { ok: true, message: 'Password updated successfully' };
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
  const remember = !!document.getElementById('remember-me')?.checked;

  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  if (!pw)                             { showToast('Please enter your password'); return; }

  const users = getUsers();
  const user  = users.find(u => u.email === email && u.password === pw);

  if (!user) {
    showToast('Incorrect email or password');
    return;
  }

  if (user.blocked) {
    showToast('This account is blocked. Please contact admin.');
    return;
  }

  saveSession({ name: user.name, email: user.email, role: user.role || 'customer' });
  setRememberState(email, remember);
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
  ensureDefaultUsers();
  const rememberedEmail = getRememberedEmail();
  const emailEl = document.getElementById('login-email');
  const rememberEl = document.getElementById('remember-me');
  if (emailEl && rememberedEmail) emailEl.value = rememberedEmail;
  if (rememberEl) rememberEl.checked = isRememberEnabled();

  const session = getSession();
  if (session) {
    window.location.href = '/';
  }
});
