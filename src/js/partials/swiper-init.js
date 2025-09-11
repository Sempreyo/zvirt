document.addEventListener("DOMContentLoaded", () => {
	const isMobile = window.innerWidth < 768;
	const solutionsCarousel = document.querySelectorAll(".carousel__swiper");

	if (solutionsCarousel.length > 0) {
		solutionsCarousel.forEach(elem => {
			const solutionsCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const solutionsCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: isMobile ? 1 : "auto",
				spaceBetween: isMobile ? 50 : 0,
				effect: isMobile ? "slide" : "cards",
				cardsEffect: isMobile ? undefined : {
					perSlideOffset: 8,
					perSlideRotate: 2,
					slideShadows: false
				},
				loop: true,
				keyboard: true,
				navigation: {
					nextEl: solutionsCarouselNext,
					prevEl: solutionsCarouselPrev,
				},
				pagination: {
					el: ".carousel__pagination",
					clickable: true
				}
			});
		});
	}
});
