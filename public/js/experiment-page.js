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
			const rotationDegree = (rotationRadian * (180 / Math.PI) * (-1)) + 180
			/** {@link https://animejs.com/documentation/ | Animejs documentation} */
			anime({
				targets: eyeElement,
				rotate: rotationDegree
			})
		}
	},

	/**
	 * @param {MouseEvent & { target: HTMLButtonElement }} e
	 */
	onMouseEnterHandle(e) {
		anime({
			targets: e.target,
			translateX: anime.random(-e.target.offsetLeft, document.body.clientWidth - e.target.offsetLeft),
			translateY: anime.random(-e.target.offsetTop, document.body.clientHeight - e.target.offsetTop)
		})
		e.target.blur()
	},

	/**
	 * @param {MouseEvent & { target: HTMLButtonElement }} e
	 */
	onForgiveHandle(e) {
		let thingsYouLike = ""
		while (thingsYouLike === "") {
			thingsYouLike = prompt('Nhập điều kiện để tha lỗi anh người yêu')
		}
		if (thingsYouLike) {
			alert("Tin nhắn đã được gửi đến anh người iu vô tri, sẽ phản hồi em sớm nhất")
			fetch('https://ntfy.sh/flb_ayhun_uoplb', {
				method: 'POST',
				body: `Cô ấy đã tha lỗi cho bạn với điều kiện: ${thingsYouLike}`
			})
			const fireworkElement = (document.getElementById("firework-group"))
			const forgiveElement = document.getElementById("forgive-success")
			const iframeCollection = document.getElementsByTagName('iframe')
			const actionElement = document.getElementById('action')

			if (fireworkElement.classList.contains('hidden')) {
				fireworkElement.classList.remove('hidden')
			}
			if (forgiveElement.classList.contains('hidden')) {
				forgiveElement.classList.remove('hidden')
			}
			if (iframeCollection.length > 0) {
				if (iframeCollection.item(0).classList.contains('hidden')) {
					iframeCollection.item(0).classList.remove('hidden')
				}
			}
			actionElement.classList.toggle('hidden')
		}
	}
})
//#endregion

Alpine.start()