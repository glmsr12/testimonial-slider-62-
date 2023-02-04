var testimonials = document.getElementById('testimonials');
var pageBullet1 = document.getElementById('bullet1');
var pageBullet2 = document.getElementById('bullet2');
var pageBullet3 = document.getElementById('bullet3');

pageBullet1.onclick = function () {
  testimonials.style.transform = 'translateX(870px)';
  pageBullet1.classList.add('active');
  pageBullet2.classList.remove('active');
  pageBullet3.classList.remove('active');
};

pageBullet2.onclick = function () {
  testimonials.style.transform = 'translateX(0px)';
  pageBullet1.classList.remove('active');
  pageBullet2.classList.add('active');
  pageBullet3.classList.remove('active');
};

pageBullet3.onclick = function () {
  testimonials.style.transform = 'translateX(-870px)';
  pageBullet1.classList.remove('active');
  pageBullet2.classList.remove('active');
  pageBullet3.classList.add('active');
};
