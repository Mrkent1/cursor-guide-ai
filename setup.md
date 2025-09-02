# 🛠️ Hướng Dẫn Cài Đặt & Cấu Hình Cursor IDE

## 📥 Cài Đặt Cursor IDE

### Bước 1: Tải Cursor IDE
1. **Truy cập website**: https://cursor.sh/
2. **Chọn phiên bản** phù hợp:
   - Windows: `cursor-setup.exe`
   - macOS: `cursor.dmg`
   - Linux: `cursor.AppImage`

### Bước 2: Cài Đặt
**Windows:**
1. Chạy file `cursor-setup.exe`
2. Làm theo hướng dẫn installer
3. Chọn thư mục cài đặt (mặc định: `C:\Users\[username]\AppData\Local\Programs\cursor`)

**macOS:**
1. Mở file `cursor.dmg`
2. Kéo Cursor vào Applications folder
3. Chạy Cursor từ Applications

**Linux:**
1. Cấp quyền execute: `chmod +x cursor.AppImage`
2. Chạy: `./cursor.AppImage`

### Bước 3: Khởi Động Lần Đầu
1. Mở Cursor IDE
2. Chọn theme (Dark/Light)
3. Cấu hình font và size
4. Đăng nhập tài khoản

## 🔐 Đăng Ký & Đăng Nhập

### Tạo Tài Khoản
1. **Truy cập**: https://cursor.sh/
2. **Click "Sign Up"**
3. **Nhập thông tin**:
   - Email
   - Password
   - Confirm password
4. **Xác thực email**

### Đăng Nhập
1. **Mở Cursor IDE**
2. **Click "Sign In"**
3. **Nhập email và password**
4. **Chọn plan**:
   - Free: 200 requests/month
   - Pro: Unlimited requests

## ⚙️ Cấu Hình Cơ Bản

### Mở Settings
- **Windows/Linux**: `Ctrl + ,`
- **macOS**: `Cmd + ,`

### Cấu Hình Giao Diện
```json
{
  "workbench.colorTheme": "Dark+ (default dark)",
  "editor.fontSize": 14,
  "editor.fontFamily": "Consolas, 'Courier New', monospace",
  "editor.lineHeight": 1.5,
  "editor.tabSize": 4,
  "editor.insertSpaces": true
}
```

### Cấu Hình AI
```json
{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.autoComplete": true,
  "cursor.ai.suggestions": true
}
```

## 🐍 Cấu Hình Python

### Cài Đặt Python
1. **Tải Python**: https://python.org/downloads/
2. **Cài đặt** với "Add to PATH" checked
3. **Kiểm tra**: Mở terminal, gõ `python --version`

### Cấu Hình Python trong Cursor
```json
{
  "python.defaultInterpreterPath": "python",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.formatting.provider": "black",
  "python.analysis.autoImportCompletions": true
}
```

### Cài Đặt Extensions Python
1. **Mở Extensions**: `Ctrl + Shift + X`
2. **Tìm kiếm**: "Python"
3. **Cài đặt**: Python extension by Microsoft
4. **Restart** Cursor IDE

## 🔧 Cấu Hình Nâng Cao

### Performance Optimization
```json
{
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/__pycache__/**": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/.git": true,
    "**/__pycache__": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  }
}
```

### Memory Usage
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "typescript.suggest.autoImports": false,
  "editor.suggest.showKeywords": false,
  "editor.suggest.showSnippets": false
}
```

### Git Integration
```json
{
  "git.enabled": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.showPushSuccessNotification": true
}
```

## 🎨 Themes & UI

### Cài Đặt Themes
1. **Mở Extensions**: `Ctrl + Shift + X`
2. **Tìm kiếm themes**:
   - One Dark Pro
   - Material Theme
   - Dracula
   - Monokai
3. **Cài đặt và áp dụng**

### Custom Theme
```json
{
  "workbench.colorCustomizations": {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "activityBar.background": "#2d2d30",
    "sideBar.background": "#252526"
  }
}
```

## 🔌 Extensions Cần Thiết

### Extensions Cơ Bản
```bash
# Python Development
code --install-extension ms-python.python
code --install-extension ms-python.pylint
code --install-extension ms-python.black-formatter

# Git
code --install-extension eamodio.gitlens

# Code Formatting
code --install-extension esbenp.prettier-vscode

# Bracket Colorizer
code --install-extension coenraads.bracket-pair-colorizer-2
```

### Extensions Nâng Cao
```bash
# AI Assistant
code --install-extension github.copilot

# Database
code --install-extension ms-mssql.mssql

# Docker
code --install-extension ms-azuretools.vscode-docker

# REST Client
code --install-extension humao.rest-client
```

## 🚀 Workspace Settings

### Tạo Workspace
1. **File > Add Folder to Workspace**
2. **Chọn thư mục project**
3. **File > Save Workspace As**
4. **Đặt tên**: `my-project.code-workspace`

### Workspace Configuration
```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "python.defaultInterpreterPath": "./venv/bin/python",
    "python.terminal.activateEnvironment": true,
    "files.exclude": {
      "**/__pycache__": true,
      "**/*.pyc": true
    }
  },
  "extensions": {
    "recommendations": [
      "ms-python.python",
      "ms-python.pylint"
    ]
  }
}
```

## 🐛 Troubleshooting

### Lỗi Thường Gặp

**1. AI không hoạt động**
```bash
# Kiểm tra kết nối internet
ping cursor.sh

# Restart Cursor IDE
# Kiểm tra tài khoản đã đăng nhập
```

**2. Python không nhận diện**
```bash
# Kiểm tra Python path
python --version
which python

# Cấu hình lại interpreter
Ctrl + Shift + P > "Python: Select Interpreter"
```

**3. Extensions không load**
```bash
# Disable và enable lại extension
# Restart Cursor IDE
# Kiểm tra compatibility
```

**4. Performance chậm**
```bash
# Tắt extensions không cần thiết
# Giảm file watcher
# Tăng memory limit
```

### Log Files
- **Windows**: `%APPDATA%\Cursor\logs`
- **macOS**: `~/Library/Logs/Cursor`
- **Linux**: `~/.config/Cursor/logs`

## ❓ FAQ

**Q: Cursor IDE có miễn phí không?**
A: Có, nhưng giới hạn 200 requests/month. Pro plan unlimited.

**Q: Có thể dùng offline không?**
A: Có, nhưng AI features cần internet.

**Q: Hỗ trợ ngôn ngữ nào?**
A: Python, JavaScript, TypeScript, Java, C++, Go, Rust, và nhiều hơn.

**Q: Có thể import từ VS Code không?**
A: Có, Cursor tương thích với VS Code extensions.

**Q: Làm sao backup settings?**
A: Settings được lưu trong user folder, có thể copy.

## 📞 Hỗ Trợ

- **Documentation**: https://cursor.sh/docs
- **Community**: https://github.com/getcursor/cursor
- **Support**: support@cursor.sh
- **Discord**: https://discord.gg/cursor

---

**Chúc anh cài đặt thành công! 🎉**
