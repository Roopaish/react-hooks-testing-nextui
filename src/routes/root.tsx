import { Container, Grid, useTheme } from "@nextui-org/react";
import { useEffect } from "react";
import TopicCard from "../components/TopicCard";

function Root() {
  const { theme } = useTheme();
  useEffect(() => {
    document.title = "All React Hooks and Testing";
  }, []);

  return (
    <>
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
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useLayoutEffect"
              href="/use-layout-effect"
              imageSrc="https://blog.commoninja.com/wp-content/uploads/2022/12/TgixJS5s.png"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useCallback"
              href="/use-callback"
              imageSrc="https://miro.medium.com/max/568/1*3ZmHvv60o9xv-KAOuoJ4Hw.png"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}

export default Root;
