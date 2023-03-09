import VSwiper from "./modules/VSwiper";
import Nav from "./modules/Nav";
import Content from "./modules/Content";
import Anchor from './modules/Anchor';
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

function initCardSlider() {
	swiper.init('.tmpl-hh__card-slider', {
		slidesPerView: 1,
		centeredSlides: true,
		autoHeight: true,
		pagination: {
			el: ".tmpl-hh__slider__pagination",
			type: "fraction",
		},
		navigation: {
			prevEl: '.tmpl-hh__slider-arrow-prev',
			nextEl: '.tmpl-hh__slider-arrow-next',
		},
		breakpoints: {
			1339: {
				spaceBetween: 30
			},
			529: {
				spaceBetween: 15
			}
		},
	})
}

function initGallerySlider() {
	swiper.init('.tmpl-hh__gallery-slider', {
		slidesPerView: 1,
		centeredSlides: true,
		autoHeight: true,
		pagination: {
			el: ".tmpl-hh__gallery-slider__pagination",
			type: "fraction",
		},
		navigation: {
			prevEl: '.tmpl-hh__slider-arrow-prev',
			nextEl: '.tmpl-hh__slider-arrow-next',
		},
		breakpoints: {
			1339: {
				spaceBetween: 30
			},
			529: {
				spaceBetween: 15
			}
		},
	})
}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const btnModal = document.querySelectorAll("*[data-modal-btn]")

for (let i = 0; i < btnModal.length; i++) {
	btnModal[i].addEventListener('click', () => {
		let nameB = btnModal[i].getAttribute('data-modal-btn');
		let modalB = document.querySelector("[data-modal-window='"+nameB+"']");
		modalB.style.display = "block";
		let closeB = modalB.querySelector(".tmpl-hh__header__modal-close");
		closeB.addEventListener('click', () => {
			modalB.style.display = "none";
		})
	})
}

window.onclick = (e) => {
	if(e.target.hasAttribute('data-modal-window')) {
		const modalss = document.querySelectorAll("*[data-modal-window]");
		for (let i = 0; i < modalss.length; i++) {
			modalss[i].style.display = "none";
		}
	}
	if(e.target.hasAttribute('data-img-modal')) {
		const modalsI = document.querySelectorAll("*[data-img-modal]");
		for (let i = 0; i < modalsI.length; i++) {
			modalsI[i].style.display = "none";
		}

	}
}

const imgModal = document.querySelectorAll("*[data-img]")

for (let i = 0; i < imgModal.length; i++) {
	imgModal[i].addEventListener('click', () => {
		let name = imgModal[i].getAttribute('data-img');
		let modal = document.querySelector("[data-img-modal='"+name+"']");
		modal.style.display = "block";
		let close = modal.querySelector(".tmpl-hh__layouts__modal-close");
		close.addEventListener('click', () => {
			modal.style.display = "none";
		})
	})
}


const swiper = new VSwiper();
new Nav();
new Anchor();
new Content();
initCardSlider();
initGallerySlider();