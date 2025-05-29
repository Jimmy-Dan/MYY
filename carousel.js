// 轮播功能脚本
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.flex.justify-center.mt-6 button');
    
    let currentIndex = 0;
    const itemCount = 3; // 轮播项数量
    
    function updateCarousel() {
        // 计算移动距离
        const translateValue = -currentIndex * 100 / itemCount;
        container.style.transform = `translateX(${translateValue}%)`;
        
        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.remove('bg-gray-300');
                indicator.classList.add('bg-primary');
            } else {
                indicator.classList.remove('bg-primary');
                indicator.classList.add('bg-gray-300');
            }
        });
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = itemCount - 1; // 循环到最后一项
        }
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < itemCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 循环回第一项
        }
        updateCarousel();
    });
    
    // 设置指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // 自动轮播
    setInterval(function() {
        nextBtn.click();
    }, 5000);
});
