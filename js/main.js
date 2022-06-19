'use strict'

window('load', () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js')
	}
})
