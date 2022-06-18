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
    //console.log("window.location.href => ", window.location.href);
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

/** Generate Awards & Certification */

let certificates_details = [
    {
        "org_id": "aws",
        "org_name": "AWS Learning",
        "org_desc": "Exploring Different Sections of AWS Cloud & Security",
        "org_url": "https://explore.skillbuilder.aws/learn/home",
        "org_logo": "images/company/Amazon_Web_Services_Logo.svg",
        "org_certs": [
            "images/certs/AWS-Learnng-SkillBuilder/AWS_Learning3.png",
            "images/certs/AWS-Learnng-SkillBuilder/AWS_Learning2.png",
            "images/certs/AWS-Learnng-SkillBuilder/AWS_Learning1.png"
        ]
    },
    {
        "org_id": "paloalto",
        "org_name": "PaloAlto",
        "org_desc": "Palo-Alto has Great Expertise in Cloud & Secuity and have diverse Products/Solutions",
        "org_url": "https://beacon.paloaltonetworks.com/",
        "org_logo": "images/company/palo-alto-networks-logo.svg",
        "org_certs": [
            "images/certs/PaloAlto/Fundamentals-of-SOC-Assesment-Award.png",
            "images/certs/PaloAlto/Fundamentals-of-Cloud_Security-Certificate.png",
            "images/certs/PaloAlto/Fundamentals-of-Network_Security-Certificate.png",
            "images/certs/PaloAlto/Fundamentals-of-SOC-Certificate.png",
            "images/certs/PaloAlto/Introduction_to_CyberSecurity_Certificate.png"
        ]
    },
    {
        "org_id": "netskope",
        "org_name": "Netskope",
        "org_desc": "Leader in CASB and now emerging as a Full Fledged Solution: SSE, with recent upgrade in Cloud Firewall Area",
        "org_url": "https://netskope.com/",
        "org_logo": "images/company/netskope_logo2.ico",
        "org_certs": ["images/certs/NetSkope/NetSkope-Training-Certificate.png"]
    },
    {
        "org_id": "tryhackme",
        "org_name": "TryHackMe",
        "org_desc": "Great Place to test your knowledge and keeping connected to new content",
        "org_url": "https://tryhackme.com/dashboard",
        "org_logo": "images/svg/tryhackme_logo1.svg",
        "org_certs": [
            "images/certs/TryHackMe/TryHackMe-Pre_Security_Learning_Path.png",
            "images/certs/TryHackMe/TryHackMe-Complete_Beginner_Learning_Path.png",
            "images/certs/TryHackMe/TryHackMe-Web_Fundamentals.png",
            "images/certs/TryHackMe/TryHackMe-CompTIA_Pentest+.png"
        ]
    },
    {
        "org_id": "gajshield",
        "org_name": "GajShield",
        "org_desc": "An Amazing Indian Based NextGen Firewall",
        "org_url": "https://www.simplilearn.com/skillup-free-online-courses#exploreCourse",
        "org_logo": "images/company/GajShield_Logo.png",
        "org_certs": [
            "images/certs/GajShield/GajShield_Security_Essential.png",
            "images/certs/GajShield/GajShield_Sales_Essential.png"
        ]
    },
    {
        "org_id": "fortinet",
        "org_name": "Fortinet",
        "org_desc": "A Blue Teamers Place to Explore Knowledge & Solutions built on it.",
        "org_url": "https://training.fortinet.com/course/index.php",
        "org_logo": "images/company/fortinet-favicon.ico",
        "org_certs": [
            "images/certs/Fortinet/NSE1-NetworkSecurityAssociate.png",
            "images/certs/Fortinet/NSE2-NetworkSecurityAssociate.png",
            "images/certs/Fortinet/NSE4-WebApplicationSecurity.png",
            "images/certs/Fortinet/The_Evolution_Of_CyberSecurity.png"
        ]
    },
    {
        "org_id": "cybrary",
        "org_name": "Cybrary",
        "org_desc": "Amazing Learning Materials.I am exploring their courses",
        "org_url": "https://app.cybrary.it/",
        "org_logo": "images/company/cybrary1.ico",
        "org_certs": [
            "images/certs/Cybrary/Intro_To_Security.png",
            "images/certs/Cybrary/Cybrary_Learning.png"
        ]
    },
    {
        "org_id": "qualys",
        "org_name": "Qualys",
        "org_desc": "Recently Exploring their Solutions, Blogs and Learning Platform.It is interesting.",
        "org_url": "https://www.qualys.com/training/",
        "org_logo": "images/company/qualys1.ico",
        "org_certs": [
            "images/certs/Qualys/Qualys_EDR_Foundation.png"
        ]
    },
    {
        "org_id": "picus",
        "org_name": "Picus Security",
        "org_desc": "Their Purple Academy provides great learning resources.",
        "org_url": "https://academy.picussecurity.com/start",
        "org_logo": "images/company/picus1.png",
        "org_certs": [
            "images/certs/Picus/Picus_Security_EDR_Beginner.png"
        ]
    },
    {
        "org_id": "simplilearn",
        "org_name": "SimpliLearn",
        "org_desc": "Their SkillUp Program is great",
        "org_url": "https://www.simplilearn.com/skillup-free-online-courses#exploreCourse",
        "org_logo": "images/company/simplilearn_favicon.ico",
        "org_certs": [
            "images/certs/SimpliLearn/Simplilearn_SkillUp_Intro_to_CyberSec.png",
            "images/certs/SimpliLearn/SimpliLearn_Intro_To_Cloud_Computing.png"
        ]
    }


]

