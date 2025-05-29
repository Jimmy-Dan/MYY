// 标签页切换功能脚本
document.addEventListener('DOMContentLoaded', function() {
    const searchTabCode = document.getElementById('search-tab-code');
    const searchTabScan = document.getElementById('search-tab-scan');
    const searchContentCode = document.getElementById('search-content-code');
    const searchContentScan = document.getElementById('search-content-scan');
    
    searchTabCode.addEventListener('click', function() {
        searchTabCode.classList.add('tab-active');
        searchTabScan.classList.remove('tab-active');
        searchTabCode.classList.remove('text-gray-500');
        searchTabCode.classList.add('text-gray-700');
        searchTabScan.classList.add('text-gray-500');
        searchTabScan.classList.remove('text-gray-700');
        searchContentCode.classList.remove('hidden');
        searchContentScan.classList.add('hidden');
    });
    
    searchTabScan.addEventListener('click', function() {
        searchTabScan.classList.add('tab-active');
        searchTabCode.classList.remove('tab-active');
        searchTabScan.classList.remove('text-gray-500');
        searchTabScan.classList.add('text-gray-700');
        searchTabCode.classList.add('text-gray-500');
        searchTabCode.classList.remove('text-gray-700');
        searchContentScan.classList.remove('hidden');
        searchContentCode.classList.add('hidden');
    });
});
