// HAMBURGER ANIMATION SCRIPT
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.PageMenu');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active'); 
});

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      mobile_menu.classList.remove('is-active');
      menu_btn.classList.remove('is-active')
      window.location.href = this.href;
    });
  });


//Page-Navigation for Navigation Bar for (MOBILE VIEW)
const pages = {
  home: document.getElementById('homePage'),
  about: document.getElementById('aboutPage'),
  social: document.getElementById('socialPage'),
  works: document.getElementById('worksPage'),
  updates: document.getElementById('updatesPage'),
  personal: document.getElementById('personalPage'),
  blogs: document.getElementById('blogPage'),
};

mobile_menu.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const pageName = clickedElement.classList[0];

  Object.keys(pages).forEach(page => {
    if (page === pageName) {
      pages[page].classList.remove('hideContent');
    } else {
      pages[page].classList.add('hideContent');
    }
  });
});


// Page-Navigation for Navigation Bar for (DESKTOP VIEW)

  const menu = document.querySelector('.menu');
  menu.addEventListener('click', function(event) {
    if (event.target.matches('.menu-item')) {
      
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove('is-active');
      });
      event.target.classList.add('is-active');

      const pageId = event.target.getAttribute('data-page');
      const page = document.querySelector(pageId);
      const pages = document.querySelectorAll('.page');
      pages.forEach(function(page) {
        page.classList.add('hideContent');
      });
      page.classList.remove('hideContent');
    }
  });



// i had multiple attempts to add the "is-active" class to the menu item corresponding to the "about" page when the "know more" button is clicked) 
// but was not able to navigate 
// KnowMore Button Navigation (IN ALTERNATIVE WAY)
document.getElementsByClassName('knowMore')[0].addEventListener('click', function() {
  console.log('Clicked')
  document.getElementById('homePage').classList.add('hideContent');
  document.getElementById('aboutPage').classList.remove('hideContent');
  document.getElementById('socialPage').classList.add('hideContent');
  document.getElementById('worksPage').classList.add('hideContent');
  document.getElementById('updatesPage').classList.add('hideContent');
  document.getElementById('personalPage').classList.add('hideContent')
  document.getElementById('blogPage').classList.add('hideContent')
  document.getElementsByClassName('aboutPageMenu')[0].classList.add('is-active');
  document.getElementsByClassName('homePageMenu')[0].classList.remove('is-active');
  document.getElementsByClassName('socialPageMenu')[0].classList.remove('is-active');
  document.getElementsByClassName('worksPageMenu')[0].classList.remove('is-active');
  document.getElementsByClassName('updatesPageMenu')[0].classList.remove('is-active');
})

// FOLLOWED BY FOOTER BUTTONS

// Footer Buttons Navigations
document.getElementsByClassName('knowMoref')[0].addEventListener('click', function() {
    console.log('Clicked')
    document.getElementById('homePage').classList.add('hideContent');
    document.getElementById('aboutPage').classList.add('hideContent');
    document.getElementById('socialPage').classList.add('hideContent');
    document.getElementById('worksPage').classList.add('hideContent');
    document.getElementById('updatesPage').classList.add('hideContent');
    document.getElementById('personalPage').classList.remove('hideContent')
    document.getElementById('blogPage').classList.add('hideContent')
    document.getElementsByClassName('aboutPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('homePageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('socialPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('worksPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('updatesPageMenu')[0].classList.remove('is-active');
})

document.getElementsByClassName('blogf')[0].addEventListener('click', function() {
    console.log('Clicked')
    document.getElementById('homePage').classList.add('hideContent');
    document.getElementById('aboutPage').classList.add('hideContent');
    document.getElementById('socialPage').classList.add('hideContent');
    document.getElementById('worksPage').classList.add('hideContent');
    document.getElementById('updatesPage').classList.add('hideContent');
    document.getElementById('personalPage').classList.add('hideContent');
    document.getElementById('blogPage').classList.remove('hideContent');
    document.getElementsByClassName('aboutPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('homePageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('socialPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('worksPageMenu')[0].classList.remove('is-active');
    document.getElementsByClassName('updatesPageMenu')[0].classList.remove('is-active');
})


