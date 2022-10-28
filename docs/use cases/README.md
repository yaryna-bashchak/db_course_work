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

***ID:*** UserReg
    
***НАЗВА:*** Створити обліковий запис користувача у системі
    
***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** Обліковий запис користувача не створений у системі

***РЕЗУЛЬТАТ:*** Обліковий запис користувача створений у системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- UserReg_EX_NotWrittenData — Користувач не вписав реєстраційні дані та намагається зареєструватися
- UserReg_EX_AccountExists — Обліковий запис користувача вже створений у системі

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Користувач|
        start
        :починає взаємодію;

        :вводить реєстраційні дані;

        :натискає на кнопку 
        "Зареєструватися";
        note left #ffaaaa
        <b> Можлива
        <b> UserReg_EX_NotWrittenData
        end note
    |Система|
        :перевіряє наявність 
        облікового запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> UserReg_EX_AccountExists
        end note

        :створює новий обліковий запис;

        :надає користувачу інформацію 
        про створення облікового запису;
    |Користувач|
        :отримує інформацію
        про успішну реєстрацію;

        :закінчує взаємодію;

        stop;

@enduml

---

***ID:*** UserAuth
    
***НАЗВА:*** Авторизувати користувача у системі
    
***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** 

- Користувач зареєстрований у системі
- Користувач не авторизувався у системі

***РЕЗУЛЬТАТ:*** Користувач авторизований у системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- UserAuth_EX_NotWrittenData — Користувач не вписав авторизаційні дані та намагається авторизуватися
- UserAuth_EX_AccountNotExists — Користувач не зареєстрований у системі
- UserAuth_EX_InvalidСredentials — Користувач не пройшов авторизацію 

@startuml

    |Користувач|
        start
        :починає взаємодію;
        
        :вводить авторизаційні дані;
        
        :натискає на кнопку "Увійти";
        note left #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_NotWrittenData
        end note
    |Система|
        :перевіряє наявність 
        облікового запису користувача;
        note right #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_AccountNotExists
        end note

        :перевіряє отримані 
        авторизаційні дані;
        note right #ffaaaa
        <b> Можлива
        <b> UserAuth_EX_InvalidСredentials
        end note

        :надає доступ користувачеві 
        до облікового запису;
    |Користувач|
        :отримує інформацію 
        про успішну авторизацію;

        :закінчує взаємодію;
        
        stop;

@enduml

---

***ID:*** EditProfile
    
***НАЗВА:*** Відредагувати профіль користувача у системі
    
***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** 

- Користувач авторизований у системі

***РЕЗУЛЬТАТ:*** Користувач має відредагований профіль

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- EditProfile_EX_NotWrittenName — Користувач не вписав ім'я та намагається зберегти зміни

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Користувач|
        start
        :починає взаємодію;
        
        :натискає на кнопку "Профіль";
    |Система|
        :відкриває профіль користувача;
    |Користувач|
        :натискає на кнопку "Редагувати профіль";
    |Система|
        :відкриває форму для редагування профілю;
    |Користувач|
        :редагує профіль: ім'я, 
        аватар, пошта;
        :натискає кнопку "Зберегти зміни";
        note left #ffaaaa
        <b> Можлива
        <b> EditProfile_EX_NotWrittenName
        end note 
    |Система|
        :зберігає зміни в профілі користувача;
    |Користувач|
        :отримує інформацію про 
        успішне редагування профілю;
    
        :бачить оновлені дані профілю;
    
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** ProfileArtifacts

***НАЗВА:*** Завантажити інформацію про профіль

***УЧАСНИКИ:*** Користувач, Система

***ПЕРЕДУМОВИ:*** 

- Користувач авторизувався у системі

***РЕЗУЛЬТАТ:*** Файл у форматі .json, який містить дані профілю

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- ProfileArtifacts_EX_NoData — Профіль не містить даних

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Користувач|
        start
        :починає взаємодію;
        
        :натискає на кнопку/іконку "Профіль";
    |Система|
        :відкриває профіль користувача;
    |Користувач|
        :натискає на кнопку/іконку 
        "Створити файл форматі .json";
        note left #ffaaaa
        <b> Можлива
        <b> ProfileArtifacts_EX_NoDat
        end note 
    |Система|
        :створює файл профілю у форматі .json;
    |Користувач|
        :натискає кнопкку/іконку "Завантажити файл; 
    |Система|
        :завантажує файл на комп’ютер користувача;
    |Користувач|
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** TicketCreate

