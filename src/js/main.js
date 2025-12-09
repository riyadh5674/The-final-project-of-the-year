function toggleMenu(X,Y,Z = null){
    const menuIcon = document.getElementById(X);
    const navLinks = document.getElementById(Y);
    menuIcon.addEventListener('click', () => {
        console.log(X,'Has been clicked',Y,'toggled');
        navLinks.classList.toggle('active');
        if(Z){
            const leftColumn = document.getElementById(Z);
            leftColumn.classList.toggle('active');
        }
    });
}

toggleMenu('menu-icon', 'nav-links');
toggleMenu('toggle-left-menu', 'left-column','left-menu-content');

