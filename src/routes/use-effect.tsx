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

      <Divider css={{ my: 40 }} />

      <Text h2>Mouse position</Text>
      <Text>
        X: {cursorPosition.x} Y: {cursorPosition.y}
      </Text>

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
