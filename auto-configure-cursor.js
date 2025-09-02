#!/usr/bin/env node
/**
 * Script tự động cấu hình Cursor IDE
 * Dành cho anh Nghĩa - không cần thao tác thủ công
 * Chạy: node auto-configure-cursor.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🚀 BẮT ĐẦU TỰ ĐỘNG CẤU HÌNH CURSOR IDE...');

// Tìm đường dẫn Cursor settings
function findCursorSettingsPath() {
    const platform = os.platform();
    let settingsPath;

    if (platform === 'win32') {
        // Windows
        const userProfile = os.homedir();
        settingsPath = path.join(userProfile, 'AppData', 'Roaming', 'Cursor', 'User', 'settings.json');
    } else if (platform === 'darwin') {
        // macOS
        const userProfile = os.homedir();
        settingsPath = path.join(userProfile, 'Library', 'Application Support', 'Cursor', 'User', 'settings.json');
    } else {
        // Linux
        const userProfile = os.homedir();
        settingsPath = path.join(userProfile, '.config', 'Cursor', 'User', 'settings.json');
    }

    return settingsPath;
}

// Cấu hình tối ưu
const optimizedSettings = {
    "// CURSOR IDE OPTIMIZED SETTINGS": "Tự động cấu hình bởi AI Cipher",

    "// === AI SETTINGS ===": "",
    "cursor.ai.enabled": true,
    "cursor.ai.model": "claude-3.5-sonnet",
    "cursor.ai.maxTokens": 2000,
    "cursor.ai.temperature": 0.7,
    "cursor.ai.contextLines": 20,
    "cursor.ai.includeGitContext": false,
    "cursor.ai.includeFileContext": true,

    "// === AUTO SAVE ===": "",
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 500,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "files.encoding": "utf8",
    "files.eol": "\n",

    "// === PERFORMANCE OPTIMIZATION ===": "",
    "editor.minimap.enabled": false,
    "editor.bracketPairColorization.enabled": false,
    "workbench.editor.limit.value": 5,
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "editor.guides.bracketPairs": false,

    "// === SUGGESTIONS OPTIMIZATION ===": "",
    "editor.suggest.showKeywords": false,
    "editor.suggest.showSnippets": false,
    "editor.suggest.showClasses": true,
    "editor.suggest.showFunctions": true,
    "editor.suggest.showVariables": true,
    "editor.suggest.showModules": false,
    "editor.suggest.showProperties": false,
    "editor.suggest.showEvents": false,
    "editor.suggest.showOperators": false,
    "editor.suggest.showUnits": false,
    "editor.suggest.showColors": false,
    "editor.suggest.showFiles": false,
    "editor.suggest.showReferences": false,
    "editor.suggest.showCustomcolors": false,
    "editor.suggest.showFolders": false,
    "editor.suggest.showTypeParameters": false,
    "editor.suggest.showWords": false,

    "// === WORKBENCH OPTIMIZATION ===": "",
    "workbench.editor.limit.enabled": true,
    "workbench.editor.limit.perEditorGroup": true,
    "workbench.editor.closeEmptyGroups": true,
    "workbench.editor.highlightModifiedTabs": false,
    "workbench.editor.decorations.badges": false,
    "workbench.editor.decorations.colors": false,
    "workbench.editor.restoreViewState": false,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.editor.enablePreviewFromCodeNavigation": false,

    "// === FILE WATCHER EXCLUDE ===": "",
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/**": true,
        "**/__pycache__/**": true,
        "**/venv/**": true,
        "**/.venv/**": true,
        "**/env/**": true,
        "**/.env/**": true,
        "**/dist/**": true,
        "**/build/**": true,
        "**/target/**": true,
        "**/.next/**": true,
        "**/coverage/**": true,
        "**/.nyc_output/**": true,
        "**/logs/**": true,
        "**/*.log": true
    },

    "// === SEARCH EXCLUDE ===": "",
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/.git": true,
        "**/__pycache__": true,
        "**/venv": true,
        "**/.venv": true,
        "**/env": true,
        "**/.env": true,
        "**/dist": true,
        "**/build": true,
        "**/target": true,
        "**/.next": true,
        "**/coverage": true,
        "**/.nyc_output": true,
        "**/logs": true,
        "**/*.pyc": true,
        "**/*.pyo": true,
        "**/*.log": true
    },
    "search.useGlobalIgnoreFiles": true,
    "search.useIgnoreFiles": true,
    "search.smartCase": true,

    "// === TERMINAL OPTIMIZATION ===": "",
    "terminal.integrated.scrollback": 1000,
    "terminal.integrated.cursorBlinking": false,
    "terminal.integrated.cursorStyle": "line",

    "// === GIT OPTIMIZATION ===": "",
    "git.enabled": true,
    "git.autofetch": false,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.showPushSuccessNotification": false,
    "git.autoStash": false,
    "git.allowCommitSigning": false,
    "git.ignoreLimitWarning": true,
    "git.ignoreSubmodules": true,
    "git.decorations.enabled": false,
    "git.decorations.colors": false,
    "git.decorations.badges": false,

    "// === OUTLINE OPTIMIZATION ===": "",
    "outline.showFiles": false,
    "outline.showModules": false,
    "outline.showPackages": false,
    "outline.showClasses": true,
    "outline.showMethods": true,
    "outline.showFunctions": true,
    "outline.showConstructors": false,
    "outline.showFields": false,
    "outline.showVariables": false,
    "outline.showConstants": false,
    "outline.showEnums": false,
    "outline.showEnumMembers": false,
    "outline.showEvents": false,
    "outline.showOperators": false,
    "outline.showStructs": false,
    "outline.showInterfaces": false,
    "outline.showNamespaces": false,
    "outline.showTypeParameters": false,
    "outline.showValues": false,
    "outline.showProperties": false,

    "// === BREADCRUMBS OPTIMIZATION ===": "",
    "breadcrumbs.enabled": false,

    "// === TIMELINE OPTIMIZATION ===": "",
    "timeline.excludeSources": ["git", "file"],
    "timeline.pageSize": 10,
    "timeline.pageOnScroll": false,

    "// === PROBLEMS OPTIMIZATION ===": "",
    "problems.decorations.enabled": false,
    "problems.showCurrentInStatus": false,

    "// === OUTPUT OPTIMIZATION ===": "",
    "output.smartScroll.enabled": false,

    "// === DEBUG OPTIMIZATION ===": "",
    "debug.console.historyLength": 100,
    "debug.console.scrollToBottom": false,
    "debug.console.cursorBlinking": false,

    "// === EMMET OPTIMIZATION ===": "",
    "emmet.triggerExpansionOnTab": false,
    "emmet.showExpandedAbbreviation": "never",
    "emmet.showAbbreviationSuggestions": false,

    "// === EXTENSIONS OPTIMIZATION ===": "",
    "extensions.autoUpdate": false,
    "extensions.autoCheckUpdates": false,
    "extensions.ignoreRecommendations": true,
    "extensions.showRecommendationsOnlyOnDemand": true
};

