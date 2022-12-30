# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 

## SQL-скрипт

```
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema default_schema
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema imbaza
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `imbaza` ;

-- -----------------------------------------------------
-- Schema imbaza
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `imbaza` DEFAULT CHARACTER SET utf8 ;
USE `imbaza` ;

-- -----------------------------------------------------
-- Table `imbaza`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`user` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`user` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`role` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`role` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` ENUM('ProjectManager', 'ProjectUser', 'SystemAdministrator', 'WorkspaceManager') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`access` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`access` (
  `user_id` BINARY(16) NOT NULL,
  `role_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_access_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `imbaza`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `imbaza`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`operation_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`operation_type` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`operation_type` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` ENUM('create', 'read', 'update', 'delete') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`request_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`request_type` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`request_type` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `object_id` BINARY(16) NOT NULL,
  `operation_type_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`id`, `object_id`, `operation_type_id`),
  INDEX `fk_request_type_operation_type1_idx` (`operation_type_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_request_operation`
    FOREIGN KEY (`operation_type_id`)
    REFERENCES `imbaza`.`operation_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`grant` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`grant` (
  `request_type_id` BINARY(16) NOT NULL,
  `role_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`request_type_id`, `role_id`),
  INDEX `fk_grant_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_grant_request`
    FOREIGN KEY (`request_type_id`)
    REFERENCES `imbaza`.`request_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `imbaza`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`workspace`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`workspace` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`workspace` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `owner_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`id`, `owner_id`),
  INDEX `fk_workspace_user1_idx` (`owner_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `owner_id_UNIQUE` (`owner_id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  CONSTRAINT `fk_workspace_user`
    FOREIGN KEY (`owner_id`)
    REFERENCES `imbaza`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`project` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`project` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  `manager_id` BINARY(16) NOT NULL,
  `workspace_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`manager_id`, `workspace_id`, `id`),
  INDEX `fk_project_user1_idx` (`manager_id` ASC) VISIBLE,
  INDEX `fk_project_workspace1_idx` (`workspace_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_project_user`
    FOREIGN KEY (`manager_id`)
    REFERENCES `imbaza`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_workspace`
    FOREIGN KEY (`workspace_id`)
    REFERENCES `imbaza`.`workspace` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`board`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`board` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`board` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NULL,
  `project_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`id`, `project_id`),
  INDEX `fk_board_project1_idx` (`project_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_board_project`
    FOREIGN KEY (`project_id`)
    REFERENCES `imbaza`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`task` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`task` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `photo` VARCHAR(100) NULL DEFAULT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `board_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`id`, `board_id`),
  INDEX `fk_task_board1_idx` (`board_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_task_board`
    FOREIGN KEY (`board_id`)
    REFERENCES `imbaza`.`board` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`status` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`status` (
  `id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
  `name` ENUM('Done', 'BugFound', 'InReview', 'InProgress', 'ToDo', 'BackLog') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `imbaza`.`task_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `imbaza`.`task_status` ;

CREATE TABLE IF NOT EXISTS `imbaza`.`task_status` (
  `task_id` BINARY(16) NOT NULL,
  `status_id` BINARY(16) NOT NULL,
  PRIMARY KEY (`task_id`, `status_id`),
  INDEX `fk_task_status_status1_idx` (`status_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_status_task`
    FOREIGN KEY (`task_id`)
    REFERENCES `imbaza`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_status_status`
    FOREIGN KEY (`status_id`)
    REFERENCES `imbaza`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними

Вихідний текст основного файлу **index.js**
```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;
const host = '0.0.0.0';

const connection = require('./database.js');

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./controls.js'));

app.listen(port, host, () => {
  console.log(`Started server: ${host}/${port}`);
});
```

Вихідний текст файлу **database.js**, який реалізує підключення до бази данних
```js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yaryna',
  password: 'yaryna.123',
  database: 'imbaza',
});

module.exports = connection;
```

Обробка запитів у файлі **controls.js**
```js
const {v4: uuid} = require('uuid');
const {Router} = require('express');
const router = Router();

const connection = require('./database');
```
Реалізація get
```js
router.get('/tasks', (req, res) => {
  connection.query('select * from task', (err, tasks) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = tasks.map(({
      id,
      title,
      description,
      board_id,
      photo,
      deadline
    }) => ({
      title,
      description,
      id: decodeId(id),
      board_id: decodeId(board_id),
      photo,
      deadline
    }));

    res.status(200).json({
      data: convertedData,
    });
  });
});
```
Реалізація get by id
```js
router.get('/task/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`select * from task where id = unhex("${id}")`, (err, [task]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!task) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    res.status(200).json({
      data: {
        ...task,
        id: decodeId(task.id),
        board_id: decodeId(task.board_id),
      },
    });
  });
});
```
Реалізація post
```js
router.post('/task', (req, res) => {
  const {title, description, board_id, photo, deadline} = req.body;

  if (!(title && description && board_id && photo && deadline)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    });
    return;
  }
  const id = uuid().replaceAll('-', '');

  connection.query(
    `insert into task (
        id,
        title,
        description,
        board_id,
        photo,
        deadline
      ) values (
        unhex("${id}"),
        "${title}",
        "${description}",
        unhex("${board_id}"),
        "${photo}",
        "${deadline}"
      )`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      res.status(200).json({
        data: result,
      });
    }
  );
});
```
Реалізація put by id
```js
router.put('/task/:id', (req, res) => {
  const {id} = req.params;

  connection.query(`select * from task where id = unhex("${id}")`, (err, [task]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!task) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    const {
      title,
      description,
      photo,
      deadline,
      board_id,
    } = {
      ...task,
      board_id: decodeId(task.board_id),
      ...req.body
    };

    connection.query(
      `update task set 
        title = "${title}", 
        description = "${description}",
        board_id = unhex("${board_id}"),
        photo = "${photo}",
        deadline = "${deadline.toISOString().slice(0, 19).replace('T', ' ')}"
        where id = unhex("${id}")`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: ERRORS.SERVER_ERROR,
          });
          return;
        }

        res.status(200).json({
          data: result,
        });
      }
    );
  });
});
```
Реалізація delete by id
```js
router.delete('/task/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`delete from task where id = unhex("${id}")`, (err, result) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      data: result,
    });
  });
});

module.exports = router;
```