import { Button, Divider, FormElement, Input, Text } from "@nextui-org/react";
import { useRef } from "react";
import CodeBlock from "../components/Code";

const UseRefPage = () => {
  const inputRef = useRef<FormElement>(null);
  const renders = useRef(0);

  return (
    <>
      <Text h2>Focus here</Text>
      <Input type="text" label="Come here" ref={inputRef} />
      <Button onClick={() => inputRef?.current?.focus()}>Focus</Button>
      <CodeBlock
        code={`
import { useRef } from "react";

const FocusHere = () => {
  const inputRef = useRef<FormElement>(null);

  return (
    <>
      <Text h2>Focus here</Text>
      <Input type="text" label="Come here" ref={inputRef} />
      <Button onClick={() => inputRef?.current?.focus()}>Focus</Button>
    </>
  );
}
      `}
      />

      <Divider css={{ my: 40 }} />

      <Text h2>Storing number</Text>
      <Text>Rendered {renders.current++} times</Text>
      <CodeBlock
        code={`
import { useRef } from "react";

const Renders = () => {
  const renders = useRef(0);

  return (
    <>
      <Text h2>Storing number</Text>
      <Text>Rendered {renders.current++} times</Text>
    </>
  );
}
      `}
      />

      <Divider css={{ my: 40 }} />

      <Text h2>Check if component is mounted or not</Text>
      <CodeBlock
        code={`
import { useEffect, useRef, useState } from "react";

const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState<{ loading: boolean; data: string | null }>(
    {
      loading: true,
      data: null,
    }
  );

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

export default UseRefPage;
