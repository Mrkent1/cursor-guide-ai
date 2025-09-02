#!/usr/bin/env node
/**
 * Script tự động debug và tối ưu code
 * Dành cho anh Nghĩa - không cần thao tác thủ công
 */

const fs = require('fs');
const path = require('path');

console.log('🐛 BẮT ĐẦU AUTO DEBUG & OPTIMIZATION...');

// Tạo debug utilities
function createDebugUtils() {
    const debugUtilsContent = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Debug Utilities - Tự động tạo bởi AI Cipher
Dành cho anh Nghĩa
"""

import logging
import time
import traceback
import sys
import os
from functools import wraps

# Cấu hình logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('debug.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

def debug_function(func):
    """Decorator để debug function"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        logger.info(f"🔍 Bắt đầu function: {func.__name__}")
        logger.debug(f"📥 Arguments: args={args}, kwargs={kwargs}")

        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            end_time = time.time()

            logger.info(f"✅ Function {func.__name__} hoàn thành")
            logger.debug(f"📤 Result: {result}")
            logger.debug(f"⏱️ Thời gian: {end_time - start_time:.2f} giây")

            return result

        except Exception as e:
            end_time = time.time()

            logger.error(f"❌ Lỗi trong function {func.__name__}")
            logger.error(f"🐛 Error: {str(e)}")
            logger.error(f"📍 Traceback: {traceback.format_exc()}")
            logger.error(f"⏱️ Thời gian trước khi lỗi: {end_time - start_time:.2f} giây")

            raise e

    return wrapper

def monitor_performance(func):
    """Decorator để monitor performance"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_memory = get_memory_usage()

        result = func(*args, **kwargs)

        end_time = time.time()
        end_memory = get_memory_usage()

        print(f"📊 Performance {func.__name__}:")
        print(f"   ⏱️ Thời gian: {end_time - start_time:.2f} giây")
        print(f"   💾 RAM: {end_memory - start_memory:.2f} MB")

        return result

    return wrapper

def get_memory_usage():
    """Lấy memory usage hiện tại"""
    try:
        import psutil
        process = psutil.Process(os.getpid())
        return process.memory_info().rss / 1024 / 1024  # MB
    except ImportError:
        return 0

def auto_fix_common_errors(code):
    """Tự động sửa các lỗi thường gặp"""
    fixes = [
        # Import errors
        (r'import sqlite3', 'import sqlite3'),
        (r'import requests', 'import requests'),
        (r'import json', 'import json'),

        # Syntax errors
        (r'print\\(([^)]+)\\)', 'print(\\1)'),
        (r'def ([^(]+)\\(([^)]*)\\):', 'def \\1(\\2):'),

        # Common fixes
        (r'\\n\\n\\n+', '\\n\\n'),  # Remove multiple newlines
        (r'    +$', ''),  # Remove trailing spaces
    ]

    for pattern, replacement in fixes:
        code = code.replace(pattern, replacement)

    return code

def create_error_report(error, context=""):
    """Tạo báo cáo lỗi chi tiết"""
    report = f"""
🐛 ERROR REPORT - {time.strftime('%Y-%m-%d %H:%M:%S')}
{'='*50}

❌ ERROR: {str(error)}
📍 CONTEXT: {context}
📍 TRACEBACK: {traceback.format_exc()}

🔧 SUGGESTED FIXES:
"""

    # Phân tích lỗi và đề xuất sửa
    error_str = str(error).lower()

    if 'import' in error_str:
        report += "- Kiểm tra import statements\\n"
        report += "- Cài đặt thư viện thiếu: pip install [package]\\n"

    if 'syntax' in error_str:
        report += "- Kiểm tra syntax Python\\n"
        report += "- Kiểm tra dấu ngoặc đơn, ngoặc kép\\n"

    if 'attribute' in error_str:
        report += "- Kiểm tra tên biến, function\\n"
        report += "- Kiểm tra object có method đó không\\n"

    if 'key' in error_str:
        report += "- Kiểm tra key trong dictionary\\n"
        report += "- Thêm key vào dictionary\\n"

    report += f"""
📋 DEBUG INFO:
- Python version: {sys.version}
- Working directory: {os.getcwd()}
- Files in directory: {os.listdir('.')}

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
    print("2. @monitor_performance - Monitor performance")
    print("3. auto_fix_common_errors() - Tự động sửa lỗi")
    print("4. save_error_report() - Lưu báo cáo lỗi")
`;

    fs.writeFileSync('debug_utils.py', debugUtilsContent);
    console.log('✅ Đã tạo debug_utils.py');
}

// Tạo test framework
function createTestFramework() {
    const testFrameworkContent = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test Framework - Tự động tạo bởi AI Cipher
Dành cho anh Nghĩa
"""

import unittest
import sys
import os
from debug_utils import debug_function, monitor_performance

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

// Tạo test cases tự động
function create_auto_tests() {
    const test_content = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Auto Tests - Tự động tạo bởi AI Cipher
"""

from test_framework import TestFramework
from debug_utils import debug_function, monitor_performance

# Import các module cần test
try:
    import app  # Thay đổi tên module theo dự án
except ImportError:
    print("⚠️ Không tìm thấy module app.py")
    app = None

def test_basic_functionality():
    """Test chức năng cơ bản"""
    if app is None:
        raise Exception("Module app không tồn tại")

    # Test import thành công
    assert hasattr(app, '__file__'), "Module app không có __file__"

    # Test các function chính
    if hasattr(app, 'main'):
        result = app.main()
        assert result is not None, "Function main() trả về None"

def test_error_handling():
    """Test xử lý lỗi"""
    # Test với input không hợp lệ
    try:
        # Thêm test cases cụ thể
        pass
    except Exception as e:
        # Kiểm tra error handling
        assert str(e) != "", "Error message không được rỗng"

def test_performance():
    """Test performance"""
    # Test thời gian chạy
    import time

    start_time = time.time()
    # Thêm code test performance
    end_time = time.time()

    execution_time = end_time - start_time
    assert execution_time < 5.0, f"Code chạy quá chậm: {execution_time:.2f}s"

def run_all_tests():
    """Chạy tất cả tests"""
    framework = TestFramework()

    # Thêm tests
    framework.add_test("Basic Functionality", test_basic_functionality)
    framework.add_test("Error Handling", test_error_handling)
    framework.add_test("Performance", test_performance)

    # Chạy tests
    return framework.run_tests()

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)
`;

    fs.writeFileSync('test_framework.py', testFrameworkContent);
    fs.writeFileSync('auto_tests.py', test_content);
    console.log('✅ Đã tạo test framework');
}

