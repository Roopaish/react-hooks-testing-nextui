import { Container, Grid, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import type { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <header>
        <Container>
          <Grid.Container gap={2} justify="space-between" alignItems="center">
            <Grid>
              <Text h2>React Hooks and Testing</Text>
            </Grid>
            <Grid>
              <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
            </Grid>
          </Grid.Container>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
