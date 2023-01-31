import { Button, Divider, FormElement, Input, Text } from "@nextui-org/react";
import { useRef } from "react";

const UseRefPage = () => {
  const inputRef = useRef<FormElement>(null);
  const renders = useRef(0);

  return (
    <>
      <Text h2>Focus here</Text>
      <Input type="text" label="Come here" ref={inputRef} />
      <Button onClick={() => inputRef?.current?.focus()}>Focus</Button>

      <Divider css={{ my: 40 }} />

      <Text h2>Storing number</Text>
      <Text>Rendered {renders.current++} times</Text>
    </>
  );
};

export default UseRefPage;
