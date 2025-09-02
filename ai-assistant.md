# 🤖 Hướng Dẫn Sử Dụng AI Assistant trong Cursor IDE

## 🎯 Tổng Quan AI Assistant

**AI Assistant** trong Cursor IDE là trợ lý thông minh giúp bạn:
- ✨ **Viết code nhanh hơn**
- 🐛 **Debug lỗi thông minh**
- 📝 **Tự động hoàn thiện code**
- 🔍 **Tìm kiếm và phân tích code**
- 📚 **Giải thích code phức tạp**

## 🚀 Cách Mở AI Assistant

### Phím Tắt Chính
- **Ctrl + L**: Mở AI Chat (bên phải màn hình)
- **Ctrl + K**: Mở AI Command Palette
- **Ctrl + I**: Mở AI Inline Edit (trong code)
- **Tab**: Chấp nhận AI suggestion

### Các Cách Khác
1. **Click icon AI** trên thanh toolbar
2. **Right-click** trong code > "Ask AI"
3. **Command Palette** (`Ctrl + Shift + P`) > "AI: Chat"

## 💬 AI Chat Interface

### Giao Diện Chat
```
┌─────────────────────────────────────┐
│ 🤖 AI Assistant                     │
├─────────────────────────────────────┤
│ Bạn: Tạo function tính tổng 2 số    │
│                                     │
│ AI: Đây là function tính tổng:      │
│ def tinh_tong(a, b):                │
│     return a + b                    │
│                                     │
│ Bạn: [Nhập câu hỏi tiếp...]         │
└─────────────────────────────────────┘
```

### Các Lệnh Đặc Biệt
```
@code - Hỏi về code cụ thể
@docs - Hỏi về tài liệu
@web - Tìm kiếm thông tin trên web
@files - Tham khảo files trong project
@git - Hỏi về Git history
```

## 🎨 AI Inline Edit

### Cách Sử Dụng
1. **Chọn đoạn code** cần sửa
2. **Nhấn Ctrl + I**
3. **Nhập yêu cầu** trong popup
4. **Nhấn Enter** để áp dụng

### Ví Dụ
```python
# Code gốc
def hello():
    print("Hello")

# Sau khi dùng AI Inline Edit với prompt: "Thêm parameter name"
def hello(name="World"):
    print(f"Hello {name}")
```

## 🔧 AI Command Palette

### Mở Command Palette
- **Ctrl + Shift + P** > gõ "AI:"
- Hoặc **Ctrl + K** trực tiếp

### Các Lệnh AI
```
AI: Chat - Mở AI chat
AI: Explain Code - Giải thích code
AI: Generate Code - Tạo code mới
AI: Refactor Code - Tối ưu code
AI: Debug Code - Debug lỗi
AI: Add Comments - Thêm comments
AI: Generate Tests - Tạo unit tests
```

## 📝 Code Generation

### Tạo Function Mới
**Prompt**: "Tạo function kiểm tra số nguyên tố"
```python
def kiem_tra_so_nguyen_to(n):
    """
    Kiểm tra xem một số có phải là số nguyên tố không
    
    Args:
        n (int): Số cần kiểm tra
        
    Returns:
        bool: True nếu là số nguyên tố, False nếu không
    """
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
```

### Tạo Class
**Prompt**: "Tạo class Student với các thuộc tính name, age, grade"
```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
    
    def get_info(self):
        return f"Tên: {self.name}, Tuổi: {self.age}, Điểm: {self.grade}"
    
    def is_passing(self):
        return self.grade >= 5.0
```

### Tạo API Endpoint
**Prompt**: "Tạo Flask API endpoint GET /users"
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    users = [
        {"id": 1, "name": "Nguyễn Văn A", "email": "a@example.com"},
        {"id": 2, "name": "Trần Thị B", "email": "b@example.com"}
    ]
    return jsonify(users)
```

## 🐛 AI Debugging

### Phân Tích Lỗi
**Prompt**: "Tại sao code này bị lỗi?"
```python
# Code có lỗi
def divide(a, b):
    return a / b

result = divide(10, 0)  # Lỗi ZeroDivisionError
```

**AI Response**:
```
Lỗi ZeroDivisionError xảy ra vì bạn đang chia cho 0.
Để fix, thêm kiểm tra:

def divide(a, b):
    if b == 0:
        raise ValueError("Không thể chia cho 0")
    return a / b
