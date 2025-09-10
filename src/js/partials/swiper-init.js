document.addEventListener("DOMContentLoaded", () => {
	const solutionsCarousel = document.querySelectorAll(".carousel__swiper");

	if (solutionsCarousel.length > 0) {
		solutionsCarousel.forEach(elem => {
			const solutionsCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const solutionsCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				autoHeight: true,
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