***НАЗВА:*** Створити завдання

***УЧАСНИКИ:*** Користувач проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт

***РЕЗУЛЬТАТ:*** Завдання створене та додано до відповідного розділу проєкту.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- TicketCreate_EX_NoName — Назву завдання не вказано.
- TicketCreate_EX_NoDesc — Опис завдання не вказано.
- TicketCreate_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Користувач|
        start
        :розпочинає взаємодію;
        :натискає кнопку "Створити завдання";
    |Система|
        :відкриває модальне вікно
        з формою для створення завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketCreate_EX_PressCancel
        end note
    |Користувач|    
        :заповнює форму
        (назва, опис, дедлайн, відповідальний,
        пріоритет, статус, додає файли за потреби);
        : Користувач проєкту натискає кнопку "Створити";
    |Система|
        :створює завдання та
        додає його у відповідний розділ проєкту;
        note right #ffaaaa
        <b> Можливо
        <b> TicketCreate_EX_NoName,
        <b> TicketCreate_EX_NoDesc
        end note
    |Користувач|
        :бачить створене завдання;
        :завершує взаємодію;
        stop;

@enduml

</center>

---

***ID:*** TicketEdit

***НАЗВА:*** Редагувати завдання

***УЧАСНИКИ:*** Користувач проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт
- Існує завдання

***РЕЗУЛЬТАТ:*** Дані завдання відредаговано, оновлено відображення завдання

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- TicketEdit_EX_NoName — Назву завдання не вказано.
- TicketEdit_EX_NoDesc — Опис завдання не вказано.
- TicketEdit_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Користувач|
        start
        :розпочинає взаємодію;
        :натискає на карточу завдання;
    |Система|
        :відкриває модальне вікно 
        перегляду завдання;
    |Користувач|
        :натискає кнопку редагування завдання;
    |Система|
        :відкриває форму редагування завдання
        з попередніми даними завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketEdit_EX_PressCancel
        end note
    |Користувач|    
        :редагує дані в формі (назва, опис, дедлайн, 
        відповідальний, пріоритет, статус, 
        додає або видаляє файли за потреби);
        :натискає кнопку "Зберегти";
    |Система|
        :оновлює дані завдання;
        note right #ffaaaa
        <b> Можливо
        <b> TicketEdit_EX_NoDesc,
        <b> TicketEdit_EX_NoName
        end note
    |Користувач|
        :бачить оновлені дані завдання;
        :завершує взаємодію;
        stop;

@enduml

</center>

---

***ID:*** BoardCreate

***НАЗВА:*** Cтворити дошку

***УЧАСНИКИ:*** Менеджер проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт

***РЕЗУЛЬТАТ:*** Дошку створено у системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- BoardCreate_EX_NoName – Назву дошки не вказано.
- BoardCreate_EX_NameExists – Дошка з такою назвою вже існує.
- BoardCreate_EX_PressCancel – Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер проєкту|
        start
        :починає взаємодію;

        :натискає кнопку «Створити дошку»;

    |Система|
        :відкриває модальне вікно 
        з формою для створення дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_PressCancel
        end note

    |Менеджер проєкту|
        :додає назву та опис дошки;

    |Система|
        :створює дошку та додає її 
        у відповідний розділ проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_NoName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> BoardCreate_EX_NameExists
        end note

        :відправляє інформацію 
        про успішне створення дошки;

    |Менеджер проєкту|
        :отримує інформацію 
        про успішне створення дошки;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** BoardEdit

***НАЗВА:*** Редагувати дошку

***УЧАСНИКИ:*** Менеджер проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт
- Існує дошка

