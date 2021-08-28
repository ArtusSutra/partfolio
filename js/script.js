"use strict"

const isMobile = {
   Android: function() {
         return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function() {
         return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function() {
         return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
         return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
if (isMobile.any()) {
      document.body.classList.add('_touch');

      let header__Arrows = document.querySelectorAll ('.header__arrow');
      if (header__Arrows.length > 0){
            for (let index=0; index < header__Arrows.length; index++) {
                  const headerArrow = header__Arrows[index];
                  headerArrow.addEventListener("click", function(e) {
                        headerArrow.parentElement.classList.toggle('_active');
                  
                        let header__Sublinks = document.querySelectorAll ('.header__sub-link');//close sublink list after 'click'
                        if (header__Sublinks.length > 0){
                              for (let index=0; index < header__Sublinks.length; index++) {
                                    const header__Sublink = header__Sublinks[index];
                                    header__Sublink.addEventListener("click", function(e) {
                                          headerArrow.parentElement.classList.toggle('_active', index=0);
                                    });
                              }
                        }
                  });
            }
      } 

} else {
      document.body.classList.add('_pc');
}

//burger
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
if (headerBurger) {
      headerBurger.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            headerBurger.classList.toggle('_active');
            headerNav.classList.toggle('_active');
      });
}



//scroll by elements of submenu
const scrollSublinks = document.querySelectorAll('.header__sub-link[data-goto]');
if (scrollSublinks.length > 0) {
      scrollSublinks.forEach (scrollSublink => {
            scrollSublink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
            const scrollSublink = e.target;
            if (scrollSublink.dataset.goto && document.querySelector(scrollSublink.dataset.goto)) {
                  const gotoBlock = document.querySelector(scrollSublink.dataset.goto);
                  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (headerBurger.classList.contains('_active')){
                  document.body.classList.remove('_lock');
                  headerBurger.classList.remove('_active');
                  headerNav.classList.remove('_active');
            }
                  window.scrollTo ({
                        behavior: "smooth",
                        top: gotoBlockValue,
                  });
                  e.preventDefault();
            }
      }
}
//scroll by elements of menu "УСЛУГИ"
const scrollLinks = document.querySelectorAll('.header__link[data-goto]');
if (scrollLinks.length > 0) {
      scrollLinks.forEach (_scrolLink => {
            _scrolLink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
            const _scrolLink = e.target;
            if (_scrolLink.dataset.goto && document.querySelector(_scrolLink.dataset.goto)) {
                  const gotoBlock = document.querySelector(_scrolLink.dataset.goto);
                  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (headerBurger.classList.contains('_active')){
                  document.body.classList.remove('_lock');
                  headerBurger.classList.remove('_active');
                  headerNav.classList.remove('_active');
            }
                  window.scrollTo ({
                        behavior: "smooth",
                        top: gotoBlockValue,
                  });
                  e.preventDefault();
            }
      }
}