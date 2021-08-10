/*** Comments:  */
function thisFilePath() {
    let currhref = window.location.href;
    let filePath = currhref.substring(0, currhref.lastIndexOf("/"));
    return filePath;
}

const thisLoc = thisFilePath();

// Get Navbar
async function loadNavbar() {
    let navComponent = document.querySelector(".navbar-component")
    if (navComponent) {
        document.querySelector(".navbar-component").innerHTML = await (await fetch(thisLoc + '/navbar.html')).text();
        setActiveLink();
    }
}

// Get Footer
async function loadFooter() {
    let fooComponent = document.querySelector(".footer-component")
    if (fooComponent) {
        document.querySelector(".footer-component").innerHTML = await (await fetch(thisLoc + '/footer.html')).text();
    }
}

function setActiveLink() {
    console.log("window.location.href => ", window.location.href);
    let thisResFile = window.location.pathname.split("/").pop().split("#")[0].trim();

    let navLinks = document.querySelectorAll("nav .navbar-nav .nav-link");

    for (oneNavLink of navLinks) {

        let currResFile = oneNavLink.href.split("/").pop().trim();

        if (thisResFile === "" && (oneNavLink.href === "#" || currResFile === "index.html")) {
            oneNavLink.classList.add("active");
            break;
        }

        if (thisResFile === currResFile) {
            oneNavLink.classList.add("active");
            break;
        }

    }
}

function main() {
    loadNavbar();
    loadFooter();

}

main();