***РЕЗУЛЬТАТ:*** Дошку оновлено у системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- BoardEdit_EX_NoName — Назву дошки не вказано.
- BoardEdit_EX_NameExists — Дошка з такою назвою вже існує.
- BoardEdit_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер проєкту|
        start
        :починає взаємодію;

        :натискає кнопку «Редагувати дошку»;

    |Система|
        :відкриває форму редагування завдання 
        з попередніми даними дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_PressCancel
        end note

    |Менеджер проєкту|
        :редагує дані дошки (назва, опис) 
        та натискає кнопку "Зберегти";

    |Система|
        :оновлює дані дошки;
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_NoName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> BoardEdit_EX_NameExists
        end note

        :відправляє менеджеру проєкту інформацію 
        про успішне оновлення дошки;

    |Менеджер проєкту|
        :отримує інформацію про успішне оновлення дошки;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** MemberAdd

***НАЗВА:*** Додати користувача до проєкту

***УЧАСНИКИ:*** Менеджер проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт

***РЕЗУЛЬТАТ:*** Користувач стає учасником проєкту

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- MemberAdd_EX_UserDontExist — Такого користувача не існує.
- MemberAdd_EX_UserIsAlreadyMember — Користувач вже є учасником проєкту.
- MemberAdd_EX_Cancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер проєкту|
        start
        :починає взаємодію;

        :натискає кнопку «Додати учасника»;

    |Система|
        :відкриває модальне вікно 
        з формою пошуку користувачів;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_PressCancel
        end note

    |Менеджер проєкту|
        :вписує юзернейм або адресу 
        електронної пошти користувача у форму;

    |Система|
        :шукає користувача у базі данних 
        та додає його до проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_UserDontExist
        end note
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_UserIsAlreadyMember
        end note

        :відправляє менеджеру проєкту інформацію 
        про успішне додавання учасника до проєкт;

    |Менеджер проєкту|
        :отримує інформацію про додавання користувача до проєкту;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** MemberRemove

***НАЗВА:*** Видалити користувача з проєкту

***УЧАСНИКИ:*** Менеджер проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт 
- Існує учасник проєкту

***РЕЗУЛЬТАТ:*** Користувач більше не учасник проєкту

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- MemberRemove_EX_Cancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер проєкту|
        start
        :починає взаємодію;

        :натискає кнопку «Учасники проєкту»;

    |Система|
        :відкриває модальне вікно 
        з учасниками проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberAdd_EX_PressCancel
        end note

    |Менеджер проєкту|
        :обирає учасника у модальному вікні;

        :натискає кнопку «Видалити учасника»;

    |Система|
        :видаляє учасника з проєкту 
        та оновлює список учасників;

        :відправляє менеджеру проєкту інформацію 
        про успішне видалення учасника з проєкту;

    |Менеджер проєкту|
        :отримує інформацію про видалення учасника з проєкту;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** TicketsAndBoardsArtifact

***НАЗВА:*** Завантажити інформацію про завдання та дошки проєкту

***УЧАСНИКИ:*** Менеджер проєкту, Система

***ПЕРЕДУМОВИ:***

- Існує проєкт

***РЕЗУЛЬТАТ:*** Файл у форматі .json, який містить дані усіх завдань та дошок проєкту

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- TicketsAndBoardsArtifact_EX_NoData — Проєкт не містить завдань чи дошок.

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер проєкту|
        start
        :починає взаємодію;
        
        :натискає кнопку "Завантажити інформацію 
        про завдання та дошки проєкту";
    |Система|
        :створює файл профілю у форматі .json;
        note right #ffaaaa
        <b> Можлива
        <b> TicketsAndBoardsArtifact_EX_NoData
        end note

    |Менеджер проєкту|
        :натискає кнопку "Завантажити файл";

    |Система|
        :завантажує файл на комп’ютер менеджера проєкту;
    |Менеджер проєкту|
        :завершує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** ProjectCreate

***НАЗВА:*** Створити проєкт

***УЧАСНИКИ:*** Менеджер воркспейсу, Система

***ПЕРЕДУМОВИ:*** Відсутні

