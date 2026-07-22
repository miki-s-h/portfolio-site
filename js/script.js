const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
  menuToggle.classList.toggle('is-active');
});

// nav-menuの中の全リンクを取得
const navLinks = document.querySelectorAll('.nav-menu a');

// リンクが1個ずつクリックされたら、メニューを閉じる
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
  });
});