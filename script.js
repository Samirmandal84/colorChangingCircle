'use strict';
let rect = document.querySelector('#center');

rect.addEventListener('mousemove', function (details) {
  let rectangleValue = rect.getBoundingClientRect();
  let intervalValue = details.clientX - rectangleValue.left;

  if (intervalValue < rectangleValue.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleValue.width / 2,
      255,
      0,
      intervalValue
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0 ,0 )`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectangleValue.width / 2,
      rectangleValue.width,
      0,
      255,
      intervalValue
    );

    gsap.to(rect, {
      backgroundColor: `rgb(0 ,0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener('mouseleave', function () {
  gsap.to(rect, {
    backgroundColor: 'white',
  });
});

const clickBtn = document.querySelector('.btn-click');
clickBtn.addEventListener('click', function () {
  const name = prompt(`What's your Name?`);
  if (name !== null && name !== '') alert(`Hello ${name} 🌚 FUCK YOU 🖕🏻!!!`);
});
