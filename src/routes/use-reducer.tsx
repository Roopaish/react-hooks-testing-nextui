import { Button, Text } from "@nextui-org/react";
import { Reducer, useReducer } from "react";

const reducer: Reducer<number, { type: "increment" | "decrement" }> = (
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

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
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
};

export default UseReducerPage;
