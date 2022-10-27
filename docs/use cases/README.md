# Діаграми прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

actor "Користувач системи" as SystemUser
actor "Користувач проєкту" as ProjectUser
actor "Менеджер проєкту" as ProjectManager
actor "Менеджер воркспейсу" as WorkspaceManager
actor "Адміністратор системи" as SystemAdministrator
usecase "Управляти \nпрофілем" as MngProf #palegreen
usecase "Управляти \nзавданнями" as MngTasks #palegreen
usecase "Управляти \nдошками \nпроєкту" as MngProjectBoards #palegreen
usecase "Управляти \nучасниками \nпроєкту" as MngProjectUsers #palegreen
usecase "Управляти \nпроєктами" as MngProjects #palegreen
usecase "Управляти \nкористувачами \nсистеми" as MngSystemUsers #palegreen
usecase "UserAuth" as UsAuth
usecase "UserReg" as UsReg
usecase "UserDataArtifacts" as UDA
usecase "Support" as Sup

SystemAdministrator -u-|> WorkspaceManager
WorkspaceManager -u-|> ProjectManager
ProjectManager -u-|> ProjectUser
ProjectUser -u-|> SystemUser

SystemUser -> UsAuth
SystemUser -u-> MngProf
SystemUser -l-> UsReg

ProjectUser -> MngTasks

ProjectManager -> MngProjectBoards
ProjectManager -l-> MngProjectUsers

WorkspaceManager -> MngProjects
WorkspaceManager -l-> UDA

SystemAdministrator -l-> MngSystemUsers
SystemAdministrator -> Sup

@enduml

</center>

## Користувач системи

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

"Користувач системи" as actor
usecase "Управляти \nпрофілем" as MngProf #palegreen
usecase "UserAuth" as UsAuth
usecase "UserReg" as UsReg

actor -u-> MngProf

usecase "EditProfile" as EdProf
usecase "ProfileArtifacts" as ProfArt

EdProf .d.> MngProf :extends
ProfArt .d.> MngProf :extends

actor -d-> UsAuth
actor -d-> UsReg

@enduml

</center>

## Користувач проєкту

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

"Користувач проєкту" as actor
usecase "Управляти \nзавданнями" as MngTasks #palegreen

actor -u-> MngTasks

usecase "CreateTask" as CrTask
usecase "EditTask" as EdTask

CrTask .d.> MngTasks :extends
EdTask .d.> MngTasks :extends

@enduml

</center>

## Менеджер проєкту

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

"Менеджер проєкту" as actor
usecase "Управляти \nдошками \nпроєкту" as MngBrd #palegreen

actor -u-> MngBrd

usecase "BoardCreate" as BrdCr
usecase "TicketsAndBoards\nArtifact" as TckAndBrdCr
usecase "BoardEdit" as BrdEd

BrdCr .d.> MngBrd :extends
TckAndBrdCr .d.> MngBrd :extends
BrdEd .d.> MngBrd :extends


usecase "Управляти\nкористувачами\nпроєкту" as MngUsOfProj #palegreen

actor -d-> MngUsOfProj

usecase "MemberAdd" as MmbAdd
usecase "MemberRemove" as MmbRm

MmbAdd .u.> MngUsOfProj :extends
MmbRm .u.> MngUsOfProj :extends

@enduml

</center>

## Менеджер воркспейсу

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

actor "Менеджер воркспейсу"
usecase "Управляти \nпроєктами" as MANAGEPROJ #palegreen
usecase "UserDataArtifacts" as UDARTIF

"Менеджер воркспейсу" -u-> MANAGEPROJ

usecase "ProjectCreate" as CRPROJ
usecase "ProjectManagerChange" as CHMANAGERPROJ
usecase "ProjectDelete" as DELPROJ

CRPROJ .d.> MANAGEPROJ :extends
CHMANAGERPROJ .d.> MANAGEPROJ :extends
DELPROJ .d.> MANAGEPROJ :extends


