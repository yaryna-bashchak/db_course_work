const {v4: uuid} = require('uuid');
const {Router} = require('express');
const router = Router();

const connection = require('./database');

const decodeId = (bufferArray) => {
  return Buffer.from(bufferArray).toString('hex');
};

const ERRORS = {
  SERVER_ERROR: 'Error on server. Try later',
  ALL_FIELDS_REQUIRED: 'All fields are required',
  NOT_FOUND: 'Project was not found. Check the id',
};

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