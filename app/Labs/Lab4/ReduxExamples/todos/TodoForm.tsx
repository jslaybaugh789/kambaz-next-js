import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
        <Button className="btn btn-success float-end mx-2" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </Button>
        <Button className="btn btn-warning float-end mx-2" onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </Button>
        <FormControl className="float-start w-50" value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </ListGroupItem>
);}
