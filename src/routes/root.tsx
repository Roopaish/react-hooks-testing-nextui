import { Container, Grid, useTheme } from "@nextui-org/react";
import { useEffect } from "react";
import TopicCard from "../components/TopicCard";

function Root() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "All React Hooks and Testing";
  }, []);

  return (
    <Container
      css={{
        background: theme?.colors.background,
      }}
    >
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <TopicCard text="useState()" href="/use-state" />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <TopicCard text="useEffect()" href="/use-effect" />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <TopicCard text="useRef()" href="/use-ref" />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Root;