***РЕЗУЛЬТАТ:*** Проєкт створено у системі

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- ProjectCreate_EX_Cancel — Натиснута кнопка "Відміна".
- ProjectCreate_EX_EmptyName — Поле з назвою проєкту не заповнене.
- ProjectCreate_EX_NameExists — Проєкт з такою назвою вже існує.

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер воркспейсу|
        start
        :починає взаємодію;
        
        :натискає кнопку "Створити проєкт";

    |Система|
        :відкриває форму створення проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :заповнює форму створення проєкту 
        (назва, менеджер проєкту, члени команди);
        
        :натискає кнопку "Створити";

    |Система|
        :створює проєкт;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_EmptyName
        end note
        note right #ffaaaa
        <b> Можлива
        <b> ProjectCreate_EX_NameExists
        end note

    |Менеджер воркспейсу|
        :отримує інформацію про створення проєкту;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** ProjectManagerChange

***НАЗВА:*** Змінити менеджера у проєкті

***УЧАСНИКИ:*** Менеджер воркспейсу, Менеджер проєкту, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт
- Існує учасник проєкту 
- Існує менеджер проєкту

***РЕЗУЛЬТАТ:*** Новий менеджер у проєкті

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- ProjectManagerChange_EX_Cancel — Натиснута кнопка "Відміна".
- ProjectManagerChange_EX_NoOtherProjectMember — У проєкті не існує інший учасників, окрім менеджера.

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер воркспейсу|
        start
        :починає взаємодію;
        
        :натискає кнопку "Змінити менеджера";
    |Система|
        :відкриває модальне вікно 
        з учасниками проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> MemberRemove_EX_PressCancel
        end note

    |Менеджер воркспейсу|
        :обирає учасника 
        з випадаючого списку;
        note left #ffaaaa
        <b> Можлива
        <b> ProjectManagerChange_EX_NoOtherProjectMember
        end note
        
        :натискає кнопку "Призначити менеджером";

    |Система|
        :змінює менеджера у проєкті;
        
        :надсилає повідомлення менеджеру проєкту 
        про його призначення;
        
    |Менеджер воркспейсу|
        :отримує інформацію про змінення менеджера у проєкті;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** ProjectDelete

***НАЗВА:*** Видалити проєкт

***УЧАСНИКИ:*** Менеджер воркспейсу, Система

***ПЕРЕДУМОВИ:*** 

- Існує проєкт

***РЕЗУЛЬТАТ:*** Проєкт видалено із системи

***ВИКЛЮЧНІ СИТУАЦІЇ:***

ProjectDelete_EX_Cancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер воркспейсу|
        start
        :починає взаємодію;
        
        :натискає кнопку "Видалити проєкт";

    |Система|
        :відкриває форму підтвердження видалення проєкту;
        note right #ffaaaa
        <b> Можлива
        <b> ProjectDelete_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :підтверджує видалення 
        натисканням кнопки "Видалити";
        
    |Система|
        :видаляє проєкт та оновлює список проєктів;

    |Менеджер воркспейсу|
        :отримує інформацію про видалення проєкту;
        
        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** UserDataArtifacts

***НАЗВА:*** Вивантажити публічні дані користувачів у форматі JSON.

***УЧАСНИКИ:*** Менеджер воркспейсу, Система.

***ПЕРЕДУМОВИ:***

- Існує проєкт.
- існує учасник проєкту.

***РЕЗУЛЬТАТ:*** Дані користувачів зберігаються у форматі JSON.

***ВИКЛЮЧНІ СИТУАЦІЇ:***
- UserDataArtifacts_EX_Cancel — Натиснута кнопка "Відміна".
- UserDataArtifacts_EX_EmptyProject — Проєкт пустий.
- UserDataArtifacts_EX_NotEnoughMemory — Пам’яті в системі для вивантаження даних недостатньо.
- UserDataArtifacts_EX_WrongDirectory — Каталога для вивантаження даних не існує.

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Менеджер воркспейсу|
        start
        :починає взаємодію;
        
        :натискає кнопку «Вивантаження 
        публічних даних користувачів»;

    |Система|
        :запитує каталог збереження даних.;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_EmptyProject
        end note
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_Cancel
        end note

    |Менеджер воркспейсу|
        :вводить каталог у текстове поле;
        
    |Система|
        :отримує каталог;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_WrongDirectory
        end note
      

        :виконує обробку даних;

        :записує дані у вихідний файл;
        note right #ffaaaa
        <b> Можлива
        <b> UserDataArtifacts_EX_NotEnoughMemory
        end note
        
    |Менеджер воркспейсу|
        :отримує інформацію про вивантаження даних;

        :закінчує взаємодію;

        stop;

