import homePage from './home.js';
import MenuPage from './menu.js';
import ContactPage from './contact.js';

const navigation = (() => {
    const contentArea = document.querySelector("#content")

    //add event listeners
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => homePage())



    const home = (() => {
        const homeLink = document.querySelector("#link_home");
        homeLink.addEventListener("click", () => homePage());
    })();

    const menu = (() => {
        const menuLink = document.querySelector("#link_menu");
        menuLink.addEventListener("click", () => MenuPage());    
    })();
    
    const contact = (() => {
        const contactLink = document.querySelector("#link_contact");
        contactLink.addEventListener("click", () => ContactPage());    
    })();

    return {home, menu, contact};
})();

//initial page load
homePage();


