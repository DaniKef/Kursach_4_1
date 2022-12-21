﻿# Kursach_4_1 ТЕХНІЧНІ ВИМОГИ ТА ІНСТРУКЦІЯ КОРИСТУВАЧА

Для початку роботи потрібно створити порожню таблицю Google. У створеній таблиці отримати id таблиці з URL (рисунок 1). Після цього створити лист з назвою пошти, на яку будуть надходити оповіщення та заповнити перший рядок аркуша іменами стовпців, це необхідно для коректної роботи системи (рисунок 2). Далі створюється лист "Users", який потрібен для роботи оповіщень та телеграм-бота, перший рядок також заповнюється іменами стовпців. Після цього в лист "Users" у стовпець mail записати свою пошту, яка повинна збігатися з ім'ям аркуша для контактів (рисунок 3).

![image](https://user-images.githubusercontent.com/66998903/208772102-a0a5f86b-9c13-439e-8fe0-547637756b58.png)

Рисунок 1 - Id Google Spreadsheet із URL таблиці

![image](https://user-images.githubusercontent.com/66998903/208772636-e1c8e213-791e-41cf-b7da-6f22b7a1f58d.png)

Рисунок 2 – Аркуш з ім’ям пошти користувача для зберігання контактів 

![image](https://user-images.githubusercontent.com/66998903/208772680-0be1f14a-6509-4090-93b2-c85c69b06045.png)

Рисунок 3 - Аркуш з Users для зберігання інформації про користувача

Після налаштування таблиці Google для зберігання даних, потрібно створити проект Apps Script для серверної частини. Скопіювати проект GAS/ContactManager. У файлі main.gs змінити константу id на id таблиці користувача та константу sheet на ім’я аркушу імені пошти. 

Потім створити проект для телеграм-бота, скопіювати проект за GAS/ContactManagerTelegramBot. У файлі WebHook.gs змінити константу id на id таблиці користувача. Розгорнути обидва проекти, як веб-застосунок, посилання веб-застосунку на серверну частину запам’ятати.

Наступним потрібно завантажити клієнтську частину, це весь проект, окрім папки GAS, після чого у файлі main.js змінити константу scriptUrl на посилання веб-застосунку на серверну частину, яка була скопійована при створені веб-застосунку серверної частини.

Налаштування посилань та сховища закінчено, можна завантажити клієнтську частину на будь-який безкоштовний хостинг.
Веб-додаток працюватиме на всіх браузерах.

