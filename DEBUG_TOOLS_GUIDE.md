# 🐛 HƯỚNG DẪN DEBUG & TIỆN ÍCH TÍCH HỢP

## 🎯 **DEBUG TOOLS CHO ANH NGHĨA**

### **1. Python Debugger (pdb)**
```python
# Em sẽ tự động thêm debug vào code
import pdb

def function_co_loi():
    pdb.set_trace()  # Dừng tại đây để debug
    # Code có lỗi
    return result
```

### **2. Logging System**
```python
import logging

# Em tự động tạo logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def function_quan_trong():
    logger.info("Bắt đầu xử lý...")
    logger.debug("Giá trị: %s", value)
    logger.error("Có lỗi: %s", error)
```

### **3. Error Handling**
```python
# Em tự động thêm try-catch
try:
    # Code có thể lỗi
    result = risky_operation()
except Exception as e:
    print(f"Lỗi: {e}")
    # Em sẽ đề xuất cách sửa
```

## 🔧 **TIỆN ÍCH TÍCH HỢP**

### **1. Auto Code Quality**
```python
# Em tự động thêm:
- Type hints
- Docstrings
- Error handling
- Input validation
- Performance monitoring
```

### **2. Auto Testing**
```python
# Em tự động tạo test files
def test_function():
    assert function(2, 3) == 5
    assert function(0, 0) == 0
    print("✅ Test passed!")
```

### **3. Auto Documentation**
```python
def function_name(param1, param2):
    """
    Mô tả function này làm gì

    Args:
        param1 (int): Mô tả tham số 1
        param2 (str): Mô tả tham số 2

    Returns:
        bool: Mô tả kết quả trả về

    Example:
        >>> function_name(1, "hello")
        True
    """
    return True
```

## 🚀 **WORKFLOW DEBUG CỦA EM**

### **Khi anh báo lỗi:**
```
1. Em phân tích lỗi ngay lập tức
2. Em đề xuất cách sửa
3. Em tự động sửa code
4. Em test lại để đảm bảo
5. Em giải thích tại sao lỗi
6. Em đề xuất cách tránh lỗi tương tự
```

### **Ví dụ thực tế:**
```
Anh: "Em ơi, app bị lỗi khi thêm sản phẩm"

AI: "Em thấy lỗi rồi! Lỗi ở dòng 45 - thiếu import.
Em đang sửa ngay:

✅ Đã sửa xong! Thêm import sqlite3
✅ Đã test lại - không còn lỗi
✅ App chạy bình thường

🔍 NGUYÊN NHÂN LỖI:
- Thiếu import thư viện sqlite3
- Code gọi database nhưng chưa import

💡 CÁCH TRÁNH:
- Em sẽ tự động thêm import cần thiết
- Em sẽ tạo file requirements.txt
- Em sẽ kiểm tra dependencies

Anh thử lại nhé! Nếu còn lỗi gì em sửa tiếp."
```

## 🎯 **TIỆN ÍCH TỰ ĐỘNG**

### **1. Code Formatting**
```python
# Em tự động format code theo chuẩn
- PEP 8 (Python style guide)
- Auto-indent
- Remove unused imports
- Sort imports
```

### **2. Performance Monitoring**
```python
import time

def monitor_performance():
    start_time = time.time()
    # Code cần monitor
    end_time = time.time()
    print(f"Thời gian chạy: {end_time - start_time:.2f} giây")
```

### **3. Memory Usage**
```python
import psutil
import os

def check_memory():
    process = psutil.Process(os.getpid())
    memory_info = process.memory_info()
    print(f"RAM sử dụng: {memory_info.rss / 1024 / 1024:.2f} MB")
```

## 🔍 **DEBUG WORKFLOW CHI TIẾT**

### **Bước 1: Phân tích lỗi**
```
1. Em đọc error message
2. Em tìm dòng code gây lỗi
3. Em phân tích nguyên nhân
4. Em đề xuất giải pháp
```

### **Bước 2: Sửa lỗi**
```
1. Em tự động sửa code
2. Em thêm error handling
3. Em thêm logging
4. Em test lại
```

### **Bước 3: Cải thiện**
```
1. Em đề xuất tối ưu
2. Em thêm validation
3. Em cải thiện performance
4. Em cập nhật documentation
```

---

**🎯 Từ nay em sẽ tự động debug và tối ưu code cho anh!**
