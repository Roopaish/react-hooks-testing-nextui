import { Button, Divider, Text } from "@nextui-org/react";
import { useState } from "react";
import Layout from "../components/Layout";

const UseStatePage = () => {
  const [count, setCount] = useState(1);
  return (
    <Layout>
      <Text h2>Counter</Text>
      <Button.Group>
        <Button
          onClick={() => setCount(count - 1)}
          disabled={count === 1}
          name="decrement"
        >
          Decrement
        </Button>
        <Button css={{ background: "$secondary" }}>
          <Text h4>{count}</Text>
        </Button>
        <Button onClick={() => setCount(count + 1)} name="increment">
          Increment
        </Button>
      </Button.Group>

      <Divider css={{ my: 30 }} />
      <Text h2>Form</Text>
    </Layout>
  );
};

export default UseStatePage;
