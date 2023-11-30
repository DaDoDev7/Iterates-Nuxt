// if (document.querySelector('.mobile-menu')) {
//   //
//   const menuBox = document.querySelector('.mobile-menu .menu-box');
//   menuBox.classList.add('mCustomScrollbar');
  
//   const mobileMenuContent = document.querySelector('.main-header .menu-area .main-menu').innerHTML;
//   const languageMenuContent = document.querySelector('.main-header .nav-right').innerHTML;
//     //  mobile
//   const menuOuter = document.querySelector('.mobile-menu .menu-box .menu-outer');
//   menuOuter.innerHTML = mobileMenuContent;
//   menuOuter.innerHTML += '<br><br>' + languageMenuContent;
  
//   if (window.matchMedia("(max-width: 991px)").matches) {
//     const navRight = document.querySelector('#nav-right');
//     if (navRight) {
//       navRight.remove();
//     }
//   }

//   // dropdown
//   const dropdownBtns = document.querySelectorAll('.mobile-menu li.dropdown .dropdown-btn');
//   dropdownBtns.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       this.classList.toggle('open');
//       const ul = this.previousElementSibling;
//       if (ul && ul.tagName === 'UL') {
//         ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
//       }
      
//       const megamenu = this.previousElementSibling;
//       if (megamenu && megamenu.classList.contains('megamenu')) {
//         megamenu.style.display = megamenu.style.display === 'none' ? 'block' : 'none';
//       }
//     });
//   });
  
//   // Menu Toggle Btn
  
//     const mobileNavToggler = document.querySelector('.mobile-nav-toggler');
//     mobileNavToggler.addEventListener('click', function () {
//       document.body.classList.add('mobile-menu-visible');
//     });


  
//   // Menu Toggle Btn (Close)
//   const menuBackdrops = document.querySelectorAll('.mobile-menu .menu-backdrop, .mobile-menu .close-btn');
//   menuBackdrops.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       document.body.classList.remove('mobile-menu-visible');
//     });
//   });
  
//   // clic on "Contact" o "Services"
//   const contactBtns = document.querySelectorAll('.toggle-contact, .toggle-services');
//   contactBtns.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       document.body.classList.remove('mobile-menu-visible');
//     });
//   });
// }

