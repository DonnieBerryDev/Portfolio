const newsSections = document.querySelectorAll('.news_slider_section');
const newsSectionsText = document.querySelectorAll('.news_slider_section h4, .news_slider_section h5, .news_slider_section span');
const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const navOpen = document.querySelector('#navOpen')
const navOpenChildren = document.querySelector('#navOpen > .container-main')
const navList = document.querySelectorAll('.navList_options ul li a')
const navProjects = document.querySelector('#nav-projects')
const navGroup = document.querySelector('#nav-group')
const navFire = document.querySelector('#nav-fire')
const navDesign = document.querySelector('#nav-design')
const navBuilding = document.querySelector('#nav-building')
const navigation_links = document.querySelectorAll('.navigation_links')
const activeProjectOverlay = document.querySelector('#activeProjectOverlay')


navList.forEach(nav => {
    console.log(navList)
    nav.addEventListener('mouseenter', function () {
        if (nav.id == 'projects') {
            navOpen.className = 'navOpened navBlue';

            for (i = 0; i < navigation_links.length; i++)
                navigation_links[i].classList.add('hideNavItem')
            navProjects.classList.remove('hideNavItem')
            for (i = 0; i < navList.length; i++)
                navList[i].style.opacity = 0.3;
            this.style.opacity = "1"
        } else if (nav.id == 'design') {
            navOpen.className = 'navOpened navOrange';

            for (i = 0; i < navigation_links.length; i++)
                navigation_links[i].classList.add('hideNavItem')
            navDesign.classList.remove('hideNavItem')

            for (i = 0; i < navList.length; i++)
                navList[i].style.opacity = 0.3;
            this.style.opacity = "1"
        } else if (nav.id == 'building') {
            navOpen.className = 'navOpened navGreen';

            for (i = 0; i < navigation_links.length; i++)
                navigation_links[i].classList.add('hideNavItem')
            navBuilding.classList.remove('hideNavItem')

            for (i = 0; i < navList.length; i++)
                navList[i].style.opacity = 0.3;
            this.style.opacity = "1"
        } else if (nav.id == 'fire') {
            navOpen.className = 'navOpened navRed';


            for (i = 0; i < navigation_links.length; i++)
                navigation_links[i].classList.add('hideNavItem')
            navFire.classList.remove('hideNavItem')

            for (i = 0; i < navList.length; i++)
                navList[i].style.opacity = 0.3;
            this.style.opacity = "1"
        } else if (nav.id == 'group') {
            navOpen.className = 'navOpened navBlack';


            for (i = 0; i < navigation_links.length; i++)
                navigation_links[i].classList.add('hideNavItem')
            navGroup.classList.remove('hideNavItem')


            for (i = 0; i < navList.length; i++)
                navList[i].style.opacity = 0.3;
            this.style.opacity = "1"
        }

    })
})


newsSections.forEach(section => {
    section.addEventListener('click', () => {
        for (i = 0; i < newsSections.length; i++)
            newsSections[i].classList.remove('active_news')
        section.classList.add('active_news');
        console.log(section)
    })
})

hamburger.addEventListener('click', () => {

    for (i = 0; i < navigation_links.length; i++)
        navigation_links[i].classList.add('hideNavItem')
    navGroup.classList.remove('hideNavItem')
    for (i = 0; i < navList.length; i++)
        navList[i].style.opacity = 0.3;
    navList[0].style.opacity = 1;

    document.body.classList.toggle('overflowYdisable')
    navOpenChildren.classList.toggle('hideNav')
    navOpen.classList.toggle('navOpened')
    nav.classList.toggle('hideNavColor')
    if (!navOpen.classList.contains('navOpened'))
        navOpen.className = "navBlack"
})


checkVisability = (el) => {
    let element = el.getBoundingClientRect();
    let distance = -175;
    if (element.top - window.innerHeight < distance) {
        return true;
    } else {
        return false;
    }
}

checkFades = () => {
    let currentYScroll = window.pageYOffset;
    let allSections = document.querySelectorAll('.hidden');
    let fadeNewsSection = document.querySelector('.news_slider_sections')
    let fadeNewsBoxes = document.querySelectorAll('.fade-newsboxes')
    let fadeCompanyBoxes = document.querySelectorAll('.fade-companyboxes')
    let fadeCompanyBoxesSection = document.querySelector('.boxes')

    if (currentYScroll > 0) {
        nav.classList.add('navIsScrolling')
    } else {
        nav.classList.remove('navIsScrolling')
    }

    if (checkVisability(activeProjectOverlay)) {
        activeProjectOverlay.classList.add('flashAnim')
    }

    if (checkVisability(fadeCompanyBoxesSection)) {
        fadeCompanyBoxes.forEach((box, i) => {
            setTimeout(() => {
                box.classList.remove('hideInOrder')
            }, i * 200)
        })
    }

    if (checkVisability(fadeNewsSection)) {
        fadeNewsBoxes.forEach((box, i) => {
            setTimeout(() => {
                box.classList.remove('hideInOrder')
            }, i * 200)
        })
    }


    allSections.forEach(function (section) {
        if (checkVisability(section)) {
            section.classList.remove('hidden')
        }
    })




}

document.addEventListener("scroll", checkFades)