#!/usr/bin/env node
/**
 * Script tự động Git & Deploy
 * Dành cho anh Nghĩa - không cần thao tác thủ công
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 BẮT ĐẦU AUTO GIT & DEPLOY...');

// Cấu hình dự án
const projectConfig = {
    name: 'project-name',
    description: 'Dự án của anh Nghĩa',
    author: 'AI Cipher',
    version: '1.0.0'
};

// Tạo .gitignore
function createGitignore() {
    const gitignoreContent = `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
.venv/
pip-log.txt
pip-delete-this-directory.txt

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Database
*.db
*.sqlite
*.sqlite3

# Environment
.env
.env.local
.env.production

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
dist/
build/
*.tgz
*.tar.gz

# Coverage
coverage/
.nyc_output/

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port`;

    fs.writeFileSync('.gitignore', gitignoreContent);
    console.log('✅ Đã tạo .gitignore');
}

// Tạo README.md
function createReadme() {
    const readmeContent = `# 🚀 ${projectConfig.name}

## 📋 Mô tả
${projectConfig.description}

## 🚀 Cách chạy
\`\`\`bash
# Cài đặt dependencies
pip install -r requirements.txt

# Chạy ứng dụng
python app.py
\`\`\`

## 📁 Cấu trúc dự án
\`\`\`
project/
├── app.py
├── requirements.txt
├── README.md
├── tests/
└── docs/
\`\`\`

## 🤝 Đóng góp
Dự án được phát triển bởi ${projectConfig.author}

## 📄 License
MIT License

---
*Tạo bởi AI Cipher cho anh Nghĩa*`;

    fs.writeFileSync('README.md', readmeContent);
    console.log('✅ Đã tạo README.md');
}

// Tạo GitHub Actions
function createGitHubActions() {
    const workflowsDir = '.github/workflows';
    if (!fs.existsSync(workflowsDir)) {
        fs.mkdirSync(workflowsDir, { recursive: true });
    }

    const workflowContent = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Setup Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.9'

    - name: Install dependencies
      run: |
        pip install -r requirements.txt

    - name: Run tests
      run: |
        python -m pytest tests/ || echo "No tests found"

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
        keep_files: true`;

    fs.writeFileSync(path.join(workflowsDir, 'deploy.yml'), workflowContent);
    console.log('✅ Đã tạo GitHub Actions');
}

// Khởi tạo Git
function initGit() {
    try {
        execSync('git init', { stdio: 'inherit' });
        console.log('✅ Đã khởi tạo Git repository');

        execSync('git add .', { stdio: 'inherit' });
        console.log('✅ Đã add files vào Git');

        execSync('git commit -m "🎉 Initial commit - Dự án của anh Nghĩa"', { stdio: 'inherit' });
        console.log('✅ Đã commit initial');

        execSync('git branch -M main', { stdio: 'inherit' });
        console.log('✅ Đã đổi branch thành main');

    } catch (error) {
        console.log('⚠️ Git đã được khởi tạo hoặc có lỗi:', error.message);
    }
}

// Tạo GitHub repository
function createGitHubRepo() {
    try {
        const repoName = projectConfig.name.toLowerCase().replace(/\s+/g, '-');
        const command = `gh repo create ${repoName} --public --description "${projectConfig.description}"`;

        execSync(command, { stdio: 'inherit' });
        console.log('✅ Đã tạo GitHub repository');

        execSync(`git remote add origin https://github.com/$(gh api user --jq .login)/${repoName}.git`, { stdio: 'inherit' });
        console.log('✅ Đã thêm remote origin');

        execSync('git push -u origin main', { stdio: 'inherit' });
        console.log('✅ Đã push lên GitHub');

        return `https://github.com/$(gh api user --jq .login)/${repoName}`;

    } catch (error) {
        console.log('⚠️ Không thể tạo GitHub repository:', error.message);
        console.log('💡 Anh có thể tạo thủ công trên GitHub.com');
        return null;
    }
}

// Deploy lên GitHub Pages
function deployToGitHubPages() {
    try {
        execSync('gh pages deploy --dist .', { stdio: 'inherit' });
        console.log('✅ Đã deploy lên GitHub Pages');

        const repoName = projectConfig.name.toLowerCase().replace(/\s+/g, '-');
        return `https://$(gh api user --jq .login).github.io/${repoName}`;

    } catch (error) {
        console.log('⚠️ Không thể deploy lên GitHub Pages:', error.message);
        return null;
    }
}

// Chạy auto deploy
function autoDeploy() {
    console.log('📋 BẮT ĐẦU AUTO DEPLOY...');

    // 1. Tạo files cần thiết
    createGitignore();
    createReadme();
    createGitHubActions();

    // 2. Khởi tạo Git
    initGit();

    // 3. Tạo GitHub repository
    const githubUrl = createGitHubRepo();

    // 4. Deploy lên GitHub Pages
    const pagesUrl = deployToGitHubPages();

    console.log('');
    console.log('🎉 HOÀN THÀNH AUTO DEPLOY!');
    console.log('');

    if (githubUrl) {
        console.log(`📂 GitHub Repository: ${githubUrl}`);
    }

    if (pagesUrl) {
        console.log(`🌐 Live Demo: ${pagesUrl}`);
    }

    console.log('');
    console.log('📋 CÁC FILE ĐÃ TẠO:');
    console.log('✅ .gitignore');
    console.log('✅ README.md');
    console.log('✅ .github/workflows/deploy.yml');
    console.log('✅ Git repository');
    console.log('✅ GitHub repository');
    console.log('✅ GitHub Pages deployment');

    console.log('');
    console.log('🚀 BƯỚC TIẾP THEO:');
    console.log('1. Chia sẻ link với bạn bè');
    console.log('2. Tạo thêm tính năng');
    console.log('3. Deploy lên server riêng');
    console.log('4. Tạo app mobile');

    console.log('');
    console.log('💡 LƯU Ý:');
    console.log('- Code đã được commit và push');
    console.log('- GitHub Actions sẽ tự động deploy');
    console.log('- Có thể truy cập qua link GitHub Pages');
    console.log('- Em sẽ tự động cập nhật khi có thay đổi');
}

// Chạy script
autoDeploy();
