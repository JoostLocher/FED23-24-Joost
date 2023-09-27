// JavaScript Document
console.log("hi");

/*search*/

var searchButton = document.querySelector ("header nav:first-of-type ul li:nth-of-type(3) a");
var searchForm = document.querySelector ("header form");
var sluitSearch = document.querySelector ("header form a");

searchButton.onclick = openSearch;
sluitSearch.onclick = closeSearch;

function openSearch () {
    searchForm.classList.add("toonSearch");
}

function closeSearch () {
    searchForm.classList.remove("toonSearch");
}

/*menu*/

var menuButton = document.querySelector ("header nav:first-of-type ul li:last-of-type a");
var navMenu = document.querySelector ("header nav:nth-of-type(2)");
var sluitMenu = document.querySelector ("header nav:nth-of-type(2) a:first-of-type");

menuButton.onclick = openMenu;
sluitMenu.onclick = closeMenu;

function openMenu () {
    navMenu.classList.add("toonMenu");
}

function closeMenu () {
    navMenu.classList.remove("toonMenu");
}


/*scrol*/

document.addEventListener('DOMContentLoaded', function() {
    const headerNav = document.querySelector('header nav:first-of-type');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', function() {
      // Controleer de schermgrootte
      if (window.innerWidth > 40 * 16) { // 40em in pixels (1em = 16px)
        const currentScrollTop = window.pageYOffset;
  
        if (currentScrollTop > lastScrollTop) {
          // Scroll naar beneden
          headerNav.style.transform = 'translate(0, -100%)';
        } else {
          // Scroll naar boven
          headerNav.style.transform = 'translate(0, 0)';
        }
  
        lastScrollTop = currentScrollTop;
      }
    });
  });
  