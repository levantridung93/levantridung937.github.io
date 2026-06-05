document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn[data-tab]');
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (menuButtons.length > 0) {
        menuButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                menuButtons.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                const targetTabId = btn.getAttribute('data-tab');
                const targetPane = document.getElementById(targetTabId);
                if (targetPane) targetPane.classList.add('active');
            });
        });
    }
});