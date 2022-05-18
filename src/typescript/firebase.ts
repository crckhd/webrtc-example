
// Импортируем модуль и класс для иницилазации приложения Firebase
import { FirebaseApp, initializeApp } from "firebase/app";
import firestore, { Firestore } from "firebase/firestore";

// Подкиыдываем себе конфигурацию для Firebase
import * as firebaseConfig from '../../firebase.json';
export default class Firebase {

	// Инициализируем приложение
	protected static _firebase: FirebaseApp;
	protected static _firestore: Firestore;

	static init() {
		Firebase._firebase = initializeApp(firebaseConfig);
		Firebase._firestore = firestore.getFirestore(Firebase._firebase);
	}

	/**
	 * Ивенты для Firebase
	 */
	static events = class {

		static onSetupOffer(): void {

			// Создаем хранилице
			const callDoc = firestore.collection('calls').doc();
			const offerCandidates = callDoc.collection('offerCandidates');
			const answerCandidates = callDoc.collection('answerCandidates');

		}

		static async onCreateOffer(offer: RTCSessionDescriptionInit): Promise<void> {
			offer;
		}
	}

	/**
	 * Действия для Firebase
	 */
	static actions = class {
		static createStorage(): void {
		}
	}

	static info = class {
		static getId(): any {

		}
	}
}
