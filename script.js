// Анимация появления символов
document.addEventListener('DOMContentLoaded', function() {
    const symbolElements = document.querySelectorAll('.symbols');
    
    symbolElements.forEach((element) => {
        const originalText = element.textContent;
        element.textContent = '';
        
        let delay = 0;
        for (let char of originalText) {
            setTimeout(() => {
                element.textContent += char;
            }, delay);
            delay += char === ' ' ? 50 : 100; // Меньшая задержка для пробелов
        }
    });
    
    // Плавная прокрутка
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Эффект параллакса для фона
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        document.body.style.backgroundPosition = ${50 + x}% ${50 + y}%;
    });
});