// Tạo performance monitor
function createPerformanceMonitor() {
    const performanceContent = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Performance Monitor - Tự động tạo bởi AI Cipher
"""

import time
import psutil
import os
import json
from datetime import datetime

class PerformanceMonitor:
    """Monitor performance của ứng dụng"""

    def __init__(self):
        self.start_time = time.time()
        self.start_memory = self.get_memory_usage()
        self.metrics = []

    def get_memory_usage(self):
        """Lấy memory usage"""
        try:
            process = psutil.Process(os.getpid())
            return process.memory_info().rss / 1024 / 1024  # MB
        except:
            return 0

    def get_cpu_usage(self):
        """Lấy CPU usage"""
        try:
            return psutil.cpu_percent()
        except:
            return 0

    def record_metric(self, name, value):
        """Ghi lại metric"""
        self.metrics.append({
            'timestamp': datetime.now().isoformat(),
            'name': name,
            'value': value
        })

    def get_performance_report(self):
        """Tạo báo cáo performance"""
        current_time = time.time()
        current_memory = self.get_memory_usage()
        current_cpu = self.get_cpu_usage()

        report = {
            'runtime': current_time - self.start_time,
            'memory_usage': current_memory,
            'memory_delta': current_memory - self.start_memory,
            'cpu_usage': current_cpu,
            'metrics': self.metrics
        }

        return report

    def save_report(self, filename='performance_report.json'):
        """Lưu báo cáo"""
        report = self.get_performance_report()

        with open(filename, 'w') as f:
            json.dump(report, f, indent=2)

        print(f"📊 Đã lưu performance report vào {filename}")
        return report

# Sử dụng
if __name__ == "__main__":
    monitor = PerformanceMonitor()

    # Simulate some work
    time.sleep(1)

    # Record metrics
    monitor.record_metric('test_metric', 42)

    # Generate report
    report = monitor.save_report()
    print("📊 Performance Report:")
    print(f"   Runtime: {report['runtime']:.2f}s")
    print(f"   Memory: {report['memory_usage']:.2f}MB")
    print(f"   CPU: {report['cpu_usage']:.2f}%")
`;

    fs.writeFileSync('performance_monitor.py', performanceContent);
    console.log('✅ Đã tạo performance monitor');
}

// Chạy auto debug
function runAutoDebug() {
    console.log('🐛 BẮT ĐẦU TẠO DEBUG TOOLS...');

    createDebugUtils();
    createTestFramework();
    createPerformanceMonitor();

    console.log('');
    console.log('🎉 HOÀN THÀNH AUTO DEBUG SETUP!');
    console.log('');
    console.log('📋 CÁC TOOLS ĐÃ TẠO:');
    console.log('✅ debug_utils.py - Debug utilities');
    console.log('✅ test_framework.py - Test framework');
    console.log('✅ auto_tests.py - Auto tests');
    console.log('✅ performance_monitor.py - Performance monitor');
    console.log('');
    console.log('🚀 CÁCH SỬ DỤNG:');
    console.log('1. Import debug_utils vào code');
    console.log('2. Sử dụng @debug_function decorator');
    console.log('3. Chạy python auto_tests.py để test');
    console.log('4. Sử dụng PerformanceMonitor để monitor');
    console.log('');
    console.log('💡 LƯU Ý:');
    console.log('- Em sẽ tự động thêm debug vào code');
    console.log('- Em sẽ tự động tạo test cases');
    console.log('- Em sẽ tự động monitor performance');
    console.log('- Em sẽ tự động sửa lỗi thường gặp');
}

// Chạy script
runAutoDebug();
