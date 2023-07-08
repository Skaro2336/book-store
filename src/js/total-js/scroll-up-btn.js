const scrollTop = document.querySelector('#scroll-top');

window.addEventListener('scroll', onScrollToTop);
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
scrollTop.addEventListener('click', onScrollToTopClick);

function onScrollToTop() {
  window.onscroll = () => {
    if (window.scrollY > 700) {
      scrollTop.classList.remove('js-scroll-up_hidden');
    } else if (window.scrollY < 700) {
      scrollTop.classList.add('js-scroll-up_hidden');
    }
  };
}

function onScrollToTopClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}