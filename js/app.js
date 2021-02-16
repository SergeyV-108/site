/* Активация бургера и меню top-header */

let topHeaderBurger = document.querySelector('.top-header__burger');
let topHeaderMenu = document.querySelector('.top-header__menu');
let body = document.querySelector('body');


topHeaderBurger.addEventListener("click", function (e) {
	topHeaderBurger.classList.toggle('active');
	topHeaderMenu.classList.toggle('active');
	body.classList.toggle('lock');

});

/* Активация меню и ссылок bottom-header*/

let bottomHeaderBurger = document.querySelector('.bottom-header__burger');
let bottomHeaderMenu = document.querySelector('.bottom-header__menu');

bottomHeaderBurger.addEventListener("click", function (e) {
	bottomHeaderBurger.classList.toggle('active');
	bottomHeaderMenu.classList.toggle('active');
	body.classList.toggle('lock');

});

let bottomHeaderLinks = document.querySelectorAll('.bottom-header__link');

for (let bottomHeaderLink of bottomHeaderLinks) {

	bottomHeaderLink.onclick = function () {

		let bottomHeaderLinksActives = document.querySelectorAll('.bottom-header__link.active');

		for (let bottomHeaderLinksActive of bottomHeaderLinksActives) {
			bottomHeaderLinksActive.classList.remove('active');
		}
		bottomHeaderLink.classList.add('active');
	}
};

/* Активация переключения по меню "Browse Categories" */

let categoriesSideLinks = document.querySelectorAll('.categories-side__link');

for (let categoriesSideLink of categoriesSideLinks) {

	categoriesSideLink.onclick = function () {

		let categoriesSideLinksActive = document.querySelectorAll('.categories-side__link.active');

		for (let categoriesSideLinkActive of categoriesSideLinksActive) {
			categoriesSideLinkActive.classList.remove('active');
		}
		categoriesSideLink.classList.add('active');
	}
};

/* Активация поиска search-loupe */

let searchLoupeLink = document.querySelector('.search-loupe__link');
let columnItems = document.querySelector('.column-items');
let columnLogo = document.querySelector('.column-logo');
let columnSearch = document.querySelector('.column-search');
let columnSearchForm = document.querySelector('.column-search__form');

searchLoupeLink.addEventListener("click", function (e) {
	columnItems.classList.toggle('active');
	columnLogo.classList.toggle('active');
	columnSearch.classList.toggle('active');
	columnSearchForm.classList.toggle('active');
});

/* Активация переключения кол-ва карточек товаров quantity-body */

let quantityBodyLinks = document.querySelectorAll('.quantity-body__link');

for (let quantityBodyLink of quantityBodyLinks) {

	quantityBodyLink.onclick = function () {

		let quantityBodyLinkActives = document.querySelectorAll('.quantity-body__link.active');

		for (let quantityBodyLinkActive of quantityBodyLinkActives) {
			quantityBodyLinkActive.classList.remove('active');
		}
		quantityBodyLink.classList.add('active');
	}
};

/* Активация переключения страниц number-list */

let numberListLinkPages = document.querySelectorAll('.number-list__link_page');

for (let numberListLinkPage of numberListLinkPages) {

	numberListLinkPage.onclick = function () {

		let numberListLinkPagesActives = document.querySelectorAll('.number-list__link_page.active');

		for (let numberListLinkPagesActive of numberListLinkPagesActives) {
			numberListLinkPagesActive.classList.remove('active');
		}
		numberListLinkPage.classList.add('active');
	}
};

/* Активация переключения ОБЩАЯ */

/* 
let quantityBodyLinks = document.querySelectorAll('.quantity-body__link');
let numberListLinkPages = document.querySelectorAll('.number-list__link_page');
let allLinks = [quantityBodyLinks, numberListLinkPages];
for (let i = 0; i < ; i++){}


for (let allLink of allLinks[i]) {

	allLink.onclick = function () {

		let numberListLinkPagesActives = document.querySelectorAll('.number-list__link_page.active');

		for (let numberListLinkPagesActive of numberListLinkPagesActives) {
			numberListLinkPagesActive.classList.remove('active');
		}
		allLinks.classList.add('active');
	}
}; */


/* Перемещение меню "Browse Categories"  */

let sidePageItem_1 = document.querySelector('.side-page__item_1');
let sidePageItem_2 = document.querySelector('.side-page__item_2');
let pageBody = document.querySelector('.page__body');
let wrapper = document.querySelector('.wrapper');

window.addEventListener('resize', function () {

	pageBody.prepend(sidePageItem_1);

	if (wrapper.offsetWidth > 730) {
		sidePageItem_2.before(sidePageItem_1);
	}

});

