const homePage = () => {
    const contentArea = document.querySelector("#content");
    const homeContentArea = document.createElement("div");
    homeContentArea.id = "content_home";
    contentArea.appendChild(homeContentArea);
    
    // build the main section
    const mainSection = document.createElement("section");
    mainSection.id = "column_left-home";
    homeContentArea.appendChild(mainSection);

    //build the CTA container
    const ctaContainer = document.createElement("article")
    ctaContainer.id = "CTA-container";
    mainSection.appendChild(ctaContainer);

    //add header to CTA container
    const ctaMessage = document.createElement("h1");
    ctaMessage.textContent = "Definitely not your typical New Orleans cuisine"
    ctaMessage.id = "cta_message-home";
    ctaContainer.appendChild(ctaMessage);

    //add CTA buttons
    const ctaPrimary = document.createElement("button");
    ctaPrimary.type = "button";
    ctaPrimary.className = "cta_primary";
    ctaPrimary.textContent = "View Menu";
    ctaContainer.appendChild(ctaPrimary);

    const ctaSecondary = document.createElement("button");
    ctaSecondary.type = "button";
    ctaSecondary.className = "cta_secondary";
    ctaSecondary.textContent = "Get in Touch!";
    ctaContainer.appendChild(ctaSecondary);

    //add social media container
    const socialContainer = document.createElement("div");
    socialContainer.id = "social_container";
    ctaContainer.appendChild(socialContainer);

    //add social media buttons
    const facebookIcon = document.createElement("i");
    facebookIcon.className = "fab fa-facebook";
    socialContainer.appendChild(facebookIcon);
    
    const twitterIcon = document.createElement("i");
    twitterIcon.className = "fab fa-twitter";
    socialContainer.appendChild(twitterIcon);
    
    const instagramIcon = document.createElement("i");
    instagramIcon.className = "fab fa-instagram";
    socialContainer.appendChild(instagramIcon);

    // add the image figure container
    const imageContainer = document.createElement("figure");
    imageContainer.id = "container_image-home";
    homeContentArea.appendChild(imageContainer);

    // add cover image
    const coverImage = document.createElement("img");
    coverImage.src = "images/gumbo.webp"
    imageContainer.appendChild(coverImage);    

}

export default homePage