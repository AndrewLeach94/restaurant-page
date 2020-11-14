const ContactPage = () => {
    const removePreviousContent = () => {
        const contentArea = document.querySelector("#content");
        const previousContent = contentArea.firstChild;
    
        //add animateOut class to element before removing it for seamless transition
        previousContent.classList.add("animateOut")
        
        function removeOldPage() {
            previousContent.remove();
            buildContactPage();
            //remove event listener so buildMenuPage function doesn't repeat whenever new menu is loaded
            contentArea.removeEventListener("transitionend", removeOldPage);
        }

        contentArea.addEventListener("transitionend", removeOldPage());    
    };

    //modify all contact details here:
    const contactInfo = {
        email: "name@example.com",
        phone: "123-456-7890",
        facebook: "",
        twitter: "",
        instagram: "",
        weekdayHours: "Monday-Friday: 8AM - 10PM",
        weekendHours: "Saturday & Sunday: 10AM - 10PM",
    }

    const buildContactPage = () => {
        //assemble the body of the contact page
        const mainContent = document.querySelector("#content");

        const contactContent = document.createElement("main");
        contactContent.id = "content_contact";
        mainContent.appendChild(contactContent);

        const header = document.createElement("h1");
        header.classList = "heading-primary";
        header.id = "header_contact";
        header.textContent = "Contact Us";
        contactContent.appendChild(header);
        
        //build operating hours block
        const operatingHoursBlock = (() => {
            const operatingHoursBlock = document.createElement("div");
            operatingHoursBlock.className = "contact_info-block";
            contactContent.appendChild(operatingHoursBlock);

            const heading = document.createElement("h3");
            heading.textContent = "Operating Hours";
            operatingHoursBlock.appendChild(heading);

            const weekdayHours = document.createElement("p");
            weekdayHours.textContent = contactInfo.weekdayHours;
            operatingHoursBlock.appendChild(weekdayHours);
            
            const weekendHours = document.createElement("p");
            weekendHours.textContent = contactInfo.weekendHours;
            operatingHoursBlock.appendChild(weekendHours);

            
        })();
        
        const contactBlock = (() => {
            const contactBlock = document.createElement("div");
            contactBlock.className = "contact_info-block";
            contactContent.appendChild(contactBlock);

            const heading = document.createElement("h3");
            heading.textContent = "Get in Touch";
            contactBlock.appendChild(heading);

            const phoneNumber = document.createElement("p");
            phoneNumber.textContent = "Phone: " + contactInfo.phone;
            contactBlock.appendChild(phoneNumber);
            
            const email = document.createElement("p");
            email.textContent = "Email: " + contactInfo.email;
            contactBlock.appendChild(email);

        })();
        
        const socialBlock = (() => {
            const socialBlock = document.createElement("div");
            socialBlock.className = "contact_info-block";
            contactContent.appendChild(socialBlock);

            const heading = document.createElement("h3");
            heading.textContent = "Connect on Social";
            socialBlock.appendChild(heading);

            const facebook = document.createElement("a");
            facebook.textContent = "Facebook";
            facebook.href = contactInfo.facebook;
            socialBlock.appendChild(facebook);
            
            const twitter = document.createElement("a");
            twitter.textContent = "Twitter";
            twitter.href = contactInfo.twitter;
            socialBlock.appendChild(twitter);
            
            const instagram = document.createElement("a");
            instagram.textContent = "Instagram";
            instagram.href = contactInfo.instagram;
            socialBlock.appendChild(instagram);

        })();



    }

    //load contact page
    const loadPage = (() => removePreviousContent())();

};

export default ContactPage