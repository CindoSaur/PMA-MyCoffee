# Tauri Project - [PolyCoffee]

Hướng dẫn cài đặt và chạy Tauri cho team dev trên macOS / Linux / Windows.

---

## 1. Điều kiện tiên quyết

Standing requirement cho mọi người:

- **Node.js ≥ 18**
- **Rust (qua rustup)**
- **Git**

---

## 2. Nếu bạn chưa có Node.js

### 2.1. Cài Node.js (all hệ)

**Cách 1 – Dùng Node Version Manager (nên dùng)**

- **Linux/macOS:**
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  source ~/.bashrc   # hoặc ~/.zshrc nếu dùng zsh
  nvm install 18
  nvm use 18
  ```

- **Windows (PowerShell):**
  - Tải nvm-windows: https://github.com/coreybutler/nvm-windows
  - Theo hướng dẫn cài đặt, sau đó:
    ```powershell
    nvm install 18
    nvm use 18
    ```

**Cách 2 – Direct download**

- Vào: https://nodejs.org/download/release/latest-v18.x/
- Chọn bản phù hợp hệ điều hành, cài đặt như bình thường.

### 2.2. Kiểm tra Node.js sau khi cài

```bash
node --version
npm --version
```

Phải ra `v18.x.x` trở lên.

---

## 3. Nếu bạn chưa có Rust

### 3.1. Cài Rust (all hệ)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Sau khi xong:

```bash
source ~/.cargo/env   # Linux/macOS
rustup update
```

Kiểm tra:

```bash
rustc --version
cargo --version
```

---

## 4. Nếu bạn chỉ có Node.js (chưa có Rust)

Bạn chỉ cần làm phần **3** ở trên để cài Rust.

---

## 5. Nếu bạn đã có Node.js + Rust

Bạn chỉ cần đảm bảo cả hai đều hoạt động:

```bash
node --version
npm --version
rustc --version
cargo --version
```

---

## 6. Clone và cài đặt project

```bash
git clone https://github.com/your-team/your-tauri-repo.git
cd your-tauri-repo
```

Cài dependency frontend:

```bash
npm install
```

Trên một số máy có thể cần:

```bash
npm install --legacy-peer-deps   # nếu báo lỗi peer dependencies
```

---

## 7. Cài Tauri CLI (một lần cho mỗi máy)

```bash
npm install -g @tauri-apps/cli
```

Kiểm tra đã cài thành công:

```bash
npm run tauri --version
cargo tauri --version
npm run tauri info   # xem toàn bộ môi trường (rất hữu ích để debug)
```

---

## 8. Cài đặt dependencies hệ điều hành (Linux)

Nếu bạn dùng Linux (Ubuntu/Debian), cần cài thêm:

```bash
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.0-dev \
  build-essential \
  curl \
  wget \
  libssl-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

macOS: thường chỉ cần `xcode-select --install` là đủ.
Windows: Cài Visual Studio Build Tools + Rust theo hướng dẫn trên trang tauri.app.

---

## 9. Cách chạy dự án

### 9.1. Chạy dev mode (frontend + Tauri)

```bash
npm run tauri dev
```

Nếu bạn dùng framework riêng (React/Vue/Vite…):

```bash
npm run dev     # chạy dev server frontend
npm run tauri dev   # chạy Tauri app kết nối tới frontend server
```

### 9.2. Build để xuất bản

```bash
npm run tauri build
```

Sau khi build xong, file app sẽ nằm trong:

- Linux: `src-tauri/target/release/bundle/appimage/[Tên_App].AppImage`
- Windows: `src-tauri/target/release/bundle/msi/[Tên_App].msi`
- macOS: `src-tauri/target/release/bundle/app/[Tên_App].app`

---

## 10. Các lệnh script thường dùng

```bash
npm run dev            # dev frontend (nếu có)
npm run build          # build frontend
npm run tauri dev      # chạy Tauri dev
npm run tauri build    # build bản release
npm run tauri info     # kiểm tra môi trường Tauri, Node, Rust
```

---

## 11. Troubleshooting nhanh

### 11.1. Node.js không đúng phiên bản

Đảm bảo đang dùng Node 18:

```bash
nvm use 18
node --version
```

### 11.2. Lỗi Rust không tìm thấy

```bash
source ~/.cargo/env
rustup default stable
```

### 11.3. Clear cache (build lại)

```bash
rm -rf node_modules
rm -rf src-tauri/target
npm install
```

### 11.4. Lỗi WebKitGTK (Linux)

```bash
sudo apt install libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev
```

---

## 12. Tóm tắt cho từng loại người dùng

- **Chưa có Node.js + Rust**:
  Làm từ mục 2 đến 7, sau đó 9.1 → 9.2.

- **Chỉ có Node.js**:
  Làm mục 3 (cài Rust), 7 (cài Tauri), rồi 9.1 → 9.2.

- **Đã có Node.js + Rust**:
  Chỉ cần làm 6, 7, 9.1 → 9.2.

---

Happy coding team!
Nếu gặp lỗi, vui lòng gửi result của lệnh `npm run tauri info` để mọi người dễ debug.
<img src="https://i.pinimg.com/736x/ed/98/ab/ed98ab22e8eb7acb28a444fe11978a96.jpg" width="500" />

