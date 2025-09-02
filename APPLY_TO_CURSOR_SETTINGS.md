# ⚙️ HƯỚNG DẪN ÁP DỤNG VÀO CURSOR SETTINGS

## 🎯 **MỤC TIÊU:**
- Áp dụng cấu hình tối ưu vào Cursor IDE
- Không cần mở workspace riêng
- Cấu hình áp dụng cho tất cả dự án

## 🔧 **CÁCH THỰC HIỆN:**

### **Bước 1: Mở Cursor Settings**
```
1. Mở Cursor IDE
2. Nhấn Ctrl + ,
3. Click vào biểu tượng "Open Settings (JSON)" (góc trên bên phải)
```

### **Bước 2: Copy cấu hình**
```
1. Mở file: config/performance-optimization.json
2. Copy toàn bộ nội dung
3. Paste vào Settings.json của Cursor
4. Lưu file (Ctrl + S)
```

### **Bước 3: Restart Cursor**
```
1. Đóng Cursor hoàn toàn
2. Mở lại Cursor
3. Cấu hình đã được áp dụng
```

## 📋 **CẤU HÌNH CẦN COPY:**

### **Từ file: config/performance-optimization.json**
```json
{
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
  "editor.guides.bracketPairs": false
}
```

## 🧪 **TEST SAU KHI CẤU HÌNH:**

### **Test 1: Auto Save**
```
1. Tạo file mới (Ctrl + N)
2. Gõ nội dung bất kỳ
3. Chờ 0.5 giây
4. File tự động lưu (không có dấu chấm trên tab)
```

### **Test 2: AI Performance**
```
1. Nhấn Ctrl + L (mở AI chat)
2. Gõ câu hỏi
3. AI phản hồi nhanh hơn
4. Không bị lag
```

### **Test 3: Performance**
```
1. Mở nhiều file cùng lúc
2. Chuyển tab nhanh
3. Không bị đơ máy
4. CPU/RAM thấp hơn
```

## 🚨 **LƯU Ý QUAN TRỌNG:**

### **Nếu có lỗi:**
1. Kiểm tra syntax JSON
2. Không có dấu phẩy thừa
3. Restart Cursor
4. Báo em để em sửa

### **Nếu không hoạt động:**
1. Kiểm tra Cursor version
2. Update Cursor lên phiên bản mới
3. Thử cấu hình từng phần
4. Báo em để em hỗ trợ

## 🎯 **KẾT QUẢ MONG MUỐN:**

### **Sau khi cấu hình:**
- ✅ Auto save hoạt động
- ✅ AI phản hồi nhanh
- ✅ Performance tối ưu
- ✅ Không bị lag
- ✅ Cấu hình áp dụng cho tất cả dự án

---

**🎉 Từ nay Cursor IDE của anh sẽ chạy mượt mà và chuyên nghiệp!**
