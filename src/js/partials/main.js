document.addEventListener("DOMContentLoaded", () => {
	const mobile = window.matchMedia("(width >= 768px)");

	/* Анимация трассы на главной */
	const sectionHero = document.querySelector(".hero");

	if (sectionHero && mobile.matches) {
		const tabs = sectionHero.querySelectorAll(".hero__tab-button");
		const tabsContent = sectionHero.querySelectorAll(".hero__tabs-bg-image");

		tabs.forEach((tab, index) => {
			tab.addEventListener("mouseenter", () => {
				tabsContent.forEach(el => el.classList.add("hide"));
				tabsContent[index+1].classList.remove("hide");
			});

			tab.addEventListener("mouseleave", () => {
				tabsContent.forEach(el => el.classList.remove("hide"));
			});
		});
	}

	/* Якори */
	const anchors = document.querySelectorAll('.anchor');

	if (anchors && anchors.length > 0) {
		anchors.forEach(anchor => {
			anchor.addEventListener("click", function (e) {
				//e.preventDefault();

				if (window.location.hash) {
					document.querySelector(window.location.hash).scrollIntoView({
						behavior: "smooth"
					});
				}

				if (window.matchMedia("(max-width: 767px)").matches && anchor.closest(".header__menu") !== null) {
					openNav();
				}
			});
		});
	}

	/* Скролл к началу */
	const buttonUp = document.querySelector(".button-up");

	const initButtonUp = () => {
		if (buttonUp) {
			window.addEventListener("scroll", buttonUpHandler);

			buttonUp.addEventListener("click", () => {
				document.querySelector("body").scrollIntoView({
					behavior: "smooth"
				});
			});
		}
	}

	const buttonUpHandler = () => {
		scroll = window.pageYOffset;

		if (scroll > 300) {
			buttonUp.classList.add("button-up--visible");
		} else {
			buttonUp.classList.remove("button-up--visible");
		}
	}

	initButtonUp();
});