function builtCertSection(certificates_details) {

    let selectonList = "";
    let dataContentList = "";
    let activer = "active"

    for (let oneCertSection of certificates_details) {

        if (selectonList !== "") { activer = ""; }
        tempData = generateOneCertSection(oneCertSection, activer);
        tempSelectonList = tempData[0];
        tempDataContentList = tempData[1];

        selectonList = selectonList + tempSelectonList;
        dataContentList = dataContentList + tempDataContentList;

    }

    let fullCertSection = `    
        <div class="row row-gap-40">
            <div class="col-lg-7" style="padding-right: 20px; position: relative;">
                <div class="list-group certs-list" id="list-tab" role="tablist">
                    ${selectonList}
                </div>
            </div>
            <div class="col-lg-5">
                <div class="tab-content certs-slide-show" id="nav-tabContent" style="padding-top: 10px;">
                    ${dataContentList}
                </div>
            </div>
        </div>
    `

    /** Need to Revisit */
    let certificationsSection = document.querySelector("CertSection");
    certificationsSection.innerHTML = fullCertSection;


    function generateOneCertSection(oneCert, activer) {

        let oneSelectorList = `
            <a class="list-group-item list-group-item-action ${activer} d-flex gap-3 py-3" aria-current="true" id="${oneCert.org_id}-tab" data-bs-toggle="list" href="#list-${oneCert.org_id}-certs" role="tab" aria-controls="list-home">
                <img src="${oneCert.org_logo}" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0 bg-dark">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h5 class="mb-1">${oneCert.org_name}</h5>
                        <p class="mb-0 opacity-75">${oneCert.org_desc}</p>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-secondary shadow" data-bs-toggle="modal" data-bs-target="#show-quick-snap" data-informer="${oneCert.org_url}" data-informer-id="${oneCert.org_name}" style="position: absolute; right: -15px;">
                            Visit
                            <img src="./images/svg/link_white.svg" alt="">
                        </button>
                    </div>
                </div>
            </a>
        `;

        let imgBtns = generateBtnList(oneCert.org_certs, oneCert.org_id);

        let oneTabContent = `
            <div class="tab-pane fade show ${activer}" id="list-${oneCert.org_id}-certs" role="tabpanel" aria-labelledby="${oneCert.org_id}-tab">
                <div id="carousel-${oneCert.org_id}-certs" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">                                
                    ${imgBtns}               
                    <div class="carousel-inner">                                                
                        ${getCertImage(oneCert.org_certs)}                                             
                    </div>                
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${oneCert.org_id}-certs"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>                
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${oneCert.org_id}-certs"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>                
                </div>
            </div>
        `;

        return [oneSelectorList, oneTabContent]

    }

    function getCertImage(certImgList) {

        let imgList = "";
        let activer = "active"

        for (let oneCertImg of certImgList) {
            if (imgList !== "") { activer = ""; }
            let tempImgList = `
                <div class="carousel-item ${activer}">
                    <div class="card text-dark card-transparent shadow-none bg-grey">
                        <img src="${oneCertImg}" class="card-img-top" alt="...">
                    </div>
                </div>
            `
            imgList = imgList + tempImgList;
        }

        return imgList;
    }

    function generateBtnList(certImgList, org_id) {

        let allBtnList = "";
        let activer = `class="active" aria-current="true"`;

        for (let oneBtn in certImgList) {
            if (allBtnList !== "") { activer = ""; }
            let tempData = `<button type="button" data-bs-target="#carousel-${org_id}-certs" data-bs-slide-to="${oneBtn}" ${activer} aria-label="Slide ${oneBtn}"></button>`
            allBtnList = allBtnList + tempData;
        }

        return `
            <div class="carousel-indicators">
            ${allBtnList}
            </div>
        `
    }


}

function main() {
    loadNavbar();
    loadFooter();
    builtCertSection(certificates_details);
}

main();