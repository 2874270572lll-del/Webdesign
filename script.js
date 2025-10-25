// 添加点击效果
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击反馈
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 图片加载错误处理
    const images = document.querySelectorAll('.card-img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('图片加载失败:', this.src);
            // 图片加载失败时，使用备用背景和图标
            this.style.display = 'none';
            const parent = this.parentElement;
            
            // 根据卡片索引设置不同的备用背景色
            const cards = document.querySelectorAll('.card');
            const index = Array.from(cards).indexOf(parent.closest('.card'));
            const colors = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
            ];
            
            parent.style.background = colors[index] || colors[0];
            parent.style.display = 'flex';
            parent.style.alignItems = 'center';
            parent.style.justifyContent = 'center';
            parent.style.color = 'white';
            parent.style.fontSize = '1.2rem';
        });
    });
});