"Менеджер воркспейсу" -d-> UDARTIF

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
usecase "Управляти \nкористувачами \nсистеми" as MANAGEUPROJ #palegreen
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

## BoardCreate

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> BoardCreate

        <font color=000 size=16><b>НАЗВА:</b> Cтворити дошку

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дошку створено у системі

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> BoardCreate_EX_NoName – Назву дошки не вказано.
        <font color=000 size=16> BoardCreate_EX_NameExists – Дошка з такою назвою вже існує.
        <font color=000 size=16> BoardCreate_EX_PressCancel – Натиснута кнопка "Відміна".
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер проєкту|
        start
        :Менеджер проєкту починає взаємодію;

        :Менеджер проєкту натискає кнопку «Створити дошку»;

    |Система|
        :Система відкриває модальне вікно з формою для створення дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_PressCancel
        end note

    |Менеджер проєкту|
        :Менеджер проєкту додає назву та опис дошки;

    |Система|
        :Система створює дошку та додає її у відповідний розділ проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_NoName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_NameExists
        end note

        :Система відправляє менеджеру проєкту інформацію про успішне створення дошки;

    |Менеджер проєкту|
        :Менеджер проєкту отримує інформацію про успішне створення дошки;
        
        :Менеджер проєкту закінчує взаємодію;

        stop;

@enduml

</center>

## BoardEdit

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> BoardCreate

        <font color=000 size=16><b>НАЗВА:</b> Редагувати дошку

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16> Існує проєкт
        <font color=000 size=16> Існує дошка

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дошку оновлено у системі

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> BoardEdit_EX_NoName – Назву дошки не вказано.
        <font color=000 size=16> BoardEdit_EX_NameExists – Дошка з такою назвою вже існує.
        <font color=000 size=16> BoardEdit_EX_PressCancel – Натиснута кнопка "Відміна".
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер проєкту|
        start
        :Менеджер проєкту починає взаємодію;

        :Менеджер проєкту натискає кнопку «Редагувати дошку»;

    |Система|
        :Система відкриває форму редагування завдання з попередніми даними дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_PressCancel
        end note

    |Менеджер проєкту|
        :Менеджер проєкту редагує дані дошки (назва, опис) та натискає кнопку "Зберегти";

    |Система|
        :Система оновлює дані дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_NoName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_NameExists
        end note

        :Система відправляє менеджеру проєкту інформацію про успішне оновлення дошки;

    |Менеджер проєкту|
        :Менеджер проєкту отримує інформацію про успішне оновлення дошки;
        
        :Менеджер проєкту закінчує взаємодію;

        stop;

@enduml

</center>

## MemberAdd

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> MemberAdd

        <font color=000 size=16><b>НАЗВА:</b> Додати користувача до проєкту

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Користувач стає учасником проєкту

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> MemberAdd_EX_UserDontExist — Такого користувача не існує.
        <font color=000 size=16> MemberAdd_EX_UserIsAlreadyMember — Користувач вже є учасником проєкту.
        <font color=000 size=16> MemberAdd_EX_Cancel — Натиснута кнопка "Відміна".
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
        end header

    |Менеджер проєкту|
        start
        :Менеджер проєкту починає взаємодію;

        :Менеджер проєкту натискає кнопку «Додати учасника»;

    |Система|
        :Система відкриває модальне вікно з формою пошуку користувачів;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_PressCancel
        end note

    |Менеджер проєкту|
        :Менеджер проєкту вписує юзернейм або адресу електронної пошти користувача у форму;

    |Система|
        :Система шукає користувача у базі данних та додає його до проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_UserDontExist
        end note
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_UserIsAlreadyMember
        end note

        :Система відправляє менеджеру проєкту інформацію про успішне додавання учасника до проєкт;

    |Менеджер проєкту|
        :Менеджер проєкту отримує інформацію про додавання користувача до проєкту;
        
        :Менеджер проєкту закінчує взаємодію;

        stop;

@enduml

