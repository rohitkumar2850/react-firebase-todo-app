import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    // updte the todo with new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
    setInput("");
  };

  return (
    <div>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Update Todo List</h3>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            size="small"
            variant="contained"
            disabled={!input}
            onClick={updateTodo}
          >
            Update todo
          </Button>
        </div>
      </Modal>

      <List className="todo-list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy space" />
        </ListItem>
        <Button size="small" variant="contained" onClick={(e) => setOpen(true)}>
          Edit
        </Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </div>
  );
}

export default Todo;
