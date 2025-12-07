function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    menuIcon.addEventListener('click', () => {
        console.log('Menu icon clicked');
        navLinks.classList.toggle('active');
    });
}

toggleMenu();