</center>

## MemberRemove

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> MemberRemove

        <font color=000 size=16><b>НАЗВА:</b> Видалити користувача з проєкту

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16> Існує проєкт
        <font color=000 size=16> Існує учасник проєкту

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Користувач більше не учасник проєкту

        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> MemberRemove_EX_Cancel — Натиснута кнопка "Відміна".
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
        end header

    |Менеджер проєкту|
        start
        :Менеджер проєкту починає взаємодію;

        :Менеджер проєкту натискає кнопку «Учасники проєкту»;

    |Система|
        :Система відкриває модальне вікно з учасниками проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_PressCancel
        end note

    |Менеджер проєкту|
        :Менеджер проєкту обирає учасника у модальному вікні;

        :Менеджер проєкту натискає кнопку «Видалити учасника»;

    |Система|
        :Система видаляє учасника з проєкту та оновлює список учасників;

        :Система відправляє менеджеру проєкту інформацію про успішне видалення учасника з проєкту;

    |Менеджер проєкту|
        :Менеджер проєкту отримує інформацію про видалення учасника з проєкту;
        
        :Менеджер проєкту закінчує взаємодію;

        stop;

@enduml

</center>

## TicketsAndBoardsArtifact

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> TicketsAndBoardsArtifact

        <font color=000 size=16><b>НАЗВА:</b> Завантажити інформацію про завдання та дошки проєкту

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Файл у форматі .json, який містить дані усіх завдань та дошок проєкту
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> TicketsAndBoardsArtifact_EX_NoData — Проєкт не містить завдань чи дошок

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер проєкту|
        start
        :Менеджер проєкту починає взаємодію;
        
        :Менеджер проєкту натискає кнопку "Завантажити інформацію про завдання та дошки проєкту";
    |Система|
        :Система створює файл профілю у форматі .json;
        note right #ffaaaa
        <b> Можлива
        <b> TicketsAndBoardsArtifact_EX_NoData
        end note

    |Менеджер проєкту|
        :Менеджер проєкту натискає кнопку "Завантажити файл";

    |Система|
        :Система завантажує файл на комп’ютер менеджера проєкту;
    |Менеджер проєкту|
        :Менеджер проєкту завершує взаємодію;

        stop;

@enduml

</center>

## ProjectCreate

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> ProjectCreate

        <font color=000 size=16><b>НАЗВА:</b> Створити проєкт

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер воркспейсу, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Відсутні

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Проєкт створено у системі
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> ProjectCreate_EX_Cancel — Натиснута кнопка "Відміна".
        <font color=000 size=16> ProjectCreate_EX_EmptyName — Поле з назвою проєкту не заповнене.
        <font color=000 size=16> ProjectCreate_EX_Cancel — ProjectCreate_EX_NameExists — Проєкт з такою назвою вже існує.

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер воркспейсу|
        start
        :Менеджер воркспейсу починає взаємодію;
        
        :Менеджер воркспейсу натискає кнопку "Створити проєкт";

    |Система|
        :Система відкриває форму створення проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :Менеджер заповнює форму створення проєкту (назва, менеджер проєкту, члени команди);
        
        :Менеджер воркспейсу натискає кнопку "Створити";

    |Система|
        :Система створює проєкт;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_EmptyName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_NameExists
        end note

    |Менеджер воркспейсу|
        :Менеджер воркспейсу отримує інформацію про створення проєкту;
        
        :Менеджер воркспейсу закінчує взаємодію;

        stop;

@enduml

</center>

