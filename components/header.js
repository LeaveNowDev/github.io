const header = /*html*/ `<header id="header">
			<div class="header-content">
				<a href="/" class="logo-link">
					<img
						src="/assets/img/leave_now_logo_transparent.png"
						alt="Leave Now Logo"
						id="logo"
					/>
				</a>
                <div class="links">
				<a
                aria-label="visit quae's instagram account"
                class="instagram"
                href="https://www.instagram.com/quaeapp/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/assets/img/instagram.png" alt="leave now's instagram" id="instagram" />
                </a>
                </div>
			</div>
		</header>`;

function renderHeader() {
	const placeholder = document.querySelector("#header-placeholder");
	placeholder.innerHTML = header;
}
renderHeader();
document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > 40) {
		document.querySelector("#header").classList.add("scrolled");
	}
	if (scroll < 40) {
		document.querySelector("#header").classList.remove("scrolled");
	}
};
var navVisible = false;
function toggleNav() {
	if (navVisible) {
		closeNav();
	} else showNav();
}
function showNav() {
	navVisible = true;
	document.getElementById("navigation-links").style.display = "block";
	document.getElementById("behind-navigation-links").style.display = "block";
}
function closeNav() {
	navVisible = false;
	document.getElementById("behind-navigation-links").style.display = "none";
	document.getElementById("navigation-links").style.display = "none";
}
