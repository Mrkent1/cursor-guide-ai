#!/usr/bin/env node
/**
 * Script tự động tìm Cursor settings và cấu hình
 * Dành cho anh Nghĩa - tìm từng vị trí một
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🔍 BẮT ĐẦU TÌM CURSOR SETTINGS...');

// Danh sách các vị trí có thể có Cursor settings
const possiblePaths = [
    // Windows
    path.join(os.homedir(), 'AppData', 'Roaming', 'Cursor', 'User', 'settings.json'),
    path.join(os.homedir(), 'AppData', 'Local', 'Cursor', 'User', 'settings.json'),
    path.join(os.homedir(), 'AppData', 'Roaming', 'Cursor', 'settings.json'),
    path.join(os.homedir(), 'AppData', 'Local', 'Cursor', 'settings.json'),

    // macOS
    path.join(os.homedir(), 'Library', 'Application Support', 'Cursor', 'User', 'settings.json'),
    path.join(os.homedir(), 'Library', 'Application Support', 'Cursor', 'settings.json'),

    // Linux
    path.join(os.homedir(), '.config', 'Cursor', 'User', 'settings.json'),
    path.join(os.homedir(), '.config', 'Cursor', 'settings.json'),

    // Thêm các vị trí khác
    path.join(os.homedir(), '.cursor', 'settings.json'),
    path.join(os.homedir(), 'cursor', 'settings.json'),
    path.join(os.homedir(), 'Documents', 'Cursor', 'settings.json'),
    path.join(os.homedir(), 'Desktop', 'Cursor', 'settings.json'),

    // Tìm trong Program Files
    'C:\\Program Files\\Cursor\\User\\settings.json',
    'C:\\Program Files (x86)\\Cursor\\User\\settings.json',
    'C:\\Program Files\\Cursor\\settings.json',
    'C:\\Program Files (x86)\\Cursor\\settings.json'
];

// Cấu hình tối ưu
const optimizedSettings = {
    "cursor.ai.enabled": true,
    "cursor.ai.model": "claude-3.5-sonnet",
    "cursor.ai.maxTokens": 2000,
    "cursor.ai.temperature": 0.7,
    "cursor.ai.contextLines": 20,
    "cursor.ai.includeGitContext": false,
    "cursor.ai.includeFileContext": true,

    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 500,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "files.encoding": "utf8",
    "files.eol": "\n",

    "editor.minimap.enabled": false,
    "editor.bracketPairColorization.enabled": false,
    "workbench.editor.limit.value": 5,
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "editor.guides.bracketPairs": false,

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

    "workbench.editor.limit.enabled": true,
    "workbench.editor.limit.perEditorGroup": true,
    "workbench.editor.closeEmptyGroups": true,
    "workbench.editor.highlightModifiedTabs": false,
    "workbench.editor.decorations.badges": false,
    "workbench.editor.decorations.colors": false,
    "workbench.editor.restoreViewState": false,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.editor.enablePreviewFromCodeNavigation": false,

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

    "terminal.integrated.scrollback": 1000,
    "terminal.integrated.cursorBlinking": false,
    "terminal.integrated.cursorStyle": "line",

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

    "breadcrumbs.enabled": false,

    "timeline.excludeSources": ["git", "file"],
    "timeline.pageSize": 10,
    "timeline.pageOnScroll": false,

    "problems.decorations.enabled": false,
    "problems.showCurrentInStatus": false,

    "output.smartScroll.enabled": false,

    "debug.console.historyLength": 100,
    "debug.console.scrollToBottom": false,
    "debug.console.cursorBlinking": false,

    "emmet.triggerExpansionOnTab": false,
    "emmet.showExpandedAbbreviation": "never",
    "emmet.showAbbreviationSuggestions": false,

    "extensions.autoUpdate": false,
    "extensions.autoCheckUpdates": false,
    "extensions.ignoreRecommendations": true,
    "extensions.showRecommendationsOnlyOnDemand": true
};

// Tìm và cấu hình settings
function findAndConfigureSettings() {
    console.log('🔍 Đang tìm Cursor settings...');

    for (let i = 0; i < possiblePaths.length; i++) {
        const settingsPath = possiblePaths[i];
        console.log(`📍 Kiểm tra vị trí ${i + 1}/${possiblePaths.length}: ${settingsPath}`);

        try {
            // Kiểm tra thư mục cha
            const parentDir = path.dirname(settingsPath);
            if (fs.existsSync(parentDir)) {
                console.log(`✅ Thư mục tồn tại: ${parentDir}`);

                // Tạo thư mục nếu chưa có
                if (!fs.existsSync(settingsPath)) {
                    console.log(`📝 Tạo file settings mới: ${settingsPath}`);
                } else {
                    console.log(`📖 File settings đã tồn tại: ${settingsPath}`);
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

                return {
                    success: true,
                    path: settingsPath,
                    message: 'Cấu hình thành công!'
                };

            } else {
                console.log(`❌ Thư mục không tồn tại: ${parentDir}`);
            }
        } catch (error) {
            console.log(`❌ Lỗi khi kiểm tra: ${error.message}`);
        }
    }

    return {
        success: false,
        path: null,
        message: 'Không tìm thấy Cursor settings'
    };
}

// Chạy tìm kiếm
const result = findAndConfigureSettings();

console.log('');
if (result.success) {
    console.log('🎉 HOÀN THÀNH CẤU HÌNH!');
    console.log(`📍 Vị trí settings: ${result.path}`);
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
} else {
    console.log('❌ KHÔNG TÌM THẤY CURSOR SETTINGS!');
    console.log('');
    console.log('🔧 CÁCH KHẮC PHỤC:');
    console.log('1. Cài đặt Cursor IDE');
    console.log('2. Chạy Cursor ít nhất 1 lần');
    console.log('3. Thử cấu hình thủ công');
    console.log('4. Báo em để em hỗ trợ');
}
