# Тестування працездатності системи

\**В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*\*

Тестування відбувалося за допомогою програми "Postman". Нижче наведені результати тестування методів get, post, put і delete. 

В якості курсової робити було реалізовано таблицю **Task**

![table task](./img/table_task.jpg)

*Варто зауважити, що на час тестування була відключена перевірка існування зовнішного ключа (foreign key) board_id через те, що таблиця board пуста.*

**Запуск сервера**
---
![start server](./img/start_server.png)

**Get Tasks**
---
Повна таблиця Tasks на початку. Тестування виводу всіх сутностей.

![tasks on start](./img/1_tasks_on_start.png)

**Post Task**
---
Запис нової сутності

![post task](./img/2_post_task.png)
Перевірка результату

![see new task in tasks](./img/3_see_new_task_in_tasks.png)

**Put and Get Task by ID**
---
Редагування полей одного із сутностей по ID

![changes](./img/4_put_changes.png)
Перевірка результату. Вивід сутності по ID

![see changes](./img/5_get_changed_task.png)

**Delete Task by ID**
---
Видалення сутності

Вибір ID

![id to delete](./img/6_chosen_id_to_delete.png)
Видалення

![delete by id](./img/7_delete_by_id.png)
Перевірка результату

![check if was deleted](./img/8_check_if_was_deleted.png)