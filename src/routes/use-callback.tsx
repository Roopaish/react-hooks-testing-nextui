import { Button, Divider, Grid, Text } from "@nextui-org/react";
import React, { FC, useCallback, useRef, useState } from "react";
import CodeBlock from "../components/Code";

const UseCallbackPage = () => {
  const [count, setCount] = useState(1);
  const favNums = [2, 4, 6, 8];

  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  // useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.
  // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

  // can pass parameters too
  const incrementByN = useCallback(
    (n: number) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [increment]); // This will fire up every time increment is called, because increment is a new function on each render

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [increment2]); // This will fire up only once, because increment2 is memoized and setCount is not changing

  return (
    <>
      <Text h2>useCallback</Text>
      <Text>
        useCallback returns a memoized version of the callback that only changes
        if one of the dependencies has changed. This is useful when passing
        callbacks to optimized child components that rely on reference equality
        to prevent unnecessary renders. You can pass parameters too.
        <br /> <br />
        So, every time the component re-renders, the increment function will be
        a new function, and the Counter component will re-render. This is
        because the Counter component is using the increment function as a prop,
        and since it's a new function, the component will re-render.
        <br /> <br />
        To prevent this, we can use useCallback.{" "}
        <u>
          useCallback returns the first function that was created/cached having
          same version of dependencies, so no new function is returned on each
          render
        </u>
        . Also we{" "}
        <u>
          wrap the component in React.memo to cache the component and prevent
          re-rendering of the component if props are same between re-renders
        </u>
        .
      </Text>

      <Divider css={{ my: 40 }} />

      <Text h2>Memoized Counter</Text>
      <Text h4>Count: {count}</Text>
      <br />
      <Counter increment={increment} />
      <br />
      <Counter increment={increment2} text="with useCallback" />

      <Divider css={{ my: 40 }} />

      <Text h2>Looped children</Text>
      <Grid.Container gap={2}>
        {favNums.map((n) => (
          <Chip key={n} increment={incrementByN} n={n} />
        ))}
      </Grid.Container>

      <Divider css={{ my: 40 }} />

      <CodeBlock
        code={`
// without useCallback, 1st Increment Button
// The Counter component will re-render each time increment is fired
const Increment = () => {
  const increment = () => {
    setCount(count + 1);
  };

  return(
    <>
      <Text h4>Count: {count}</Text>
      <br />
      <Counter increment={increment2} />
    </>
    );
}

interface CounterProps {
  increment: () => void;
  text?: string;
}

const Counter: FC<CounterProps> = React.memo(({ increment, text }) => {
  const renders = useRef(0);

  return (
    <>
      <Button onPress={increment}>Increment {text ?? ""}</Button>
      <Text>
        <>Rendered {renders.current++} times</>
      </Text>
    </>
  );
});
      `}
      />
      <CodeBlock
        code={`
// with useCallback, 2nd Increment Button
// The Counter component will not re-render
const IncrementWithUseCallback = () => {
  const increment2 = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return(
    <>
      <Text h4>Count: {count}</Text>
      <br />
      <Counter increment={increment} />
    </>
    );
}
      `}
      />
      <CodeBlock
        code={`
const LoopedChildren = () => {
  const favNums = [2, 4, 6, 8];

  const incrementByN = useCallback(
    (n: number) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return(
    <>
      <Text h2>Looped children</Text>
      <Grid.Container gap={2}>
        {favNums.map((n) => (
          <Chip key={n} increment={incrementByN} n={n} /> // this will not re-render the Chip component every time
          // <Chip key={n} increment={()=>incrementByN(n)} n={n} /> // this will re-render the Chip component every time
        ))}
      </Grid.Container>
    </>
    );
}

const Chip = React.memo(
  ({ increment, n }: { increment: (n: number) => void; n: number }) => {
    const renders = useRef(0);
    return (
      <Grid>
        <Button onPress={() => increment(n)}>Increment by {n}</Button> // this will not re-render the Chip component every time
        // <Button onPress={increment}>Increment by {n}</Button> // this will re-render the Chip component every time
        <Text>
          <>Rendered {renders.current++} times</>
        </Text>
      </Grid>
    );
  }
);

      `}
      />
    </>
  );
};

export default UseCallbackPage;

interface CounterProps {
  increment: () => void;
  text?: string;
}

const Counter: FC<CounterProps> = React.memo(({ increment, text }) => {
  const renders = useRef(0);

  return (
    <>
      <Button onPress={increment}>Increment {text ?? ""}</Button>
      <Text>
        <>Rendered {renders.current++} times</>
      </Text>
    </>
  );
});

const Chip = React.memo(
  ({ increment, n }: { increment: (n: number) => void; n: number }) => {
    const renders = useRef(0);
    return (
      <Grid>
        <Button onPress={() => increment(n)}>Increment by {n}</Button>
        <Text>
          <>Rendered {renders.current++} times</>
        </Text>
      </Grid>
    );
  }
);
