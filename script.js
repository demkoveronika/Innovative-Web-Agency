document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header__content-item-link");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const faqItems = document.querySelectorAll(".faq__content-items > div");

  faqItems.forEach(faqItem => {
    faqItem.classList.remove("faq__content-item--active");
    faqItem.classList.add("faq__content-item--disabled");
  });

  faqItems.forEach(item => {
    const button = item.querySelector(".faq__content-item-top--button");

    button.addEventListener("click", function () {
      const isActive = item.classList.contains("faq__content-item--active");

      faqItems.forEach(faqItem => {
        faqItem.classList.remove("faq__content-item--active");
        faqItem.classList.add("faq__content-item--disabled");
      });

      if (!isActive) {
        item.classList.add("faq__content-item--active");
        item.classList.remove("faq__content-item--disabled");
      }
    });
  });

  const items = document.querySelectorAll('.testimonials__content-item');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');
  const lines = document.querySelectorAll('.testimonials__content-pagination--line');
  const totalItems = items.length;
  const itemsPerPage = 2;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentIndex = 0;

  function updateSlider() {
    items.forEach((item, index) => {
      if (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    if (currentIndex === 0) {
      leftButton.classList.add('disabled');
      leftButton.disabled = true;
      rightButton.classList.remove('disabled');
      rightButton.classList.add('active');
      rightButton.disabled = false;
    } else if (currentIndex === totalPages - 1) {
      rightButton.classList.add('disabled');
      rightButton.disabled = true;
      leftButton.classList.remove('disabled');
      leftButton.classList.add('active');
      leftButton.disabled = false;
    } else {
      leftButton.classList.remove('disabled');
      leftButton.classList.add('active');
      rightButton.classList.remove('disabled');
      rightButton.classList.add('active');
      leftButton.disabled = false;
      rightButton.disabled = false;
    }

    lines.forEach((line, index) => {
      line.classList.remove('active');
      line.classList.add('inactive');

      if (index === currentIndex) {
        line.classList.remove('inactive');
        line.classList.add('active');
      }
    });
  }

  leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();
});