```

### Tìm Bug Logic
**Prompt**: "Tìm bug trong function này"
```python
def tim_so_lon_nhat(numbers):
    max_num = 0
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# Bug: Không xử lý trường hợp numbers rỗng hoặc có số âm
```

## 🔍 Code Analysis

### Giải Thích Code Phức Tạp
**Prompt**: "Giải thích đoạn code này hoạt động như thế nào"
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

**AI Response**:
```
Đây là function tính số Fibonacci sử dụng đệ quy:
- Nếu n <= 1: trả về chính nó
- Ngược lại: trả về tổng của 2 số Fibonacci trước đó
- Ví dụ: fibonacci(5) = fibonacci(4) + fibonacci(3)
```

### Tối Ưu Performance
**Prompt**: "Làm sao để code này chạy nhanh hơn?"
```python
# Code chậm
def tim_so_nguyen_to(n):
    primes = []
    for i in range(2, n+1):
        is_prime = True
        for j in range(2, i):
            if i % j == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(i)
    return primes
```

## 🎯 Best Practices

### Viết Prompt Hiệu Quả

**✅ Prompt Tốt:**
```
"Tạo function Python nhận vào list số nguyên, 
trả về list các số chẵn đã được sắp xếp tăng dần"
```

**❌ Prompt Không Rõ:**
```
"Làm function sắp xếp"
```

### Cung Cấp Context
```
"Trong project Django này, tạo model User với các field:
- username (unique)
- email (unique) 
- created_at (auto timestamp)
- is_active (boolean, default True)"
```

### Yêu Cầu Cụ Thể
```
"Tạo unit test cho function calculate_tax() với các test case:
- Thu nhập < 5 triệu: thuế = 0
- Thu nhập 5-10 triệu: thuế = 5%
- Thu nhập > 10 triệu: thuế = 10%"
```

## 🚫 Những Điều Cần Tránh

### Không Nên
- ❌ Phụ thuộc 100% vào AI
- ❌ Không review code AI tạo ra
- ❌ Copy code mà không hiểu
- ❌ Không test code trước khi dùng

### Nên Làm
- ✅ Học từ code AI tạo ra
- ✅ Review và hiểu code
- ✅ Test kỹ trước khi commit
- ✅ Sử dụng AI như công cụ hỗ trợ

## 🔧 Cấu Hình AI

### Settings.json
```json
{
  "cursor.ai.enabled": true,
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.autoComplete": true,
  "cursor.ai.suggestions": true,
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.temperature": 0.7
}
```

### Model Selection
- **Claude 3.5 Sonnet**: Tốt nhất cho code generation
- **GPT-4**: Tốt cho analysis và explanation
- **Claude 3 Haiku**: Nhanh, phù hợp cho simple tasks

## 📊 Tips Nâng Cao

### Sử Dụng @files
```
@files Tôi muốn tạo API endpoint tương tự như file user_api.py
```

### Sử Dụng @web
```
@web Tìm hiểu về FastAPI best practices 2024
```

### Sử Dụng @git
```
@git Xem commit gần nhất có thay đổi gì trong file main.py
```

## 🎓 Ví Dụ Thực Tế

### Project Python Web
```
"Tạo Flask app với:
- Route GET /api/products (trả về danh sách sản phẩm)
- Route POST /api/products (thêm sản phẩm mới)
- Sử dụng SQLite database
- Có validation input"
```

### Project Data Analysis
```
"Tạo script Python để:
- Đọc file CSV từ data/sales.csv
- Tính tổng doanh thu theo tháng
- Vẽ biểu đồ line chart
- Xuất kết quả ra file Excel"
```

## 🆘 Troubleshooting

### AI Không Phản Hồi
1. Kiểm tra kết nối internet
2. Restart Cursor IDE
3. Kiểm tra tài khoản đã đăng nhập
4. Kiểm tra quota còn lại

### Code AI Tạo Không Chạy
1. Kiểm tra syntax errors
2. Kiểm tra imports
3. Kiểm tra dependencies
4. Test từng phần nhỏ

### AI Hiểu Sai Yêu Cầu
1. Viết prompt rõ ràng hơn
2. Cung cấp ví dụ cụ thể
3. Chia nhỏ yêu cầu
4. Sử dụng @files để cung cấp context

---

**Chúc anh sử dụng AI Assistant hiệu quả! 🚀**
