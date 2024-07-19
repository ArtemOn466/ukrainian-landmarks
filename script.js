// "use strict";
// document.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.querySelector(".ukraine");

//   const observerOptions = {
//     root: null, // Use the viewport as the container
//     rootMargin: "0px",
//     threshold: 1, // Trigger when at least 1% of the element is visible
//   };

//   const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("ukraine");
//       } else {
//         entry.target.classList.remove("ukraine");
//       }
//     });
//   };

//   const observer = new IntersectionObserver(observerCallback, observerOptions);
//   observer.observe(h1);
// });
