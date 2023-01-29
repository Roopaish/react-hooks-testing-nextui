import {
  Container,
  Grid,
  Switch,
  Text,
  Tooltip,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <header>
        <Container
          css={{
            boxShadow: isDark
              ? "0 0 10px 0 rgba(255, 255, 255, 0.1) "
              : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            p: 15,
          }}
        >
          <Grid.Container justify="space-between" alignItems="center">
            <Grid>
              <Link to="/">
                <Text h3>React Hooks and Testing</Text>
              </Link>
            </Grid>
            <Grid>
              <Tooltip
                content={"Toggle theme"}
                placement="bottomEnd"
                color="secondary"
              >
                <Switch
                  checked={isDark}
                  css={{
                    $$switchColor: "$colors$purple600",
                    $$switchColorHover: "$colors$purple600",
                  }}
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </Tooltip>
            </Grid>
          </Grid.Container>
        </Container>
      </header>
      <main>
        <Container css={{ mt: 50 }}>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
