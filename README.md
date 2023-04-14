# GoIT Project Full-Stack: So Yummy

Даний проєкт був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства та налаштування додаткових можливостей
[звертайтесь до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Про проєкт

So Yummy - сайт-помічник для тих, хто хоче готувати вдома. Сайт дозволяє:
* реєстрацію користувача
* ділитися своїми рецептами
* шукати рецепти за категоріями чи інгредієнтами
* додавати рецепти до списку обраних
* формувати список необхідних покупок
* підписатися на email розсилку 
* змінувати кольорову тему (світлу / темну)

Сайт має адаптивний дизайн та може використовуватися на декстопах, планшетах та мобільних пристроях. 

Проект взаємодіє з So Yummy API, з документацією якого можна ознайомитись [за посиланням](https://backend-soyummy.onrender.com/api-docs/).

## Встановлення та запуск

1. Переконайтеся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачайте та встановіть](https://nodejs.org/en/) її якщо необхідно.
2. Встановіть базові залежності проекту командою `npm install`.
3. Запустіть режим розробки, виконавши команду `npm start`.
4. Перейдіть до браузера за адресою [http://localhost:3000](http://localhost:3000).
   Ця сторінка автоматично перезавантажуватиметься після збереження змін у
   файлах проекту.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/deploy-status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

