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



// I want to add an click event in every prodcut tile to open a detail view of the product. when the user clicks in the tile, it will redirect to product-details.html with the product id as query parameter.
const productTiles = document.querySelectorAll('.tile li');
productTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const productId = tile.getAttribute('data-product-id');
        window.location.href = `./src/pages/product-details.html?productId=${productId}`;
    });
});
