import Firebase from "./firebase";
import Signal from "./signal";
import "bootstrap";

class App {

	constructor() {

		// Инициализируем классы для сигналинга
		Firebase.init();
		Signal.init();
	}

	render = class {

		// Селектор для корня приложения
		private readonly SELECTORS = {
			root: '#app',
			localVideo: '#path_local',
			remoteVideo: '#path_remote',
			callButton: '#path_call',
			answerButton: '#path_answer',
		};

	}

	events = class {

	}

	private _cache = class {

	}

}

new App;
