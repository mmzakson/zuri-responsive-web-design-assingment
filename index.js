const menu_btn = document.getElementById('mobile-menu');
const nav_links = document.getElementById('nav-links');
menu_btn.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    if (nav_links.style.display === 'none') {
        nav_links.style.display = 'block';
    } else {
        nav_links.style.display = 'none';
    }
}