// Sticky header shadow on scroll
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileNavClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => mobileNav.classList.remove('open'))
  );
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.parentElement
      ?.querySelectorAll('.faq-item.open')
      .forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          const ans = openItem.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = null;
        }
      });
    item.classList.toggle('open', !isOpen);
    const answer = item.querySelector('.faq-answer');
    if (answer) answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Waitlist form (demo — no backend wired up yet)
document.querySelectorAll('form[data-waitlist]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = form.parentElement?.querySelector('.form-success');
    form.style.display = 'none';
    if (successMsg) successMsg.style.display = 'block';
  });
});
