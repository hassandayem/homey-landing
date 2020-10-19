// ----- Tabs Functionality -----
const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContent = document.querySelectorAll("[data-tab-content]");

// Loop through tabs
tabs.forEach((tab) => {
  // Listen to the click event on each tab
  tab.addEventListener("click", () => {
    // Selcet the tab content (the target) to add the active class
    const target = document.querySelector(tab.dataset.tabTarget);
    // Loop through the content divs to add or remove active class
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    // Loop through the tab itself (the clickable tab) to add or remove active class
    tabs.forEach((tab) => {
      // Remove the active class from the tab
      tab.classList.remove("active");
    });

    // Add the active class again to the tab
    tab.classList.add("active");
    // Add the active class again to the content
    target.classList.add("active");
  });
});

// ----- Swiper Slider functionality -----
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  observer: true,
  observeParents: true,
});

// Animate the form on click

// Transform function
const transform = (e) => {
  sidebarWillTransform.classList.add("transform-sidebar");

  // Remove the trasform after 200ms
  setTimeout(function () {
    sidebarWillTransform.classList.remove("transform-sidebar");
  }, 200);

  e.preventDefault();
};

// 1. Select the target element which will listen to the click event
const animate = document.querySelector(".link");
animate.addEventListener("click", transform);

// 2. Select the element which will be animated
const sidebarWillTransform = document.querySelector("#will-animate");
