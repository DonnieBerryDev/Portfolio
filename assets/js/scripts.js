  AOS.init({
      duration: 1000,
      offset: 200,
  });

  const nav = document.querySelector('nav')
  const hamburger = document.querySelector('#hamburger')
  const navLinks = document.querySelectorAll('nav a')
  const showMore = document.querySelector('.hero_showmore')

  function scrollEvent() {
      console.log(navLinks)
      if (window.scrollY > 0) {
          nav.classList.add('active-nav')
      } else {
          nav.classList.remove('active-nav')
      }
  }

  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          nav.classList.remove('nav-open')
          document.body.classList.remove('disableScroll')
      })
  })

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('nav-open')
      document.body.classList.toggle('disableScroll')
      console.log(hamburger)
  })

  document.addEventListener('scroll', scrollEvent)