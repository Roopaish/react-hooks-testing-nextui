import { Container, Grid, useTheme } from "@nextui-org/react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import TopicCard from "../components/TopicCard";

function Root() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "All React Hooks and Testing";
  }, []);

  return (
    <Layout>
      <Container
        css={{
          background: theme?.colors.background,
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useState"
              href="/use-state"
              imageSrc="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/09/12115024/initialize-react-state-react-usestate.png"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useEffect"
              href="/use-effect"
              imageSrc="https://miro.medium.com/max/1200/1*KOAe9ptr6Y9IfFuPOxSC0Q.png"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useRef"
              href="/use-ref"
              imageSrc="https://blog.logrocket.com/wp-content/uploads/2020/01/react-new-useref-instance.png"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
}

export default Root;
