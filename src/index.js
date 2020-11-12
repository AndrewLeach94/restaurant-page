import homePage from './home.js';
import MenuPage from './menu.js';

const navigation = (() => {
    const contentArea = document.querySelector("#content")

    //add event listeners
    const home = (() => {
        const homeLink = document.querySelector("#link_home");
        homeLink.addEventListener("click", () => homePage());
    })();

    const menu = (() => {
        const menuLink = document.querySelector("#link_menu");
        menuLink.addEventListener("click", () => MenuPage());    
    })();

    return {home, menu};
})();

//initial page load
homePage();



