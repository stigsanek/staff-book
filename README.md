# staff-book
Справочник сотрудников

## Конфигурирование данных

### Список сотрудников

Файл `src/data/staff.js` содержит массив объектов в формате:<br />

```
{
  id: 1,
  photo: 'img/photos/egorov.jpg', // Относительный путь до изображения
  name: 'Александр Егоров', // Имя  и фамилия
  departament: 'Руководство', // Подразделение
  position: 'Директор', // Должность
  rang: 1, // Грейд для сортировки по должностям 
  phone: '', // Номер телфона
  email: 'stigsanek@yandex.ru' // Адрес электронной почты
}
```

### Кнопки фильтрации

Файл `src/data/nav.js` содержит массив объектов в формате:<br />

```
{
  name: 'Отдел продаж', // Свойство для фильтрации
  label: 'Отдел продаж' // Текст кнопки
}
```

## Скрипты

В каталоге проекта вы можете запустить:

### `npm start`

Запускает приложение в режиме dev.<br />
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

### `npm run build`

Запускает сборку приложения в режиме prod в папку `build`.<br />
Готовый проект оптимизирован для достижения максимальной производительности.

