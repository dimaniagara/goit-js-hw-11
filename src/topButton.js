export { onScroll, onToTopBtn };

const toTopBtn = document.querySelector('.btn-top');

window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTopBtn.classList.add('btn-top--visible');
  }
  if (scrolled < coords) {
    toTopBtn.classList.remove('btn-top--visible');
  }
}

function onToTopBtn() {
  if (window.pageOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
