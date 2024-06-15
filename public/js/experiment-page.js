import anime from "animejs";
import { default as Alpine } from "alpinejs";

//#region setup animation here
Alpine.store("global", {
	/**
	 * @param {MouseEvent} e
	 */
	onMouseMoveEventHandle(e) {
		const eyeElements =/** @type {HTMLCollectionOf<HTMLDivElement>} */ (document.getElementsByClassName('eye'))

		for (let i = 0; i < eyeElements.length; i++) {
			const eyeElement = eyeElements.item(i)
			const eyeX = eyeElement.offsetLeft + (eyeElement.clientWidth / 2)
			const eyeY = eyeElement.offsetTop + (eyeElement.clientHeight / 2)
			const rotationRadian = Math.atan2(e.pageX - eyeX, e.pageY - eyeY)
			const rotationDegree = (rotationRadian * (180/ Math.PI) * (-1)) + 180
			/** {@link https://animejs.com/documentation/ | Animejs documentation} */
			anime({
				targets: eyeElement,
				rotate: rotationDegree
			})
		}
	}
})
//#endregion

Alpine.start()