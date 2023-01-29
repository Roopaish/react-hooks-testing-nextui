import { Button, Divider, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import CodeBlock from "../components/Code";
import Layout from "../components/Layout";
import useForm from "../utils/useForm";

const UseStatePage = () => {
  const [count, setCount] = useState(1);
  const [values, changeHandler] = useForm({
    name: "",
    email: "",
    password: "",
  });

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

      <CodeBlock
        code={`
// counter.tsx

const Counter = () => {
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
    </Layout>
  );
};

export default Counter;
    
      `}
      />
      <Spacer y={2} />
      <CodeBlock
        code={`
// counter.test.tsx
describe("Counter", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <UseStatePage />
      </BrowserRouter>
    );

  it("should display the initial count as 1", () => {
    setup();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should increment the count by 1 when the increment button is clicked", () => {
    setup();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    act(() => {
      incrementButton.click();
    });
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should decrement the count by 1 when the decrement button is clicked", () => {
    setup();
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    act(() => {
      decrementButton.click();
    });
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should disable the decrement button when the count is 1", () => {
    setup();
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).toBeDisabled();
  });

  it("should enable the decrement button when the count is greater than 1", () => {
    setup();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    act(() => {
      incrementButton.click();
    });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    expect(decrementButton).not.toBeDisabled();
  });
});

      `}
      />

      <Divider css={{ my: 30 }} />
      <Text h2>Form</Text>
      <Grid.Container gap={2}>
        <Grid>
          <form>
            <Input
              name="name"
              type="text"
              placeholder="John Doe"
              label="Name"
              value={values.name}
              onChange={changeHandler}
            />
            <Spacer y={1} />
            <Input
              name="email"
              placeholder="example@gmail.com"
              label="Email"
              value={values.email}
              onChange={changeHandler}
            />
            <Spacer y={1} />
            <Input
              name="password"
              type="password"
              placeholder="********"
              label="Password"
              value={values.password}
              onChange={changeHandler}
            />
            <Spacer y={1} />
          </form>
        </Grid>
        <Grid>
          <Text h6>Name: {values.name}</Text>
          <Text h6>Email: {values.email}</Text>
          <Text h6>Password: {values.password}</Text>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default UseStatePage;
