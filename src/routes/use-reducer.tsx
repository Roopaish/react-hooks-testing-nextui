import { Button, Divider, Grid, Input, Text } from "@nextui-org/react";
import { Reducer, useReducer, useState } from "react";
import CodeBlock from "../components/Code";

const countReducer: Reducer<number, { type: "increment" | "decrement" }> = (
  state,
  action
) => {
  switch (action.type) {
    case "increment":
      return state + 1; // state++ is not allowed
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const todoReducer: Reducer<
  { id: number; text: string; completed: boolean }[],
  {
    type: "add" | "remove" | "toggle";
    payload: { id: number; text: string; completed: boolean };
  }
> = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  const [todos, dispatchTodo] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  return (
    <>
      <Text>
        useReducer is used instead of useState for more complex logic. For
        managing state in the same component useReducer is preferred else Redux
        or other state-management libraries are good.
      </Text>

      <Divider css={{ my: 40 }} />

      <Text h2>Counter</Text>
      <Text h4>Count: {count}</Text>
      <Button.Group>
        <Button onPress={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onPress={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
      </Button.Group>

      <CodeBlock
        code={`
const countReducer: Reducer<number, { type: "increment" | "decrement" }> = (
  state,
  action
) => {
  switch (action.type) {
    case "increment":
      return state + 1; // state++ is not allowed
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};   

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    </>
      <Text h2>Counter</Text>
      <Text h4>Count: {count}</Text>
      <Button.Group>
        <Button onPress={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onPress={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
      </Button.Group>
    </>
  );
}
      `}
      />

      <Divider css={{ my: 40 }} />

      <Text h2>Todo</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Add todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <Button
          type="submit"
          onPress={() => {
            dispatchTodo({
              type: "add",
              payload: {
                id: todos.length + 1,
                text: text,
                completed: false,
              },
            });
          }}
        >
          Add Todo{" "}
        </Button>
      </form>
      {todos.map((todo, i) => (
        <Grid.Container key={todo.id}>
          <Text
            onClick={() =>
              dispatchTodo({
                type: "toggle",
                payload: {
                  ...todo,
                  completed: false,
                },
              })
            }
            css={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </Text>
          <Grid
            style={{
              cursor: "pointer",
              color: "red",
              fontSize: 20,
              marginLeft: 20,
            }}
            onClick={() =>
              dispatchTodo({
                type: "remove",
                payload: {
                  ...todo,
                  completed: false,
                },
              })
            }
          >
            X
          </Grid>
        </Grid.Container>
      ))}
      <CodeBlock
        code={`
const todoReducer: Reducer<
{ id: number; text: string; completed: boolean }[],
{
  type: "add" | "remove" | "toggle";
  payload: { id: number; text: string; completed: boolean };
}
> = (state, action) => {
switch (action.type) {
  case "add":
    return [...state, action.payload];
  case "remove":
    return state.filter((todo) => todo.id !== action.payload.id);
  case "toggle":
    return state.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  default:
    return state;
}
};

const Todo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, []);

  return (
    <>
      <Text h2>Todo</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Add todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <Button
          type="submit"
          onPress={() => {
            dispatchTodo({
              type: "add",
              payload: {
                id: todos.length + 1,
                text: text,
                completed: false,
              },
            });
          }}
        >
          Add Todo{" "}
        </Button>
      </form>
      {todos.map((todo, i) => (
        <Grid.Container key={todo.id}>
          <Text
            onClick={() =>
              dispatchTodo({
                type: "toggle",
                payload: {
                  ...todo,
                  completed: false,
                },
              })
            }
            css={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </Text>
          <Grid
            style={{
              cursor: "pointer",
              color: "red",
              fontSize: 20,
              marginLeft: 20,
            }}
            onClick={() =>
              dispatchTodo({
                type: "remove",
                payload: {
                  ...todo,
                  completed: false,
                },
              })
            }
          >
            X
          </Grid>
        </Grid.Container>
      ))}
    </>
}
    `}
      />
    </>
  );
};

export default UseReducerPage;
