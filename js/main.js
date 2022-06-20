'use strict'

window.addEventListener('load', () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js')
	}
})

document.getElementById('notification').addEventListener('click', () => {
	Notification.requestPermission().then(result => {
		if (result === 'granted') {
			new Notification('Hello!', { body: 'Heloo world!' })
		}
	})
})
