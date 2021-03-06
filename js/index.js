const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};




//===========imgs=============

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const cta = document.getElementById("cta-img");
cta.src = siteContent.cta["img-src"];

const middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//===========nav=============

const navLinks = document.querySelectorAll('header nav a');

// navLinks[0].textContent = siteContent.nav["nav-item-1"];
// navLinks[1].textContent = siteContent.nav["nav-item-2"];
// navLinks[2].textContent = siteContent.nav["nav-item-3"];
// navLinks[3].textContent = siteContent.nav["nav-item-4"];
// navLinks[4].textContent = siteContent.nav["nav-item-5"];
// navLinks[5].textContent = siteContent.nav["nav-item-6"];
navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

//===========cta=============

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta["button"];

//===========main-content=============

const mainContentH4 = document.querySelectorAll(".text-content h4");

mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];


const mainContentP = document.querySelectorAll(".text-content p");

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

//===========contact=============

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");

// contactP[0].textContent = siteContent["contact"]["address"];
// contactP[1].textContent = siteContent["contact"]["phone"];
// contactP[2].textContent = siteContent["contact"]["email"];
contactP.forEach((p, index) => {
  p.innerText = Object.values(siteContent['contact'])[index + 1];
});


//===========footer=============

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

//===========Add New Content=============

// navLinks[0].style.color = "green";
// navLinks[1].style.color = "green";
// navLinks[2].style.color = "green";
// navLinks[3].style.color = "green";
// navLinks[4].style.color = "green";
// navLinks[5].style.color = "green";
navLinks.forEach(link => {
  link.style.color = "green"
})


const newBlogElement = document.createElement("a");
newBlogElement.href = "#";
newBlogElement.textContent = "Blog";
newBlogElement.style.color = "red";

const mainNav = document.querySelector("nav");

mainNav.appendChild(newBlogElement);



const newAElement = document.createElement("a");
newAElement.href = "#";
newAElement.textContent = "Home";
newAElement.style.color = "blue";

mainNav.prepend(newAElement);