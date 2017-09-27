import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		ready: false,
		center: { lat: 27.9878, lng: 86.9250 }, // everest
		zoom: 11
	}
});

// we need to create this callback function so that
// the Google Maps script can announce itself
window.ready = function ready() {
	app.set({ ready: true });
}

export default app;