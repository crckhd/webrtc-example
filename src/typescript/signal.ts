import Firebase from "./firebase";

export default class Signal {

	// ICE-сервера для клиента
	private static _servers: RTCConfiguration = {
		iceServers: [
			{
				urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
			},
		],
		iceCandidatePoolSize: 10,
	};

	protected static _localStream: MediaStream;
	protected static _remoteStream = new MediaStream();
	protected static _peerConnection: RTCPeerConnection;

	static init(): void {

		// Иницилиазируем соединение
		Signal._peerConnection = new RTCPeerConnection(Signal._servers);

		// Устанавливаем соединение
		Signal.actions.setup();

		// Создаем оффер
		Signal.actions.createOffer(Signal._peerConnection);
	}

	static events = class {

		/**
		 * Метод для присвоения локального стрима текущему RTC-соединению
		 */
		static onReceiveLocalStream(): void {
			Signal._localStream.getTracks().forEach(track => {
				Signal._peerConnection.addTrack(track);
			});
		}

		/**
		 * Метод для присвоения удаленного стрима текущему remoteStream
		 * @param e - ивент с треком
		 */
		static onReceiveRemoteStream(e: RTCTrackEvent): void {
			e.streams[0].getTracks().forEach(track => {
				Signal._remoteStream.addTrack(track);
			})
		}
	}

	static actions = class {

		static async setup(): Promise<void> {

			// Запрашиваем доступ к потоковым данным видео и аудио из нашей вебки и микрофона с помощью API браузера
			const localStream = navigator.mediaDevices.getUserMedia({ video: true, audio: true });

			// Если поток нормально получен
			await localStream
			.then(stream => {

				// Добавляем его в кэш
				Signal._localStream = stream;

				// Вызываем ивент на добавление локального стрима к RTC-соединению
				Signal.events.onReceiveLocalStream();
			})
			.catch(() => {

				// Выводим предупреждение
				alert('Для того чтобы приложение заработало корректно, нужно дать доступ к камере😼\nСейчас попробую ещё раз запросить доступ к камере');

				// Пробуем ещё раз
				Signal.actions.setup();
			});

			// Устанавливаем ивент на получение
			Signal._peerConnection.ontrack = Signal.events.onReceiveRemoteStream;
		}

		/**
		 * Метод, который создает оффер
		 */
		static async createOffer(peerConnection: RTCPeerConnection): Promise<void> {

			// Создаем коллекции в Firestore
			Firebase.events.onSetupOffer();

			// ID нашего звонка будет такой же, какой и ID у нашего хранилица в Firestore
			const offerId = Firebase.info.getId();

			// Добавляем ICE-кандидатов в наше RTC-соединение
			peerConnection.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
				event.candidate && Firebase.events.onReceiveIceCandidate(event.candidate);
			}

			// Создаем описание для оффера (включено ли аудио, видео, кодек и так далее)
			const offerDescription = await peerConnection.createOffer();

			// Добавляем наше описание для оффера к соединению
			await peerConnection.setLocalDescription(offerDescription);

			const offer: RTCSessionDescriptionInit = {
				sdp: offerDescription.sdp,
				type: offerDescription.type
			}

			// Передаем оффер серверу и слушаем когда кто-то ответит
			await Firebase.events.onCreateOffer(offer);
		}

		static async createAnswer(peerConnection: RTCPeerConnection): void {

		}
	}
}
