# SCRUM
1. Для использования приложения необхлдимо скачать репозиторий с проектом по ссылке: https://github.com/Rubtsov-art/trello-react-redux-ts
...
2. При помощи консоли переместиться в папку проекта и выполнить команду установки пакетов зависимостей: npm install или yarn install
...
3. Выполнить script build: npm run build или yarn run build
...
4. Зайти в папку build, открыть файл index.html в браузере. Теперь Вам доступен функционал приложения

# API
## 1.Сортировка:
    а.В приложении существует два типа сортировки карточек в колонке: сортировка по дате создания и сортировка по приоритету карточки
    ...
    б.Первое нажатие по кнопке сортировки покажет карточки, отсортированные по выбранному типу
    ...
    в.Второе нажатие по кнопке сортировки покажет карточки, отсортированные по выбранному типу, в обратном порядке

## 2.Карточка:
    а.Расположение карточки в той или иной колонке демонстрирует состояние выполнения задачи, указанной в карточке
    ...
    б.Управлять состоянием выполнения возможно при помощи иконки "чек-бокса" в левой части карточки (нажатие на "чек-бокс" в карточке, состояние которой "Готово", удаляет карточку с доски)
    ...
    в.В центре карточки расположена её основная информация = название карточки (сверху блока основной информации) и дата создания (снизу блока основной информации)
    ...
    г.В правой части расположены кнопки управления приоритетом выполнения задачи (указанной в карточке) и доступа к комментарию (закрепленным за карточкой)
    ...
    д.Нажатие на кнопку управления приоритетом изменяет состояние приоритета выполнения задания (в приложении существует два вида приоритета: "средний" и "высокий")
    ...
    е.Нажатие на кнопку доступа к коментарию открывает модальное окно, где: продублировано название карточки, доступен для чтения и редактирования текст комментария карточки