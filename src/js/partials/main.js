document.addEventListener("DOMContentLoaded", () => {
	const mobile = window.matchMedia("(width >= 768px)");
	const desktop = window.matchMedia("(width >= 1280px)");

	document.body.removeAttribute("data-load");

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

	/* Разделить строку на символы */
	const hero = document.querySelector(".hero");
	if (hero && desktop.matches) {
		const splitText = new SplitType(".hero__title", {
			types: "chars"
		});

		/* Анимация появления символов */
		const heroObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const chars = document.querySelectorAll(".hero__title .char");

					chars.forEach((el, index) => {
						setTimeout(() => {
							el.style.transform = 'translateY(0)';
						}, 50 * index);
					});
				}
			});
		});

		heroObserver.observe(hero);
	}

	/* Закрыть попап */
	const popupEvent = document.querySelector(".event")

	if (popupEvent) {
		const popupClose = popupEvent.querySelector(".event__close");

		popupClose.addEventListener("click", () => {
			popupEvent.setAttribute("data-hidden", "true");
		});
	}

	const openNav = () => {
		let bodyState = document.body.getAttribute("data-state");

		if (bodyState === "mobile-menu") {
			document.body.dataset.state = "";
		} else {
			document.body.dataset.state = "mobile-menu";
		}
	}

	/* Мобильное меню */
	const burger = document.querySelector(".header__burger");

	if (burger) {
		const closeButtonMenu = document.querySelector(".menu__close");

		burger.addEventListener("click", openNav);
		closeButtonMenu.addEventListener("click", openNav);
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
