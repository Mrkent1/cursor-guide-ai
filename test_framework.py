#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test Framework - Tự động tạo bởi AI Cipher
"""

import sys

class TestFramework:
    """Framework test tự động"""

    def __init__(self):
        self.tests = []
        self.passed = 0
        self.failed = 0

    def add_test(self, name, test_func):
        """Thêm test case"""
        self.tests.append((name, test_func))

    def run_tests(self):
        """Chạy tất cả tests"""
        print("🧪 BẮT ĐẦU CHẠY TESTS...")
        print("="*50)

        for name, test_func in self.tests:
            try:
                print(f"🔍 Test: {name}")
                test_func()
                print(f"✅ PASSED: {name}")
                self.passed += 1
            except Exception as e:
                print(f"❌ FAILED: {name}")
                print(f"   Error: {str(e)}")
                self.failed += 1

        print("="*50)
        print(f"📊 KẾT QUẢ: {self.passed} passed, {self.failed} failed")

        if self.failed == 0:
            print("🎉 TẤT CẢ TESTS PASSED!")
        else:
            print("⚠️ CÓ TESTS FAILED!")

        return self.failed == 0

# Test cases đơn giản
def test_basic():
    """Test cơ bản"""
    assert 1 + 1 == 2, "Math không đúng"
    assert "hello" == "hello", "String không đúng"

def test_error_handling():
    """Test xử lý lỗi"""
    try:
        result = 1 / 0
        assert False, "Không có lỗi khi chia cho 0"
    except ZeroDivisionError:
        pass  # Đúng rồi

def run_all_tests():
    """Chạy tất cả tests"""
    framework = TestFramework()

    # Thêm tests
    framework.add_test("Basic Test", test_basic)
    framework.add_test("Error Handling", test_error_handling)

    # Chạy tests
    return framework.run_tests()

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)
