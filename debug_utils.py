#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Debug Utilities - Tự động tạo bởi AI Cipher
"""

import logging
import time
import traceback
import sys
import os

# Cấu hình logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('debug.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

def debug_function(func):
    """Decorator để debug function"""
    def wrapper(*args, **kwargs):
        logger.info(f"🔍 Bắt đầu function: {func.__name__}")
        
        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            end_time = time.time()
            
            logger.info(f"✅ Function {func.__name__} hoàn thành")
            logger.debug(f"⏱️ Thời gian: {end_time - start_time:.2f} giây")
            
            return result
            
        except Exception as e:
            end_time = time.time()
            
            logger.error(f"❌ Lỗi trong function {func.__name__}")
            logger.error(f"🐛 Error: {str(e)}")
            logger.error(f"📍 Traceback: {traceback.format_exc()}")
            
            raise e
    
    return wrapper

def create_error_report(error, context=""):
    """Tạo báo cáo lỗi chi tiết"""
    report = f"""
🐛 ERROR REPORT - {time.strftime('%Y-%m-%d %H:%M:%S')}
{'='*50}

❌ ERROR: {str(error)}
📍 CONTEXT: {context}
📍 TRACEBACK: {traceback.format_exc()}

🔧 SUGGESTED FIXES:
- Kiểm tra syntax Python
- Kiểm tra import statements
- Kiểm tra tên biến, function
- Cài đặt thư viện thiếu: pip install [package]

💡 NEXT STEPS:
1. Kiểm tra error message
2. Áp dụng suggested fixes
3. Test lại code
4. Báo AI Cipher nếu cần hỗ trợ
"""
    
    return report

def save_error_report(error, context=""):
    """Lưu báo cáo lỗi vào file"""
    report = create_error_report(error, context)
    
    with open('error_report.txt', 'w', encoding='utf-8') as f:
        f.write(report)
    
    print("📄 Đã lưu error report vào error_report.txt")
    return report

# Ví dụ sử dụng
if __name__ == "__main__":
    print("🐛 Debug utilities đã sẵn sàng!")
    print("📋 Cách sử dụng:")
    print("1. @debug_function - Debug function")
    print("2. save_error_report() - Lưu báo cáo lỗi")
