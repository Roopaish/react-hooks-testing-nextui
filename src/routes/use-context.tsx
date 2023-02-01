import { Card, Input, Text } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";
import CodeBlock from "../components/Code";

type User = {
  name: string;
};
type UserContextType = { user: User | null; setUser: (user: User) => void };

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (user: User | null) => {},
});

const UseContextPage = () => {
  const [user, setUser] = useState<User | null>({ name: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Text h2>Share value between components</Text>
      <Text>Name: {user?.name}</Text>
      <Input
        aria-label="Name"
        placeholder="Enter name"
        value={user?.name ?? ""}
        onChange={(e) => setUser({ name: e.target.value })}
      />
      <Hello />
      <About />

      <CodeBlock
        code={`
import { Card, Input, Text } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";

type User = {
  name: string;
};
type UserContextType = { user: User | null; setUser: (user: User) => void };

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (user: User | null) => {},
});

const UseContextPage = () => {
  const [user, setUser] = useState<User | null>({ name: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Text h2>Share value between components</Text>
      <Text>Name: {user?.name}</Text>
      <Input
        aria-label="Name"
        placeholder="Enter name"
        value={user?.name ?? ""}
        onChange={(e) => setUser({ name: e.target.value })}
      />
      <Hello />
      <About />
    </UserContext.Provider>
  );
};

export default UseContextPage;

export const Hello = () => {
  const { user } = useContext(UserContext);

  return (
    <Card css={{ my: 20, p: 20, maxW: 300 }}>
      <Text h2>Hello</Text>
      <Text>Name: {user?.name ?? ""}</Text>
    </Card>
  );
};

export const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Card css={{ my: 20, p: 20, bg: "$color$secondary", maxW: 300 }}>
      <Text h2>About</Text>
      <Text>Name: {user?.name ?? ""}</Text>
      <Input
        aria-label="Name"
        value={user?.name ?? ""}
        placeholder="Enter name"
        onChange={(e) => setUser({ name: e.target.value })}
      />
    </Card>
  );
};

      `}
      />
    </UserContext.Provider>
  );
};

export default UseContextPage;

export const Hello = () => {
  const { user } = useContext(UserContext);

  return (
    <Card css={{ my: 20, p: 20, maxW: 300 }}>
      <Text h2>Hello</Text>
      <Text>Name: {user?.name ?? ""}</Text>
    </Card>
  );
};

export const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Card css={{ my: 20, p: 20, bg: "$color$secondary", maxW: 300 }}>
      <Text h2>About</Text>
      <Text>Name: {user?.name ?? ""}</Text>
      <Input
        aria-label="Name"
        value={user?.name ?? ""}
        placeholder="Enter name"
        onChange={(e) => setUser({ name: e.target.value })}
      />
    </Card>
  );
};
