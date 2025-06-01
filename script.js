var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName, event) {
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
    tabContents[i].classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Scroll-triggered About section reveal
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("show");
        } else {
          aboutSection.classList.remove("show"); // <-- Allow re-trigger
        }
      });
    },
    {
      threshold: 0.2, // 20% of section visible
    }
  );

  observer.observe(aboutSection);
});