@enduml

</center>

---

***ID:*** Support
    
***НАЗВА:*** Вирішити проблему користувача
    
***УЧАСНИКИ:*** Адміністратор системи, користувач, система.

***ПЕРЕДУМОВИ:*** 

- Користувач має проблему, пов'язану с системою;
- Користувач не може знайти рішення за допомогою розділу Help;

***РЕЗУЛЬТАТ:*** Вирішення проблеми користувача

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- Support_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Користувач|
        start
        :починає взаємодію;
        :натискає кнопку "Тех. підтримки";
    |Система|
        :відкриває форму подання заявки;
        note right #ffaaaa
        <b> Можливо
        <b> Support_EX_PressCancel
        end note
    |Користувач|
        :заповнює форму та 
        натискає кнопку "Відправити";
    |Система|
        :надсилає заявку адміністратору системи;
    |Адміністратор системи|    
        :отримує заявку користувача;
        :натискає кнопку "Відправити відповідь";
    |Система|
        :відкриває форму для відповіді;
         note right #ffaaaa
        <b> Можливо
        <b> Support_EX_PressCancel
        end note
    |Адміністратор системи|
        :заповнює форму та натискає кнопку "Відправити";
    |Система|
        :надсилає відповідь адміністратора користувачу;
    |Користувач|
        :отримує відповідь;
        :закінчує взаємодію;
        stop;

@enduml

</center>

---

***ID:*** UserBan
    
***НАЗВА:*** Заблокувати користувача
    
***УЧАСНИКИ:*** Адміністратор системи, користувач, система

***ПЕРЕДУМОВИ:*** 

- Користувач порушив правила проєкту.

***РЕЗУЛЬТАТ:*** Блокування акаунта користувача

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- UserBan_EX_AlreadyBanned — Користувача вже заблоковано. 
- UserBan_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Адміністратор системи|
        start
        :починає взаємодію;
        :знаходить профіль користувача.;
        :натискає кнопку "Заблокувати користувача".;
    |Система|
        :відправляє форму для блокування;
        note right #ffaaaa
        <b> Можливо
        <b> UserBan_EX_PressCancel
        end note
    |Адміністратор системи|
        :заповнює форму;
        :натискає кнопку "Підтвердити";
    |Система|
        :блокує користувача;
        note right #ffaaaa
        <b> Можливо
        <b> UserBan_EX_AlreadyBanned
        end note
        :відпровляє повідомлення з результатом блокування;
    |Адміністратор системи|
        :бачить повідомлення з результатом блокування;
        :закінчує взаємодію;
        stop;

@enduml

</center>

---

***ID:*** UserUnBan
    
***НАЗВА:*** Розблокувати користувача
    
***УЧАСНИКИ:*** Адміністратор системи, користувач, система

***ПЕРЕДУМОВИ:***

- Користувач заблокований. 

***РЕЗУЛЬТАТ:*** Розблокування акаунта користувача

***ВИКЛЮЧНІ СИТУАЦІЇ:***
 
- UserUnBan_EX_PressCancel — Натиснута кнопка "Відміна".

***ОСНОВНИЙ СЦЕНАРІЙ:***

<center>

@startuml

    |Адміністратор системи|
        start
        :починає взаємодію;
        :знаходить профіль користувача.;
        :натискає кнопку "Розблокувати користувача".;
    |Система|
        :відправляє запит на 
        підтвердження розблокування;
        note right #ffaaaa
        <b> Можливо
        <b> UserUnBan_EX_PressCancel
        end note
    |Адміністратор системи|
        :натискає кнопку "Підтвердити";
    |Система|
        :розблоковує користувача;
        :відправляє повідомлення з результатом розблокування;
    |Адміністратор системи|
        :бачить повідомлення з результатом розблокування;
        :закінчує взаємодію;
        stop;

@enduml

</center>

