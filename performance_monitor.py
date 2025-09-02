#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Performance Monitor - Tự động tạo bởi AI Cipher
"""

import time
import os
import json
from datetime import datetime

class PerformanceMonitor:
    """Monitor performance của ứng dụng"""
    
    def __init__(self):
        self.start_time = time.time()
        self.metrics = []
    
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
        
        report = {
            'runtime': current_time - self.start_time,
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
