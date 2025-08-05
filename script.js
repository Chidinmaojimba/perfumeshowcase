const menu_bttn = document.querySelector(".menu-bttn");
const mobile_nav_items = document.querySelector("#mobile-nav-links");

function menu_item_visibility() {
    // getComputedStyle(mobile_nav_items).display === 'none' ?
    // mobile_nav_items.style.display = 'flex' :
    // mobile_nav_items.style.display = 'none';
    if (getComputedStyle(mobile_nav_items).display === 'none') {
        mobile_nav_items.style.display = 'flex';
    } else {
        mobile_nav_items.style.display = 'none'
    }
}
menu_bttn.addEventListener('click', menu_item_visibility);
