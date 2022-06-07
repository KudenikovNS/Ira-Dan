/* Для осуществления всплытия дипломов */
/* const diploms = document.querySelector(".education__diploms");
const openDiploms = document.querySelector(".education__title");

openDiploms.onclick = () => {
  diploms.classList.toggle("open");
}; */

/* const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", 
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
 */

/* new Swiper(".swiper", {
  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Навигация
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    //Буллиты
    clickable: true,
  },
  //Количество отображений слайдев
  //!!! Так же можно поставить не целой число, а 1.5 например
  //Данное решение можно будет использовать для реализации на десктопе первого слайдера
  slidesPerView: 1,
  //Делаем бесконечную прокрутку
  loop: true,
}); */

new Swiper(".swiper", {
  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Навигация
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    //Буллиты
    clickable: true,
  },
  //Количество отображений слайдев
  //!!! Так же можно поставить не целой число, а 1.5 например
  //Данное решение можно будет использовать для реализации на десктопе первого слайдера
  //slidesPerView: 6,
  //Делаем бесконечную прокрутку
  /*   : "auto",
 loopedSlides
  /* autoHeight: true, */
  spaceBetween: 30,
  centeredSliders: true,
  loop: true,
  slidesPerView: 3.5,
});
