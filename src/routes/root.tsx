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
              imageSrc="https://miro.medium.com/max/1400/1*DVLc3hypQ3TaTxovc2VoWA.png"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useMemo"
              href="/use-memo"
              imageSrc="https://i.ytimg.com/vi/6-BfMpTT2PE/maxresdefault.jpg"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useReducer"
              href="/use-reducer"
              imageSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--BJ8VQcnb--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x3r9zgfgdq45dpw407ah.PNG"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <TopicCard
              text="useContext"
              href="/use-context"
              imageSrc="https://dmitripavlutin.com/90649ae4bdf379c482ad24e0dd220bc4/react-context-3.svg"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}

export default Root;
