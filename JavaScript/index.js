//const nav = document.querySelector("#nav");
/* console.log(nav); */
//const navBtn = document.querySelector("#nav-btn");
/* console.log(navBtn); */
//const navBtnImg = document.querySelector("#nav-btn-img");
/* console.log(navBtnImg); */

//navBtn.onclick = () => {
//if (nav.classList.toggle("open")) {
//navBtnImg.src = "./img/icons/nav-close.svg";
/* console.log(navBtnImg); */
/* console.log(nav); */
//} else {
//   navBtnImg.src = "./img/icons/nav-open.svg";
/* console.log(navBtnImg); */
/* console.log(nav);*/
// }
//};
const diploms = document.querySelector(".education__diploms");
const openDiploms = document.querySelector(".education__title");

openDiploms.onclick = () => {
  diploms.classList.toggle("open");
};
