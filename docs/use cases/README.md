# Діаграми прецедентів

## Менеджер воркспейсу

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

actor "Менеджер проєкту"
usecase "Управляти \nпроєктами" as MANAGEPROJ #palegreen
usecase "UserDataArtifacts" as UDARTIF

"Менеджер проєкту" -u-> MANAGEPROJ

usecase "ProjectCreate" as CRPROJ
usecase "ProjectManagerChange" as CHMANAGERPROJ
usecase "ProjectDelete" as DELPROJ

CRPROJ .d.> MANAGEPROJ :extends
CHMANAGERPROJ .d.> MANAGEPROJ :extends
DELPROJ .d.> MANAGEPROJ :extends


"Менеджер проєкту" -d-> UDARTIF

@enduml

</center>

## Адміністратор системи

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

actor "Адміністратор системи"
usecase "Управляти \nкористувачами \nпроєкта" as MANAGEUPROJ #palegreen
usecase "Support" as SUPPROJECT

"Адміністратор системи" -u-> MANAGEUPROJ

usecase "UserBan" as BANPROJ
usecase "UserUnBan" as UNBANPROJ

BANPROJ .d.> MANAGEUPROJ :extends
UNBANPROJ .d.> MANAGEUPROJ :extends


"Адміністратор системи" -d-> SUPPROJECT

@enduml

</center>

# Сценарії використання

## UserReg 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> UserReg

        <font color=000 size=16><b>НАЗВА:</b> Створити обліковий запис користувача у системі

        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Обліковий запис користувача не створений у системі

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Обліковий запис користувача створений у системі

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> UserReg_EX_NotWrittenData — Користувач не вписав реєстраційні дані та намагається зареєструватися
        <font color=000 size=16> UserReg_EX_AccountExists — Обліковий запис користувача вже створений у системі

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Користувач|
        start
        :Користувач починає взаємодію;

        :Користувач вводить реєстраційні дані;

        :Користувач натискає на кнопку/іконку "Зареєструватися";
        note left #ffaaaa
        <b> Можлива
        <b> UserReg_EX_NotWrittenData
        end note
    |Система|
        :Система перевіряє наявність облікового запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> UserReg_EX_AccountExists
        end note

        :Система створює новий обліковий запис;

        :Система надає користувачу інформацію про створення облікового запису;
    |Користувач|
        :Користувач отримує інформацію про успішну реєстрацію;

        :Користувач закінчує взаємодію;

        stop;

@enduml

</center>

## UserAuth

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> UserAuth

        <font color=000 size=16><b>НАЗВА:</b> Авторизувати користувача у системі

        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16>Користувач зареєстрований у системі
        <font color=000 size=16>Користувач не авторизувався у системі

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Користувач авторизований у системі

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> UserAuth_EX_NotWrittenData — Користувач не вписав авторизаційні дані та намагається авторизуватися
        <font color=000 size=16> UserAuth_EX_AccountNotExists — Користувач не зареєстрований у системі
        <font color=000 size=16> UserAuth_EX_InvalidСredentials — Користувач не пройшов авторизацію

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Користувач|
        start
        :Користувач починає взаємодію;
        
        :Користувач вводить авторизаційні дані;
        
        :Користувач натискає на кнопку/іконку "Увійти";
        note left #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_NotWrittenData
        end note
    |Система|
        :Система перевіряє наявність облікового запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_AccountNotExists
        end note

        :Система перевіряє отримані авторизаційні дані;
        note right #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_InvalidСredentials
        end note

        :Система надає доступ користувачеві до облікового запису;
    |Користувач|
        :Користувач отримує інформацію про успішну авторизацію;

        :Користувач закінчує взаємодію;
        
        stop;

@enduml

</center>

## EditProfile

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> EditProfile

        <font color=000 size=16><b>НАЗВА:</b> Відредагувати профіль користувача у системі

        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16>Користувач авторизувався у системі

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Користувач має відредагований профіль
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> EditProfile_EX_NotWrittenName — Користувач не вписав ім'я та намагається зберегти зміни

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Користувач|
        start
        :Користувач починає взаємодію;
        
        :Користувач натискає на кнопку/іконку "Профіль";
    |Система|
        :Система відкриває профіль користувача;
    |Користувач|
        :Користувач натискає на кнопку/іконку "Редагувати профіль";
    |Система|
        :Система відкриває форму для редагування профілю;
    |Користувач|
        :Користувач редагує профіль: ім'я, аватар, пошта;
        :Користувач натискає кнопкку/іконку "Зберегти зміни";
        note left #ffaaaa
        <b> Можлива
        <b> EditProfile_EX_NotWrittenName
        end note 
    |Система|
        :Система зберігає зміни в профілі користувача;
    |Користувач|
        :Користувач отримує інформацію про успішне редагування профілю;
    
        :Користувач бачить оновлені дані профілю;
    
        :Користувач закінчує взаємодію;

        stop;

