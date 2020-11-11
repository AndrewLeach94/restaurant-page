import homePage from './home.js';
import menuPage from './menu.js';

const navigation = (() => {
    const contentArea = document.querySelector("#content")

    //add event listeners
    const home = (() => {
        const homeLink = document.querySelector("#link_home");
        homeLink.addEventListener("click", () => homePage());
    })();

    const menu = (() => {
        const menuLink = document.querySelector("#link_menu");
        menuLink.addEventListener("click", () => menuPage());    
    })();

    return {home, menu};
})();

//initial page load
homePage();



