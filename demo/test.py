#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Demo Testing với Python - Hướng dẫn sử dụng Cursor IDE
Tác giả: Cipher AI Assistant
Ngày tạo: 2024
"""

import unittest
import sys
import os

# Thêm thư mục hiện tại vào path để import hello.py
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from hello import SinhVien, tinh_giai_thua, kiem_tra_so_nguyen_to

class TestSinhVien(unittest.TestCase):
    """
    Test class cho SinhVien
    """
    
    def setUp(self):
        """Setup trước mỗi test"""
        self.sv = SinhVien("Nguyễn Văn A", 20, 8.5)
    
    def test_init(self):
        """Test khởi tạo SinhVien"""
        self.assertEqual(self.sv.ten, "Nguyễn Văn A")
        self.assertEqual(self.sv.tuoi, 20)
        self.assertEqual(self.sv.diem, 8.5)
    
    def test_get_info(self):
        """Test method get_info"""
        expected = "Tên: Nguyễn Văn A, Tuổi: 20, Điểm: 8.5"
        self.assertEqual(self.sv.get_info(), expected)
    
    def test_xep_loai_gioi(self):
        """Test xếp loại Giỏi"""
        sv_gioi = SinhVien("Test", 20, 8.5)
        self.assertEqual(sv_gioi.xep_loai(), "Giỏi")
    
    def test_xep_loai_kha(self):
        """Test xếp loại Khá"""
        sv_kha = SinhVien("Test", 20, 7.0)
        self.assertEqual(sv_kha.xep_loai(), "Khá")
    
    def test_xep_loai_trung_binh(self):
        """Test xếp loại Trung bình"""
        sv_tb = SinhVien("Test", 20, 6.0)
        self.assertEqual(sv_tb.xep_loai(), "Trung bình")
    
    def test_xep_loai_yeu(self):
        """Test xếp loại Yếu"""
        sv_yeu = SinhVien("Test", 20, 4.0)
        self.assertEqual(sv_yeu.xep_loai(), "Yếu")

class TestTinhGiaiThua(unittest.TestCase):
    """
    Test function tinh_giai_thua
    """
    
    def test_giai_thua_0(self):
        """Test giai thừa của 0"""
        self.assertEqual(tinh_giai_thua(0), 1)
    
    def test_giai_thua_1(self):
        """Test giai thừa của 1"""
        self.assertEqual(tinh_giai_thua(1), 1)
    
    def test_giai_thua_5(self):
        """Test giai thừa của 5"""
        self.assertEqual(tinh_giai_thua(5), 120)
    
    def test_giai_thua_10(self):
        """Test giai thừa của 10"""
        self.assertEqual(tinh_giai_thua(10), 3628800)

class TestKiemTraSoNguyenTo(unittest.TestCase):
    """
    Test function kiem_tra_so_nguyen_to
    """
    
    def test_so_nguyen_to(self):
        """Test các số nguyên tố"""
        so_nguyen_to = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        for so in so_nguyen_to:
            with self.subTest(so=so):
                self.assertTrue(kiem_tra_so_nguyen_to(so))
    
    def test_khong_phai_so_nguyen_to(self):
        """Test các số không phải nguyên tố"""
        khong_nguyen_to = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16]
        for so in khong_nguyen_to:
            with self.subTest(so=so):
                self.assertFalse(kiem_tra_so_nguyen_to(so))
    
    def test_so_am(self):
        """Test số âm"""
        self.assertFalse(kiem_tra_so_nguyen_to(-1))
        self.assertFalse(kiem_tra_so_nguyen_to(-5))

class TestTinhToan(unittest.TestCase):
    """
    Test các phép tính cơ bản
    """
    
    def test_cong(self):
        """Test phép cộng"""
        self.assertEqual(2 + 3, 5)
        self.assertEqual(10 + 20, 30)
        self.assertEqual(-5 + 3, -2)
    
    def test_tru(self):
        """Test phép trừ"""
        self.assertEqual(5 - 3, 2)
        self.assertEqual(10 - 15, -5)
        self.assertEqual(0 - 5, -5)
    
    def test_nhan(self):
        """Test phép nhân"""
        self.assertEqual(3 * 4, 12)
        self.assertEqual(-2 * 5, -10)
        self.assertEqual(0 * 100, 0)
    
    def test_chia(self):
        """Test phép chia"""
        self.assertEqual(10 / 2, 5.0)
        self.assertEqual(7 / 3, 7/3)
        self.assertRaises(ZeroDivisionError, lambda: 5 / 0)

class TestListVaDict(unittest.TestCase):
    """
    Test List và Dictionary
    """
    
    def test_list_operations(self):
        """Test các thao tác với List"""
        danh_sach = [1, 2, 3, 4, 5]
        
        # Test append
        danh_sach.append(6)
        self.assertEqual(danh_sach, [1, 2, 3, 4, 5, 6])
        
        # Test remove
        danh_sach.remove(3)
        self.assertEqual(danh_sach, [1, 2, 4, 5, 6])
        
        # Test len
        self.assertEqual(len(danh_sach), 5)
    
    def test_dict_operations(self):
        """Test các thao tác với Dictionary"""
        thong_tin = {"ten": "Test", "tuoi": 25}
        
        # Test get
        self.assertEqual(thong_tin.get("ten"), "Test")
        self.assertEqual(thong_tin.get("tuoi"), 25)
        
        # Test update
        thong_tin.update({"nghe_nghiep": "Developer"})
        self.assertIn("nghe_nghiep", thong_tin)
        
        # Test keys
        self.assertIn("ten", thong_tin.keys())

def run_simple_tests():
    """
    Chạy các test đơn giản không cần unittest
    """
    print("🧪 CHẠY SIMPLE TESTS")
    print("=" * 40)
    
    # Test 1: Phép tính cơ bản
    print("Test 1: Phép tính cơ bản")
    assert 2 + 3 == 5, "Phép cộng sai"
    assert 10 - 4 == 6, "Phép trừ sai"
    assert 3 * 4 == 12, "Phép nhân sai"
    assert 8 / 2 == 4, "Phép chia sai"
    print("✅ Tất cả phép tính đều đúng")
    
    # Test 2: String operations
    print("\nTest 2: String operations")
    text = "Hello World"
    assert len(text) == 11, "Độ dài string sai"
    assert text.upper() == "HELLO WORLD", "Upper case sai"
    assert text.lower() == "hello world", "Lower case sai"
    print("✅ Tất cả string operations đều đúng")
    
    # Test 3: List operations
    print("\nTest 3: List operations")
    numbers = [1, 2, 3, 4, 5]
    assert len(numbers) == 5, "Độ dài list sai"
    assert max(numbers) == 5, "Max sai"
    assert min(numbers) == 1, "Min sai"
    assert sum(numbers) == 15, "Sum sai"
    print("✅ Tất cả list operations đều đúng")
    
    # Test 4: Function test
    print("\nTest 4: Function test")
    def tinh_binh_phuong(n):
        return n * n
    
    assert tinh_binh_phuong(5) == 25, "Bình phương sai"
    assert tinh_binh_phuong(0) == 0, "Bình phương 0 sai"
    assert tinh_binh_phuong(-3) == 9, "Bình phương số âm sai"
    print("✅ Tất cả function tests đều đúng")
    
    print("\n🎉 TẤT CẢ SIMPLE TESTS ĐỀU PASS!")

def demo_testing_with_ai():
    """
    Demo cách sử dụng AI để tạo tests
    """
    print("\n🤖 DEMO TESTING VỚI AI")
    print("=" * 40)
    print("""
    Để sử dụng AI tạo tests trong Cursor IDE:
    
    1. Chọn function cần test
    2. Nhấn Ctrl + I (AI Inline Edit)
    3. Nhập prompt: "Tạo unit test cho function này"
    4. AI sẽ tự động tạo test cases
    
    Ví dụ prompt:
    - "Tạo unit test cho function calculate_tax()"
    - "Viết test cases cho class User với các method login, logout"
    - "Tạo integration test cho API endpoint /api/users"
    """)

def main():
    """
    Function chính chạy tất cả tests
    """
    print("🧪 DEMO TESTING PYTHON - CURSOR IDE")
    print("=" * 50)
    
    # Chạy simple tests
    run_simple_tests()
    
    # Demo AI testing
    demo_testing_with_ai()
    
    print("\n" + "=" * 50)
    print("🚀 CHẠY UNITTEST:")
    print("python -m unittest test.py")
    print("\n💡 Hoặc chạy từng test class:")
    print("python -m unittest test.TestSinhVien")
    print("python -m unittest test.TestTinhGiaiThua")
    print("\n🎯 Chúc anh học testing hiệu quả!")

if __name__ == "__main__":
    # Chạy simple tests
    main()
    
    # Chạy unittest nếu được gọi với unittest
    if len(sys.argv) > 1 and sys.argv[1] == "unittest":
        unittest.main()
