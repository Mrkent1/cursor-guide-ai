#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test Auto Save - File được tạo trực tiếp bởi AI
Không cần anh tick "keep" hay cấu hình gì cả!
"""

def hello_world():
    """Function chào hỏi"""
    print("Xin chào anh Nghĩa!")
    print("Em đã tạo file này trực tiếp vào dự án")
    print("Không cần anh tick 'keep' nữa!")

def tinh_tong(a, b):
    """Function tính tổng 2 số"""
    return a + b

def main():
    """Function chính"""
    print("=== TEST AUTO SAVE ===")
    hello_world()
    
    # Test tính tổng
    ket_qua = tinh_tong(5, 3)
    print(f"5 + 3 = {ket_qua}")
    
    print("✅ File đã được tạo thành công!")

if __name__ == "__main__":
    main()
