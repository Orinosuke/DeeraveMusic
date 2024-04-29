document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);
	window.addEventListener("scroll", addShadow);
});

document
	.querySelector(".navbar-toggler")
	.addEventListener("click", function () {
		const navbar = document.getElementById("navId");
		const navbarClasses = navbar.getAttribute("class");
		let newClasses = "";
		if (navbarClasses.includes("expanded")) {
			newClasses = navbarClasses.replace("expanded", "");
		} else {
			newClasses = navbarClasses + " expanded";
		}
		navbar.setAttribute("class", newClasses);
	});
