// Hero Fractals Canvas1 - Color
function canvas1() {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const particlesArray = [];
	let hue = 0;
	let frame = 0;

	window.addEventListener('resize', function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	const mouse = {
		x: undefined,
		y: undefined,
	};
	canvas.addEventListener('click', function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
		hue += 8;
		if (particlesArray.length < 100) {
			for (let i = 0; i < 20; i++) {
				particlesArray.push(new Particle());
			}
		}
	});

	canvas.addEventListener('mousemove', function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
		hue += 2;
		if (frame % 2 === 0) {
			for (let i = 0; i < 7; i++) {
				particlesArray.push(new Particle());
			}
		}
	});

	class Particle {
		constructor() {
			this.x = mouse.x;
			this.y = mouse.y;
			this.size = Math.random() * 15 + 1;
			this.speedX = Math.random() * 3 - 1.5;
			this.speedY = Math.random() * 3 - 1.5;
			this.color = 'hsl(' + hue + ', 100%, 50%)';
		}
		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			if (this.size > 0.2) this.size -= 0.1;
		}
		draw() {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function handleParticles() {
		for (let i = 0; i < particlesArray.length; i++) {
			for (let j = i; j < particlesArray.length; j++) {
				const dx = particlesArray[i].x - particlesArray[j].x;
				const dy = particlesArray[i].y - particlesArray[j].y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < 100) {
					ctx.beginPath();
					ctx.strokeStyle = particlesArray[i].color;
					ctx.lineWidth = 0.2;
					ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
					ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
					ctx.stroke();
					ctx.closePath();
				}
			}
			particlesArray[i].update();
			particlesArray[i].draw();

			if (particlesArray[i].size <= 0.3) {
				particlesArray.splice(i, 1);
				console.log(particlesArray.length);
				i--;
			}
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
		frame++;
		requestAnimationFrame(animate);
	}
	animate();
}

canvas1();

// Hero Fractals Canvas2 - White
function canvas2() {
	const canvas = document.getElementById('canvas2');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const particlesArray = [];
	let hue = 0;
	let frame = 0;

	window.addEventListener('resize', function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	const mouse = {
		x: undefined,
		y: undefined,
	};
	canvas.addEventListener('click', function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
		hue += 8;
		if (particlesArray.length < 100) {
			for (let i = 0; i < 20; i++) {
				particlesArray.push(new Particle());
			}
		}
	});

	canvas.addEventListener('mousemove', function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
		hue += 2;
		if (frame % 2 === 0) {
			for (let i = 0; i < 7; i++) {
				particlesArray.push(new Particle());
			}
		}
	});

	class Particle {
		constructor() {
			this.x = mouse.x;
			this.y = mouse.y;
			this.size = Math.random() * 15 + 1;
			this.speedX = Math.random() * 3 - 1.5;
			this.speedY = Math.random() * 3 - 1.5;
			this.color = 'hsl(0, 0%, 100%)';
		}
		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			if (this.size > 0.2) this.size -= 0.1;
		}
		draw() {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function handleParticles() {
		for (let i = 0; i < particlesArray.length; i++) {
			for (let j = i; j < particlesArray.length; j++) {
				const dx = particlesArray[i].x - particlesArray[j].x;
				const dy = particlesArray[i].y - particlesArray[j].y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < 100) {
					ctx.beginPath();
					ctx.strokeStyle = particlesArray[i].color;
					ctx.lineWidth = 0.2;
					ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
					ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
					ctx.stroke();
					ctx.closePath();
				}
			}
			particlesArray[i].update();
			particlesArray[i].draw();

			if (particlesArray[i].size <= 0.3) {
				particlesArray.splice(i, 1);
				console.log(particlesArray.length);
				i--;
			}
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
		frame++;
		requestAnimationFrame(animate);
	}
	animate();
}

canvas2();

// Menu Navbar - Handle Click & Scroll
document.getElementById('tab0').addEventListener('click', function () {
	scrollToSection('hero');
});
document.getElementById('tab1').addEventListener('click', function () {
	scrollToSection('aboutme');
});
document.getElementById('tab2').addEventListener('click', function () {
	scrollToSection('container__projects');
});
document.getElementById('tab3').addEventListener('click', function () {
	scrollToSection('container__contact');
});

function scrollToSection(sectionId) {
	const element = document.getElementById(sectionId);
	const headerOffset = 74;
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.scrollY - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
}

function toggleMenu() {
	let icon = document.getElementById('burger-icon');
	if (icon.getAttribute('class') == 'icon') {
		icon.setAttribute('class', 'icon-close');
	} else {
		icon.setAttribute('class', 'icon');
	}
}

function setupIntersectionObserver() {
	const sections = ['hero', 'aboutme', 'container__projects', 'container__contact'];
	const navTabs = {
		hero: document.getElementById('tab-0'),
		aboutme: document.getElementById('tab-1'),
		container__projects: document.getElementById('tab-2'),
		container__contact: document.getElementById('tab-3'),
	};

	const observerOptions = {
		root: null,
		rootMargin: '-50% 0px -50% 0px',
		threshold: 0,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Uncheck all radio buttons
				Object.values(navTabs).forEach((tab) => (tab.checked = false));

				// Check the radio button corresponding to the visible section
				const sectionId = entry.target.id;
				if (navTabs[sectionId]) {
					navTabs[sectionId].checked = true;
				}
			}
		});
	}, observerOptions);

	sections.forEach((sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			observer.observe(section);
		}
	});
}

document.addEventListener('DOMContentLoaded', setupIntersectionObserver);

// LightMode Toggle Switch
const toggleSwitch = document.getElementById('lightmode-toggle-input');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'light') {
		toggleSwitch.checked = true;
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
