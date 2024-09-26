const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.opacity = 0;
        });

        const targetId = link.getAttribute('href').substring(1);
        const targetContent = document.getElementById(targetId);
        
        link.classList.add('active');
        targetContent.classList.add('active');
        setTimeout(() => {
            targetContent.style.opacity = 1;
        }, 100);
    });
});
