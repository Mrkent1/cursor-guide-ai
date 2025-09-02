#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Demo Python cơ bản - Hướng dẫn sử dụng Cursor IDE
Tác giả: Cipher AI Assistant
Ngày tạo: 2024
"""

import datetime
import random
import math

def hello_world():
    """
    Function in chào thế giới
    """
    print("🌍 Xin chào thế giới từ Cursor IDE!")
    print("🚀 Đây là demo Python cơ bản")
    print("=" * 50)

def tinh_toan_co_ban():
    """
    Demo các phép tính cơ bản
    """
    print("\n📊 DEMO TÍNH TOÁN CƠ BẢN")
    print("-" * 30)
    
    # Phép tính cơ bản
    a = 10
    b = 5
    
    print(f"a = {a}, b = {b}")
    print(f"a + b = {a + b}")
    print(f"a - b = {a - b}")
    print(f"a * b = {a * b}")
    print(f"a / b = {a / b}")
    print(f"a ** b = {a ** b}")

def demo_list_va_dict():
    """
    Demo sử dụng List và Dictionary
    """
    print("\n📋 DEMO LIST VÀ DICTIONARY")
    print("-" * 30)
    
    # List
    danh_sach = ["Python", "JavaScript", "Java", "C++"]
    print(f"Danh sách ngôn ngữ: {danh_sach}")
    print(f"Số lượng: {len(danh_sach)}")
    print(f"Ngôn ngữ đầu tiên: {danh_sach[0]}")
    
    # Dictionary
    thong_tin = {
        "ten": "Nguyễn Văn A",
        "tuoi": 25,
        "nghe_nghiep": "Developer",
        "ngon_ngu": ["Python", "JavaScript"]
    }
    
    print(f"\nThông tin: {thong_tin}")
    print(f"Tên: {thong_tin['ten']}")
    print(f"Tuổi: {thong_tin['tuoi']}")

def demo_vong_lap():
    """
    Demo các loại vòng lặp
    """
    print("\n🔄 DEMO VÒNG LẶP")
    print("-" * 30)
    
    # For loop
    print("For loop từ 1 đến 5:")
    for i in range(1, 6):
        print(f"  Số {i}")
    
    # While loop
    print("\nWhile loop đếm ngược:")
    count = 3
    while count > 0:
        print(f"  Còn {count} giây...")
        count -= 1
    print("  Bắt đầu! 🚀")

def demo_function():
    """
    Demo tạo và sử dụng function
    """
    print("\n⚙️ DEMO FUNCTION")
    print("-" * 30)
    
    def tinh_giai_thua(n):
        """Tính giai thừa của n"""
        if n <= 1:
            return 1
        return n * tinh_giai_thua(n - 1)
    
    def kiem_tra_so_nguyen_to(n):
        """Kiểm tra số nguyên tố"""
        if n < 2:
            return False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True
    
    # Sử dụng functions
    so = 5
    print(f"Giai thừa của {so} = {tinh_giai_thua(so)}")
    
    so_nguyen_to = 17
    ket_qua = "là" if kiem_tra_so_nguyen_to(so_nguyen_to) else "không phải là"
    print(f"{so_nguyen_to} {ket_qua} số nguyên tố")

def demo_class():
    """
    Demo tạo và sử dụng Class
    """
    print("\n🏗️ DEMO CLASS")
    print("-" * 30)
    
    class SinhVien:
        def __init__(self, ten, tuoi, diem):
            self.ten = ten
            self.tuoi = tuoi
            self.diem = diem
        
        def get_info(self):
            return f"Tên: {self.ten}, Tuổi: {self.tuoi}, Điểm: {self.diem}"
        
        def xep_loai(self):
            if self.diem >= 8:
                return "Giỏi"
            elif self.diem >= 6.5:
                return "Khá"
            elif self.diem >= 5:
                return "Trung bình"
            else:
                return "Yếu"
    
    # Tạo object
    sv1 = SinhVien("Nguyễn Văn A", 20, 8.5)
    sv2 = SinhVien("Trần Thị B", 19, 7.2)
    
    print(sv1.get_info())
    print(f"Xếp loại: {sv1.xep_loai()}")
    print()
    print(sv2.get_info())
    print(f"Xếp loại: {sv2.xep_loai()}")

def demo_file_handling():
    """
    Demo đọc và ghi file
    """
    print("\n📁 DEMO FILE HANDLING")
    print("-" * 30)
    
    # Ghi file
    filename = "demo_output.txt"
    content = f"""
Demo file được tạo bởi Cursor IDE
Thời gian: {datetime.datetime.now()}
Nội dung: Đây là file demo Python
"""
    
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Đã ghi file: {filename}")
        
        # Đọc file
        with open(filename, 'r', encoding='utf-8') as f:
            content_read = f.read()
        print(f"✅ Đã đọc file: {filename}")
        print("Nội dung file:")
        print(content_read)
        
    except Exception as e:
        print(f"❌ Lỗi: {e}")

def demo_random():
    """
    Demo sử dụng random
    """
    print("\n🎲 DEMO RANDOM")
    print("-" * 30)
    
    # Random số
    so_ngau_nhien = random.randint(1, 100)
    print(f"Số ngẫu nhiên từ 1-100: {so_ngau_nhien}")
    
    # Random choice
    mau_sac = ["Đỏ", "Xanh", "Vàng", "Tím", "Cam"]
    mau_ngau_nhien = random.choice(mau_sac)
    print(f"Màu ngẫu nhiên: {mau_ngau_nhien}")
    
    # Random list
    so_list = list(range(1, 11))
    random.shuffle(so_list)
    print(f"List đã xáo trộn: {so_list}")

def main():
    """
    Function chính chạy tất cả demo
    """
    print("🎯 DEMO PYTHON CƠ BẢN - CURSOR IDE")
    print("=" * 50)
    print(f"Thời gian chạy: {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    
    # Chạy các demo
    hello_world()
    tinh_toan_co_ban()
    demo_list_va_dict()
    demo_vong_lap()
    demo_function()
    demo_class()
    demo_file_handling()
    demo_random()
    
    print("\n" + "=" * 50)
    print("🎉 HOÀN THÀNH DEMO!")
    print("💡 Hãy thử chỉnh sửa code và chạy lại!")
    print("🚀 Chúc anh học Python vui vẻ!")

if __name__ == "__main__":
    main()
