# Приложение для тестирования технологии WebRTC
<div align="center"><img src="https://user-images.githubusercontent.com/101672047/168921679-a0d9f179-bc72-4d28-bd4e-6f1bcadd1868.png"/></div>
<br>

<div align="center" style="display: flex">
  <img src="https://img.shields.io/github/issues/crckhd/webrtc-example?label=issues&logo=webrtc&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/crckhd/webrtc-example?label=L.%20commit&logo=github&style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/crckhd/webrtc-example?logo=typescript&style=for-the-badge">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/crckhd/webrtc-example?label=%E2%9C%A8&style=for-the-badge">
</div>

<br>


<div align="center"><strong>Приложение, которое использует технологию WebRTC для примера в статье на <a href="https://vc.ru">vc</a></strong></div>

## Использумый технологический стек 🔨

**Пакетный менеджер**: Pnpm;

**Язык программирования (клиент)**: TypeScript;

**Фреймворк для тестирования**: Jest;

**Сервер для сигналинга**: Firebase;

**Бандлер**: Vite;

# Сборка 📦

Для сборки всего приложения используется `vite`, у него есть встроенные команды в package.json, которые я не стал менять:

* `pnpm build`   - собрать приложение
* `pnpm preview` - собрать приложение для тестирования
* `pnpm dev`     - собрать приложение для разработки

> Также для сборки вам потребуется ключ для Firebase, как его получить можно узнать ниже

## Получение ключа для Firebase 🔥
Так как приложение тестовое, то я не стал делать БД закрытой для записи и чтения, поэтому каждому пользователю, кто захочет протестировать данное приложение нужно создать свой ключ в Firebase. Сделать это достаточно легко:

**По шагам 🐈**
1. Перейти на сайт [firebase](https://firebase.google.com)
2. Нажать Go to Console вверху
3. Нажать большую кнопку "Create a project"
4. Ввести название
5. Выключить аналитику, она нам не нужна (выключается сдвиганием свитча)
6. Нажать ещё раз на кнопочку "Create a project"
7. Нажать на иконку веб-приложения на главном экране (создаем приложение)
8. Ввести название приложения
9. Скопировать все содержимое из `firebaseConfig` и нажать "Continue to console"
10. Все содержимое из `firebaseConfig` положить в firebase.json в корне приложения
11. Готово😼

Ключ будет выглядеть как-то так:
```json
{
  "apiKey": "AIza....",                             
  "authDomain": "YOUR_APP.firebaseapp.com",         
  "databaseURL": "https://YOUR_APP.firebaseio.com", 
  "storageBucket": "YOUR_APP.appspot.com",          
  "messagingSenderId": "123456789"                  
}
```
