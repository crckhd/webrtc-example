import Firebase from "./firebase";
import Signal from "./signal";
import "bootstrap";

class App {

	// Объявим типы для firebase и signal
	public firebase: Firebase;
	public signal: Signal;

	constructor() {

		// Инициализируем классы для сигналинга
		this.firebase = new Firebase;
		this.signal = new Signal;
	}

	render = class {

		// Селектор для корня приложения
		private _rootSelector = '#root';

	}

	events = class {

	}

	private _cache = class {

	}

}

new App;