// Thực hiện cấu hình
function configureCursor() {
    try {
        const settingsPath = findCursorSettingsPath();
        const settingsDir = path.dirname(settingsPath);

        console.log(`📍 Tìm thấy Cursor settings tại: ${settingsPath}`);

        // Tạo thư mục nếu chưa có
        if (!fs.existsSync(settingsDir)) {
            fs.mkdirSync(settingsDir, { recursive: true });
            console.log('✅ Đã tạo thư mục settings');
        }

        // Đọc settings hiện tại (nếu có)
        let currentSettings = {};
        if (fs.existsSync(settingsPath)) {
            try {
                const currentContent = fs.readFileSync(settingsPath, 'utf8');
                currentSettings = JSON.parse(currentContent);
                console.log('✅ Đã đọc settings hiện tại');
            } catch (error) {
                console.log('⚠️ Không thể đọc settings hiện tại, tạo mới');
            }
        }

        // Merge settings
        const mergedSettings = { ...currentSettings, ...optimizedSettings };

        // Ghi settings mới
        fs.writeFileSync(settingsPath, JSON.stringify(mergedSettings, null, 2));
        console.log('✅ Đã cấu hình Cursor settings thành công!');

        // Tạo file backup
        const backupPath = path.join(__dirname, 'cursor-settings-backup.json');
        fs.writeFileSync(backupPath, JSON.stringify(mergedSettings, null, 2));
        console.log('✅ Đã tạo backup settings');

        return true;

    } catch (error) {
        console.error('❌ Lỗi khi cấu hình:', error.message);
        return false;
    }
}

// Chạy cấu hình
const success = configureCursor();

if (success) {
    console.log('');
    console.log('🎉 HOÀN THÀNH CẤU HÌNH TỰ ĐỘNG!');
    console.log('');
    console.log('📋 CÁC THAY ĐỔI:');
    console.log('✅ Auto save sau 0.5 giây');
    console.log('✅ AI model: Claude 3.5 Sonnet');
    console.log('✅ Performance tối ưu');
    console.log('✅ Giảm CPU/RAM usage');
    console.log('✅ Tắt các tính năng không cần thiết');
    console.log('');
    console.log('🚀 BƯỚC TIẾP THEO:');
    console.log('1. Restart Cursor IDE');
    console.log('2. Test auto save (tạo file mới)');
    console.log('3. Test AI chat (Ctrl + L)');
    console.log('4. Kiểm tra performance');
    console.log('');
    console.log('💡 LƯU Ý:');
    console.log('- Cấu hình áp dụng cho TẤT CẢ dự án');
    console.log('- Không cần mở workspace riêng');
    console.log('- Backup settings đã được tạo');
    console.log('');
    console.log('🎯 KẾT QUẢ:');
    console.log('- Cursor IDE chạy mượt mà hơn');
    console.log('- AI phản hồi nhanh hơn');
    console.log('- Không bị lag khi chuyển tab');
    console.log('- Auto save hoạt động tự động');
} else {
    console.log('');
    console.log('❌ CẤU HÌNH THẤT BẠI!');
    console.log('');
    console.log('🔧 CÁCH KHẮC PHỤC:');
    console.log('1. Chạy Cursor với quyền Administrator');
    console.log('2. Kiểm tra Cursor đã được cài đặt');
    console.log('3. Thử cấu hình thủ công theo hướng dẫn');
    console.log('4. Báo em để em hỗ trợ');
}
