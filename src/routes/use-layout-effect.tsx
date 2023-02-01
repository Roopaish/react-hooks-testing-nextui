import { Divider, Input, Text } from "@nextui-org/react";
import { useLayoutEffect, useRef, useState } from "react";
import CodeBlock from "../components/Code";

const UseLayoutEffectPage = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<any>(null);
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    setData(ref.current?.getBoundingClientRect());
  }, [text]);

  // Can use useEffect too
  // useEffect(() => {
  //   console.log(ref.current?.getBoundingClientRect());
  // }, [text]);

  return (
    <>
      <Text h2>useLayoutEffect</Text>
      <Text>
        Fired synchronously after all DOM mutations. (use useEffect first, if
        problem arises then only use useLayoutEffect)
        <br />
        <br /> runs synchronously before the browser repaints the screen. It is
        used to perform DOM mutations, such as changing styles or positioning,
        and should be used carefully because it can cause the screen to flicker
        or perform slowly
      </Text>

      <Divider css={{ my: 40 }} />

      <Text h2>Get Bounding Rectangle of dynamic content</Text>
      <Input
        label="Random Text"
        name="random-text"
        onChange={(e) => setText(e.target.value)}
      />
      <Text ref={ref} style={{ display: "inline" }}>
        {text}
      </Text>
      <Text h6>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Text>
      <CodeBlock
        code={`
const [data, setData] = useState<any>(null);
const ref = useRef<HTMLElement>(null);

useLayoutEffect(() => {
  setData(ref.current?.getBoundingClientRect());
}, [text]);
      `}
      />
    </>
  );
};

export default UseLayoutEffectPage;
