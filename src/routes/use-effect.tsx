import {
  Button,
  Card,
  Divider,
  Grid,
  Input,
  Progress,
  Text,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import CodeBlock from "../components/Code";
import useFetch from "../utils/useFetch";

const UseEffectPage = () => {
  const [display, setDisplay] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const [number, setNumber] = useState(1);

  const { data, loading } = useFetch(`http://numbersapi.com/${number}/trivia`);

  return (
    <>
      <Text h2>Component mount and unmount</Text>
      <Grid.Container alignItems="flex-end" gap={1}>
        <Grid>
          <Button onPress={() => setDisplay((display) => !display)}>
            Toggle display
          </Button>
        </Grid>
        <Grid>{display && <HelloWorld />}</Grid>
      </Grid.Container>

      <CodeBlock
        code={`
const ComponentMount = () => {
  const [display, setDisplay] = useState(true);
  
  return (
    <>
      <Button onPress={() => setDisplay((display) => !display)}>
        Toggle display
      </Button>
      {display && <HelloWorld />}
    </>
  );
}

const HelloWorld = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("1. Component mounted");
    return () => console.log("1. Component unmounted");
  }, []);

  useEffect(() => {
    console.log("2. New value added");

    return () => console.log("2. Old value cleaned up");
  }, [text]);

  return (
    <Card isHoverable variant="bordered" css={{ mw: "max-content" }}>
      <Card.Body>
        <Input
          placeholder="Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Name"
        />
      </Card.Body>
    </Card>
  );
};

      `}
      />

      <Divider css={{ my: 40 }} />

      <Text h2>Mouse position</Text>
      <Text>
        X: {cursorPosition.x} Y: {cursorPosition.y}
      </Text>
      <CodeBlock
        code={`
useEffect(() => {
  const onMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", onMouseMove);

  return () => window.removeEventListener("mousemove", onMouseMove);
}, []);
      `}
      />

      <Divider css={{ my: 40 }} />

      <Text h2>useFetch Custom Hook</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const input = form.elements.namedItem("number") as HTMLInputElement;
          const num = parseInt(input.value);
          if (!isNaN(num)) setNumber(num);
        }}
      >
        <Input
          type="number"
          defaultValue={number}
          name="number"
          label="Enter Number to know facts about it"
        />
      </form>
      <Text h4>
        {loading ? (
          <Progress
            indeterminated
            value={50}
            css={{ w: "200px" }}
            color="secondary"
            status="secondary"
          />
        ) : (
          data
        )}
      </Text>
      <CodeBlock
        code={`
import { useEffect, useRef, useState } from "react";

const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState<{ loading: boolean; data: any | null }>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    return () => {
      // cleanup function to set isCurrent to false when component is unmounted
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // use old data if it exists for smoother transition
    setState((state) => ({
      loading: state.loading,
      data: state.data,
    }));

    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.text();
      if (!isCurrent.current) return; // if component is unmounted, don't update state (to avoid memory leak)
      setState({
        loading: false,
        data,
      });
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;

      `}
      />
    </>
  );
};

export default UseEffectPage;

const HelloWorld = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("1. Component mounted");
    return () => console.log("1. Component unmounted");
  }, []);

  useEffect(() => {
    console.log("2. New value added");

    return () => console.log("2. Old value cleaned up");
  }, [text]);

  return (
    <Card isHoverable variant="bordered" css={{ mw: "max-content" }}>
      <Card.Body>
        <Input
          placeholder="Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Name"
        />
      </Card.Body>
    </Card>
  );
};
