document.addEventListener('DOMContentLoaded', function() {
    // FAQアコーディオン実装
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            // 一旦全て閉じる（必要な場合）
            faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none');
            // 開閉トグル
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
});
