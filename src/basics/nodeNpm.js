/* 
https://nodejs.org/en
Node.js представляет среду выполнения кода на JavaScript, 
которая построена на основе движка JavaScript Chrome V8, 
который позволяет транслировать вызовы на языке JavaScript в машинный код. 

https://www.npmjs.com/
npm (Node Package Manager) – дефолтный пакетный менеджер для JavaScript, 
работающий на Node.js. Менеджер npm состоит из двух частей:
- CLI (интерфейс командной строки) – средство для размещения и скачивания пакетов,
- онлайн-репозитории, содержащие JS пакеты.

Файл package.json генерируется командой npm init при создании JavaScript/Node.js 
проекта со следующими метаданными:
- name: название JS библиотеки/проекта.
- version: версия проекта.
- description: описание проекта.
- license: лицензия проекта.

Файл package-lock.json описывает версии пакетов, используемые в JavaScript-проекте. 
Если package.json включает общее описание зависимостей (название товара), 
то package-lock.json более детальный – всё дерево зависимостей.
package-lock.json генерируется командой npm install и читается npm CLI, 
чтобы обеспечить воспроизведение окружения для проекта через npm ci.

dependencies и devDependencies представляют собой словари с именами npm-библиотек (ключ) 
и их семантические версии (значение).Эти зависимости устанавливаются командной npm install 
с флагами --save и --save-dev. Они предназначены соответственно для использования в продакшене и разработке.

npm install – команда, устанавливающая пакеты.
По умолчанию npm будет устанавливать все пакеты в локальном каталоге, в которым вы сейчас работаете.
Если вы хотите чтобы пакет был доступен всем приложениям, его нужно установить глобально:
npm install <package> -g

npm publish - oтправить пакет в npmjs.com
 
https://jestjs.io/
Jest — это восхитительная среда тестирования JavaScript с упором на простоту.
Для установки Jest в ваш проект выполните:
npm install --save-dev jest
После установки можете обновить секцию scripts вашего package.json:
“scripts” : {
     “test”: “jest”
}
С помощью такого простого вызова мы уже можем запустить наши тесты 
(на самом деле jest потребует существование хотя бы одного теста).
*/