@enduml

</center>

## ProfileArtifacts

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> ProfileArtifacts

        <font color=000 size=16><b>НАЗВА:</b> Завантажити інформацію про профіль

        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16>Користувач авторизувався у системі

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Файл у форматі .json, який містить дані профілю
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> ProfileArtifacts_EX_NoData — Профіль не містить даних

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Користувач|
        start
        :Користувач починає взаємодію;
        
        :Користувач натискає на кнопку/іконку "Профіль";
    |Система|
        :Система відкриває профіль користувача;
    |Користувач|
        :Користувач натискає на кнопку/іконку "Створити файл форматі .json";
        note left #ffaaaa
        <b> Можлива
        <b> ProfileArtifacts_EX_NoDat
        end note 
    |Система|
        :Система створює файл профілю у форматі .json;
    |Користувач|
        :Користувач натискає кнопкку/іконку "Завантажити файл; 
    |Система|
        :Система завантажує файл на комп’ютер користувача;
    |Користувач|
        :Користувач закінчує взаємодію;

        stop;

@enduml

</center>

## TicketCreate

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> TicketCreate
        <font color=000 size=16><b>Назва:</b> Створити завдання
        <font color=000 size=16><b>Учасники:</b> Користувач проєкту, Система
        <font color=000 size=16><b>Передумови:</b> Існує проєкт
        <font color=000 size=16><b>Результат:</b> Завдання створене та додано до відповідного розділу проєкту
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>TicketCreate_EX_NoName — Назву завдання не вказано
        <font color=000 size=16>TicketCreate_EX_NoDesc — Опис завдання не вказано
        <font color=000 size=16>TicketCreate_EX_PressCancel — Натиснута кнопка "Відміна"
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Користувач проєкту розпочинає взаємодію;
        : Користувач натискає кнопку "Створити завдання";
    |Система|
        :Система відкриває модальне вікно
        з формою для створення завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketCreate_EX_PressCancel
        end note
    |Користувач|    
        :Користувач проєкту заповнює форму
        (назва, опис, дедлайн, відповідальний,
        пріоритет, статус, додає файли за потреби);
        : Користувач проєкту натискає кнопку "Створити";
    |Система|
        :Система створює завдання та
        додає його у відповідний розділ проєкту;
        note right #ffaaaa
        <b> Можливо
        <b> TicketCreate_EX_NoName,
        <b> TicketCreate_EX_NoDesc
        end note
    |Користувач|
        : Всі користувачі проєкту бачать завдання;
        : Користувач завершує взаємодію;
        stop;

@enduml

</center>

## TicketEdit

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> TicketEdit
        <font color=000 size=16><b>Назва:</b> Редагувати завдання
        <font color=000 size=16><b>Учасники:</b> Користувач проєкту, Cистема
        <font color=000 size=16><b>Передумови:</b> Існує проєкт, Існує завдання
        <font color=000 size=16><b>Результат:</b> Дані завдання відредаговано, оновлено відображення завдання
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>TicketEdit_EX_NoName — Назву завдання не вказано
        <font color=000 size=16>TicketEdit_EX_NoDesc — Опис завдання не вказано
        <font color=000 size=16>TicketEdit_EX_PressCancel — Натиснута кнопка "Відміна"
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Користувач проєкту розпочинає взаємодію;
        : Користувач проєкту натискає на карточу завдання;
    |Система|
        : Система відкриває модальне вікно перегляду завдання;
    |Користувач|
        : Користувач проєкту натискає кнопку редагування завдання;
    |Система|
        :Система відкриває форму редагування завдання
        з попередніми даними завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketEdit_EX_PressCancel
        end note
    |Користувач|    
        :Користувач проєкту редагує дані в формі
        (назва, опис, дедлайн, відповідальний, пріоритет,
        статус, додає або видаляє файли за потреби);
        : Користувач проєкту натискає кнопку "Зберегти";
    |Система|
        : Система оновлює дані завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketEdit_EX_NoDesc,
        <b> TicketEdit_EX_NoName
        end note
    |Користувач|
        : Всі учасники проєкту бачать оновлені дані завдання;
        : Користувач завершує взаємодію;
        stop;

@enduml

</center>
