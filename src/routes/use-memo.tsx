import { Button, Text } from "@nextui-org/react";
import { useMemo, useState } from "react";
import CodeBlock from "../components/Code";
import useFetch from "../utils/useFetch";

const computeLongestWord = (list: any) => {
  if (!list) return "";

  let longestWord = "";
  console.log("computeLongestWord called");

  JSON.parse(list).forEach((sentence: string) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
};

const UseMemoPage = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  // can use above function directly in the component, using useCallback
  // and adding it as a dependency to useMemo, but it will be called
  // Also if useCallback doesn't have any dependencies, it can be declared outside

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <>
      <Text h2>Longest word</Text>
      <Text>{longestWord}</Text>

      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>

      <CodeBlock
        code={`

const computeLongestWord = (list: any) => {
  if (!list) return "";

  let longestWord = "";
  console.log("computeLongestWord called");
  // this will be called every time the component renders without useMemo
  // and only once with useMemo

  JSON.parse(list).forEach((sentence: string) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
};

const TestC = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  // can use above function directly in the component, using useCallback
  // and adding it as a dependency to useMemo
  // Also if useCallback doesn't have any dependencies, it can be declared outside
  // so we did that

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <>
      <Text h2>Longest word</Text>
      <Text>{longestWord}</Text>

      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
    </>
  );
};
      `}
      />
    </>
  );
};

export default UseMemoPage;
