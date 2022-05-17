// Импортируем модуль и класс для иницилазации приложения Firebase
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Подкиыдываем себе конфигурацию для Firebase
import * as firebaseConfig from '../../firebase.json';

// 

export default class Firebase {

	// Инициализируем приложение
	protected firebase: FirebaseApp
	protected firestore

	constructor() {
		this.firebase = initializeApp(firebaseConfig);
		this.firestore = getFirestore(this.firebase);
	}

	/**
	 * Ивенты для Firebase
	 */
	events = class {}

	/**
	 * Действия для Firebase
	 */
	actions = class {}
}
