/* i have created constant variables to save my navBar list and the sections
and tried to apply the ES6 new methods*/

const ulList = document.querySelector('#navbar__list');
const sections = Array.from(document.querySelectorAll("section"));


/* i have created a fucntion and used the for of loop 
The data-* attributes is used to make me able to store private custom data private to the page.
used node.appendChild to make itemList appended at the new position. 
*/
function createUlList() {
 for (wsection of sections) {
  itemList= document.createElement("li");
  itemList.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`
  ulList.appendChild(itemList);
  }
 }

/*
 I have called the function
*/
createUlList();

/*
 I have used this method getBoundingClientRect() to choose when the active animation shows and
 I used if condition and the class
*/
window.onscroll = function () {
document.querySelectorAll("section").forEach(function (activeSection) {
if (activeSection.getBoundingClientRect().top >= -400 && activeSection.getBoundingClientRect().top <= 200) {
activeSection.classList.add("your-active-class");
} 
else {
activeSection.classList.remove("your-active-class");
}
});
};

/*
To move to sections after pressing on a section from the navigation bar*/

navList.addEventListener("click", (toSection) => {
toSection.preventDefault();
if (toSection.target.dataset.nav) {
document.getElementById(`${toSection.target.dataset.nav}`)
document.scrollintoView({ behavior: "smooth" , block: 'nearest', inline: 'start'});
setTimeout(() => {
location.hash = `${toSection.target.dataset.nav}`;
}, 200);
}
});