## ProjectManagerChange

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> ProjectManagerChange

        <font color=000 size=16><b>НАЗВА:</b> Змінити менеджера у проєкті

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер воркспейсу, Менеджер проєкту, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт
        <font color=000 size=16> Існує учасник проєкту
        <font color=000 size=16> Існує менеджер проєкту

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Новий менеджер у проєкті
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> ProjectManagerChange_EX_Cancel — Натиснута кнопка "Відміна".
        <font color=000 size=16> ProjectManagerChange_EX_NoOtherProjectMember — У проєкті не існує інший учасників, окрім менеджера.

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер воркспейсу|
        start
        :Менеджер воркспейсу починає взаємодію;
        
        :Менеджер воркспейсу натискає кнопку "Змінити менеджера";
    |Система|
        :Система відкриває модальне вікно з учасниками проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberRemove_EX_PressCancel
        end note

    |Менеджер воркспейсу|
        :Менеджер воркспейсу обирає учасника з випадаючого списку;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectManagerChange_EX_NoOtherProjectMember
        end note
        
        :Менеджер воркспейсу натискає кнопку "Призначити менеджером";

    |Система|
        :Система змінює менеджера у проєкті;
        
        :Система надсилає повідомлення менеджеру проєкту про його призначення;
        
    |Менеджер воркспейсу|
        :Менеджер воркспейсу отримує інформацію про змінення менеджера у проєкті;
        
        :Менеджер воркспейсу закінчує взаємодію;

        stop;

@enduml

</center>

## ProjectDelete

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> ProjectDelete

        <font color=000 size=16><b>НАЗВА:</b> Видалити проєкт

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер воркспейсу, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Проєкт видалено із системи
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> ProjectDelete_EX_Cancel — Натиснута кнопка "Відміна".

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер воркспейсу|
        start
        :Менеджер воркспейсу починає взаємодію;
        
        :Менеджер воркспейсу натискає кнопку "Видалити проєкт";

    |Система|
        :Система відкриває форму підтвердження видалення проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectDelete_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :Менеджер воркспейсу підтверджує видалення натисканням кнопки "Видалити";
        
    |Система|
        :Система видаляє проєкт та оновлює список проєктів;

    |Менеджер воркспейсу|
        :Менеджер воркспейсу отримує інформацію про видалення проєкту;
        
        :Менеджер воркспейсу закінчує взаємодію;

        stop;

@enduml

</center>

## UserDataArtifacts

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header

        <font color=000 size=18><b>ID:</b> UserDataArtifacts

        <font color=000 size=16><b>НАЗВА:</b> Вивантажити публічні дані користувачів у форматі JSON.

        <font color=000 size=16><b>УЧАСНИКИ:</b> Менеджер воркспейсу, Система

        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> 
        <font color=000 size=16> Існує проєкт.
        <font color=000 size=16> Існує учасник проєкту.

        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дані користувачів зберігаються у форматі JSON.
        
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16> UserDataArtifacts_EX_Cancel — Натиснута кнопка "Відміна".
        <font color=000 size=16> UserDataArtifacts_EX_EmptyProject — Проєкт пустий.
        <font color=000 size=16> UserDataArtifacts_EX_NotEnoughMemory — Пам’яті в системі для вивантаження даних недостатньо.
        <font color=000 size=16> UserDataArtifacts_EX_WrongDirectory — Каталога для вивантаження даних не існує.

        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
    end header

    |Менеджер воркспейсу|
        start
        :Менеджер воркспейсу починає взаємодію;
        
        :Менеджер воркспейсу натискає кнопку «Вивантаження публічних даних користувачів»;

    |Система|
        :Система запитує каталог збереження даних.;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_EmptyProject
        end note
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :Менеджер воркспейсу вводить каталог у текстове поле;
        
    |Система|
        :Система отримує каталог;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_WrongDirectory
        end note
      

        :Система виконує обробку даних;

        :Система записує дані у вихідний файл;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_NotEnoughMemory
        end note
        
    |Менеджер воркспейсу|
        :Менеджер воркспейсу отримує інформацію про вивантаження даних;

        :Менеджер воркспейсу закінчує взаємодію;

        stop;

@enduml

</center>

