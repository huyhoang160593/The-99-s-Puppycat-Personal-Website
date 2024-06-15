import { default as Alpine } from "alpinejs";

Alpine.store('themeSetting', {
	theme: 'light',

	toggleTheme() {
		switch (this.theme) {
			case 'light': this.theme = 'dark'; break;
			case 'dark': this.theme = 'light'; break;
		}
	}
})

Alpine.start()
