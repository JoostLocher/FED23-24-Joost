
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
var sluitMenu = document.querySelector ("header nav:nth-of-type(2) a:nth-of-type(2)");

menuButton.onclick = openMenu;
sluitMenu.onclick = closeMenu;

function openMenu () {
    navMenu.classList.add("toonMenu");
}

function closeMenu () {
    navMenu.classList.remove("toonMenu");
}

/*programma*/

var justAnnounncedButton = document.querySelector ("main section:nth-of-type(2) section:first-of-type > ul li:first-of-type");
var nextUpButton = document.querySelector ("main section:nth-of-type(2) section:first-of-type > ul li:last-of-type");
var justAnnounced = document.querySelector ("main section:nth-of-type(2) section:first-of-type ul:nth-of-type(2)");
var nextUp = document.querySelector ("main section:nth-of-type(2) section:first-of-type ol");

justAnnounncedButton.onclick = viewJust;
nextUpButton.onclick = viewNext;

function viewJust () {
    justAnnounced.classList.add("show");
    justAnnounced.classList.remove("hide");
    nextUp.classList.add("hide");
    nextUp.classList.remove("show");
    justAnnounncedButton.classList.add("show");
    justAnnounncedButton.classList.remove("hide");
    nextUpButton.classList.add("hide");
    nextUpButton.classList.remove("show");
}

function viewNext () {
    nextUp.classList.add("show");
    nextUp.classList.remove("hide");
    justAnnounced.classList.add("hide");
    justAnnounced.classList.remove("show");
    nextUpButton.classList.add("show");
    nextUpButton.classList.remove("hide");
    justAnnounncedButton.classList.add("hide");
    justAnnounncedButton.classList.remove("show");
    
}






  