const MenuPage = () => {
    const removePreviousContent = () => {
        const contentArea = document.querySelector("#content");
        const previousContent = contentArea.firstChild;
    
        //add animateOut class to element before removing it for seamless transition
        previousContent.classList.add("animateOut")
        
        function removeOldPage() {
            previousContent.remove();
            buildMenuPage();
            //remove event listener so buildMenuPage function doesn't repeat whenever new menu is loaded
            contentArea.removeEventListener("transitionend", removeOldPage);
        }

        contentArea.addEventListener("transitionend", removeOldPage());    
    }

    const buildMenuPage = () => {
    //build menu container 
    const contentArea = document.querySelector("#content");

    const menuContentArea = document.createElement("div");
    menuContentArea.id = "content_menu";
    contentArea.appendChild(menuContentArea);

    //build the grid structure
    const menuParentGrid = document.createElement("main"); 
    menuParentGrid.id = "menu_parent-grid";
    menuParentGrid.className = "fadeIn";
    menuContentArea.appendChild(menuParentGrid);

    //build the menu heading
    const heading = document.createElement("h1");
    heading.id = "menu_heading-primary";
    heading.textContent = "Menu";
    menuParentGrid.appendChild(heading);

    //build the menu navigation

    const navContainer = document.createElement("div");
    navContainer.id = "menu_navigation";
    menuParentGrid.appendChild(navContainer);

    //build menu navigation buttons
    const buttonAppetizer = document.createElement("button");
    buttonAppetizer.type = "button";
    buttonAppetizer.id = "menu_nav-appetizer";
    buttonAppetizer.id = "menu_nav-button";
    buttonAppetizer.textContent = "Appetizers";
    navContainer.appendChild(buttonAppetizer);
    
    const buttonEntree = document.createElement("button");
    buttonEntree.type = "button";
    buttonEntree.id = "menu_nav-entree";
    buttonEntree.id = "menu_nav-button";
    buttonEntree.textContent = "Entrees";
    navContainer.appendChild(buttonEntree);
    
    const buttonDessert = document.createElement("button");
    buttonDessert.type = "button";
    buttonDessert.id = "menu_nav-dessert";
    buttonDessert.id = "menu_nav-button";
    buttonDessert.textContent = "Desserts";
    navContainer.appendChild(buttonDessert);

    // build the menu item container
    const itemParent = document.createElement("div");
    itemParent.id = "menu_item-parent";
    menuParentGrid.appendChild(itemParent);

    // build the menu item objects
    const appetizers = [
        {
            name: "Seafood Gumbo",
            bio: "Some seafood gumbo",
            price: "$9.95",
        },

        {
            name: "Soup of the Day",
            bio: "We rotate through our soups on a seasonal basis",
            price: "$9.95",
        },

        {
            name: "Boudin Egg Roll",
            bio: "Served with a vibrant mirliton jicama slaw and a crispy andouille vinaigrette",
            price: "$9.95",
        },

        {
            name: "Wedge Salad",
            bio: "Iceberg lettuce topped with a creamy creole dressing, grape tomato, red onion and crumbled blue cheese",
            price: "$7.95",
        },

        {
            name: "Onion Tart",
            bio: "Served warm, topped with arugula, crispy bacon batons and creole mustard vinaigrette",
            price: "$9.50",
        },

    ]

    const entrees = [
        {
            name: "Shrimp and Grits",
            bio: "Slow cooked stone ground grits, topped with Louisiana Gulf shrimp, leeks, smoked tomato butter sauce and crispy garlic",
            price: "$29",
        },

        {
            name: "Crispy Onion Salmon",
            bio: "Faroe Islands Salmon topped with a sweet onion panko crust and served with haricots verts and a wild mushroom cream sauce",
            price: "$31",
        },

        {
            name: "Pesto Linguine",
            bio: "Sauteed asparagus, grape tomato, arugula, red onion, roasted bell pepper and sweet corn tossed with linguine and pesto",
            price: "$22, w/shrimp: $31",
        },

        {
            name: "Roasted Half Chicken",
            bio: "House brined chicken with buttermilk mashed potatoes, sauteed kale and bacon, and a Steen’s cane syrup glaze",
            price: "$29",
        },

        {
            name: "Wood Grilled Porkschop",
            bio: "Double cut chop served with andouille potato hash, smoked corn cream and haricots verts",
            price: "$32",
        },


    ]

    const desserts = [
        {
            name: "White Chocolate Bread Pudding",
            bio: "With candied pecans and rum sauce",
            price: "$9.95",
        },

        {
            name: "Flourless Chocolate Cake",
            bio: "With creme anglaise and blackberries",
            price: "$9.95",
        },

        {
            name: "Vanilla Bean Créme Brûlée",
            bio: "Self-explainatory...",
            price: "$9.95",
        },

    ]

    // populate the menu!

    //run appetizers by default on page load
    const populateAppetizers = () => {
        const removePreviousMenu = () => {
            const previousMenu = document.querySelector("#menu_item-parent");

            //add animateOut class to element before removing it for seamless transition
            previousMenu.className = "animateOut";

            const removeElement = () => {
                while (previousMenu.firstChild) {
                    previousMenu.removeChild(previousMenu.firstChild);
                }
                
                //populate the menu
                populateMenu();
            }
                //remove all DOM elements aftger the transition has ended
                previousMenu.addEventListener("transitionend", () => removeElement()); 

        };

        const populateMenu = () => {
            // create the heading
            const heading = document.createElement("h2");
            heading.className = "menu_subheading";
            heading.textContent = "Appetizers";
            itemParent.appendChild(heading); 

            //build a loop that adds every menu item to the item container
            appetizers.forEach(currentItem => {
                const itemContainer = document.createElement("div");
                itemContainer.id = `appetizer_item-${currentItem.name}`
                itemContainer.className = "item_container";
                itemParent.appendChild(itemContainer);
                

                const name = document.createElement("h4");
                name.textContent = currentItem.name;

                const bio = document.createElement("p");
                bio.textContent = currentItem.bio;

                const price = document.createElement("p");
                price.textContent = currentItem.price;

                // push menu items to its container
                itemContainer.appendChild(name);
                itemContainer.appendChild(bio);
                itemContainer.appendChild(price);
            })
        
        }

        //test if the page just loaded and skip the old delete process if page is loading for first time
        if (itemParent.childElementCount == 0) {
            populateMenu();
        }
        
        else {
            removePreviousMenu();
        }
        
        const animateIn = () => itemParent.className = "animateIn";

    };

    const populateEntrees = () => {
        //remove previous content - if any
        const removePreviousMenu = (() => {
            const previousMenu = document.querySelector("#menu_item-parent");

            //add animateOut class to element before removing it for seamless transition
            previousMenu.className = "animateOut";

            const removeElement = () => {
                while (previousMenu.firstChild) {
                    previousMenu.removeChild(previousMenu.firstChild);
                }
                
                //populate the menu
                populateMenu();
            }
                //remove all DOM elements aftger the transition has ended
                previousMenu.addEventListener("transitionend", () => removeElement()); 

        })();
        
        const populateMenu = () => {
            // create the heading
            const heading = document.createElement("h2");
            heading.className = "menu_subheading";
            heading.textContent = "Entrées";
            itemParent.appendChild(heading); 

            //build a loop that adds every menu item to the item container
            entrees.forEach(currentItem => {
                const itemContainer = document.createElement("div");
                itemContainer.id = `entree_item-${currentItem.name}`
                itemContainer.className = "item_container";
                itemParent.appendChild(itemContainer);
                

                const name = document.createElement("h4");
                name.textContent = currentItem.name;

                const bio = document.createElement("p");
                bio.textContent = currentItem.bio;

                const price = document.createElement("p");
                price.textContent = currentItem.price;

                // push menu items to its container
                itemContainer.appendChild(name);
                itemContainer.appendChild(bio);
                itemContainer.appendChild(price);

                //animate the menu in
                animateIn();
        })

        }

        const animateIn = () => itemParent.className = "animateIn";

    };

    const populateDesserts = () => {
        //remove previous content - if any
        const removePreviousMenu = (() => {
            const previousMenu = document.querySelector("#menu_item-parent");

            //add animateOut class to element before removing it for seamless transition
            previousMenu.className = "animateOut";

            const removeElement = () => {
                while (previousMenu.firstChild) {
                    previousMenu.removeChild(previousMenu.firstChild);
                }
                
                //populate the menu
                populateMenu();
            }
                //remove all DOM elements aftger the transition has ended
                previousMenu.addEventListener("transitionend", () => removeElement()); 

        })();
        
        const populateMenu = () => {
        // create the heading
        const heading = document.createElement("h2");
        heading.className = "menu_subheading";
        heading.textContent = "Desserts";
        itemParent.appendChild(heading); 

        //build a loop that adds every menu item to the item container
        desserts.forEach(currentItem => {
            const itemContainer = document.createElement("div");
            itemContainer.id = `appetizer_item-${currentItem.name}`
            itemContainer.className = "item_container";
            itemParent.appendChild(itemContainer);
            

            const name = document.createElement("h4");
            name.textContent = currentItem.name;

            const bio = document.createElement("p");
            bio.textContent = currentItem.bio;

            const price = document.createElement("p");
            price.textContent = currentItem.price;

            // push menu items to its container
            itemContainer.appendChild(name);
            itemContainer.appendChild(bio);
            itemContainer.appendChild(price);

            //animate the menu in
            animateIn();
        })

        }

        const animateIn = () => itemParent.className = "animateIn";
    };

    //add button event listeners 
    buttonEntree.addEventListener("click", () => populateEntrees());
    buttonDessert.addEventListener("click", () => populateDesserts())
    buttonAppetizer.addEventListener("click", () => populateAppetizers());

    //load the appetizers by default
    const initialLoad = (() => populateAppetizers())();

    }

    //remove previous content and build menu page
    removePreviousContent();

}

export default MenuPage