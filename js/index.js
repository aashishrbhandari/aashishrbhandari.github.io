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
        quickSnap();
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

function quickSnap() {
    let quickSnapModal = document.getElementById('show-quick-snap')
    quickSnapModal.addEventListener('show.bs.modal', function (event) {

        let link = event.relatedTarget;
        let urlLink = link.getAttribute('data-informer');
        let orgTo = link.getAttribute('data-informer-id');

        let modalBody = quickSnapModal.querySelector('.modal-body p');

        modalBody.innerHTML = `
        <h5> You are moving to <b>${orgTo}</b>, Click on Link below to Open the Web App </h5>
            <a href="${urlLink}" target="_blank">${urlLink}</a>
        `;

    });
}

function main() {
    loadNavbar();
    loadFooter();
}

main();