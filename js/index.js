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

// ============== NAVIGATION ITEMS =================
let navigation = document.querySelectorAll('nav a');
navigation[0].textContent = siteContent['nav']['nav-item-1']
navigation[1].textContent = siteContent['nav']['nav-item-2']
navigation[2].textContent = siteContent['nav']['nav-item-3']
navigation[3].textContent = siteContent['nav']['nav-item-4']
navigation[4].textContent = siteContent['nav']['nav-item-5']
navigation[5].textContent = siteContent['nav']['nav-item-6']
let navigation3 = document.querySelector('nav');
let nav__1 = document.createElement('a');
let nav__2 = document.createElement('a');
nav__1.textContent = 'Hola';
nav__2.textContent = 'Como';
navigation3.append(nav__1);
navigation3.prepend(nav__2);

let navigation2 = document.querySelectorAll('a');
navigation2.forEach( nav => {
  nav.style.color = 'green';
})

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ============== CTA ELEMENTS =================

let ctaWords = document.querySelector('.cta .cta-text h1');
let h1New = siteContent['cta']['h1'].split(' ');
let h1__1 = document.createElement('h1');
let h1__2 = document.createElement('h1');
let h1__3 = document.createElement('h1');
ctaWords.append(h1__1);
ctaWords.append(h1__2);
ctaWords.append(h1__3);
h1__1.textContent = h1New[0];
h1__2.textContent = h1New[1];
h1__3.textContent = h1New[2];

let btn = document.querySelector('.cta-text button');
btn.textContent = siteContent['cta']['button'];

let logo2 = document.getElementById('cta-img');
logo2.setAttribute('src', siteContent['cta']['img-src']);

// ============== MAIN CONTENT/TOP CONTENT =================

let topH4 = document.querySelectorAll('.main-content .top-content .text-content h4');
let topP = document.querySelectorAll('.main-content .top-content .text-content p');

topH4[0].textContent = siteContent['main-content']['features-h4'];
topP[0].textContent = siteContent['main-content']['features-content'];

topH4[1].textContent = siteContent['main-content']['about-h4'];
topP[1].textContent = siteContent['main-content']['about-content'];

// ============== MAIN CONTENT/MIDDLE IMAGE =================

let logo3 = document.getElementById('middle-img');
logo3.setAttribute('src', siteContent['main-content']['middle-img-src']);

// ============== MAIN CONTENT/BOTTOM CONTENT =================

let bottomH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
let bottomP = document.querySelectorAll('.main-content .bottom-content .text-content p');

bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomP[0].textContent = siteContent['main-content']['services-content'];

bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomP[1].textContent = siteContent['main-content']['product-content'];

bottomH4[2].textContent = siteContent['main-content']['vision-h4'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

// ============== CONTACT SECTION =================

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// ============== FOOTER =================

let foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];

// ============== FUN =================

let newHead = document.querySelector('header');
newHead.style.background = '#FAF0E6';

let newBody = document.querySelector('body');
newBody.style.background = '#20B2AA';

let newBtn = document.querySelector('button');
newBtn.style.background = 'black';
newBtn.style.color = 'white';

let newMain = document.querySelector('.main-content');
newMain.style.background = 'burlywood';