## Support

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> Support
        <font color=000 size=16><b>Назва:</b> Вирішити проблему користувача
        <font color=000 size=16><b>Учасники:</b> Адміністратор системи, користувач, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16>Користувач має проблему, пов'язану с системою;
        <font color=000 size=16>Користувач не може знайти рішення за допомогою розділу Help;
        <font color=000 size=16><b>Результат:</b> Вирішення проблеми користувача
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>Support_EX_PressCancel — Натиснута кнопка "Відміна".
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        :Користувач починає взаємодію;
        :Користувач натискає кнопку "Тех. підтримки";
    |Система|
        :Система відкриває форму подання заявки;
        note right #ffaaaa
        <b> Можливо
        <b> Support_EX_PressCancel
        end note
    |Користувач|
        :Користувач заповнює форму та натискає кнопку "Відправити";
    |Система|
        :Система надсилає заявку адміністратору системи;
    |Адміністратор системи|    
        :Адміністратор системи отримує заявку користувача;
        :Адміністратор системи натискає кнопку "Відправити відповідь";
    |Система|
        :Система відкриває форму для відповіді;
         note right #ffaaaa
        <b> Можливо
        <b> Support_EX_PressCancel
        end note
    |Адміністратор системи|
        :Адміністратор заповнює форму та натискає кнопку "Відправити";
    |Система|
        :Система надсилає відповідь адміністратора користувачу;
    |Користувач|
        :Користувач отримує відповідь;
        :Користувач закінчує взаємодію;
        stop;

@enduml

</center>

## UserBan

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> UserBan
        <font color=000 size=16><b>Назва:</b> Заблокувати користувача
        <font color=000 size=16><b>Учасники:</b> Адміністратор системи, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16>Користувач порушив правила проєкту.
        <font color=000 size=16><b>Результат:</b> Блокування акаунта користувача
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>UserBan_EX_AlreadyBanned — Користувача вже заблоковано. 
        <font color=000 size=16>UserBan_EX_PressCancel — Натиснута кнопка "Відміна".
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Адміністратор системи|
        start
        :Адміністратор системи починає взаємодію;
        :Адміністратор системи знаходить профіль користувача.;
        :Адміністратор системи натискає кнопку "Заблокувати користувача".;
    |Система|
        :Система відправляє форму для блокування;
        note right #ffaaaa
        <b> Можливо
        <b> UserBan_EX_PressCancel
        end note
    |Адміністратор системи|
        :Адміністратор системи заповнює форму;
        :Адміністратор системи натискає кнопку "Підтвердити";
    |Система|
        :Система блокує користувача;
        note right #ffaaaa
        <b> Можливо
        <b> UserBan_EX_AlreadyBanned
        end note
        :Система відпровляє повідомлення з результатом блокування;
    |Адміністратор системи|
        :Адміністратор системи бачить повідомлення з результатом блокування;
        :Адміністратор системи закінчує взаємодію;
        stop;

@enduml

</center>

## UserUnBan

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> UserUnBan
        <font color=000 size=16><b>Назва:</b> Розблокувати користувача
        <font color=000 size=16><b>Учасники:</b> Адміністратор системи, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16>Користувач заблокований.
        <font color=000 size=16><b>Результат:</b> Розблокування акаунта користувача
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>UserUnBan_EX_PressCancel — Натиснута кнопка "Відміна".
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Адміністратор системи|
        start
        :Адміністратор системи починає взаємодію;
        :Адміністратор системи знаходить профіль користувача.;
        :Адміністратор системи натискає кнопку "Розблокувати користувача".;
    |Система|
        :Система відправляє запит на підтвердження розблокування;
        note right #ffaaaa
        <b> Можливо
        <b> UserUnBan_EX_PressCancel
        end note
    |Адміністратор системи|
        :Адміністратор системи натискає кнопку "Підтвердити";
    |Система|
        :Система розблоковує користувача;
        :Система відпровляє повідомлення з результатом розблокування;
    |Адміністратор системи|
        :Адміністратор системи бачить повідомлення з результатом розблокування;
        :Адміністратор системи закінчує взаємодію;
        stop;

@enduml

</center>