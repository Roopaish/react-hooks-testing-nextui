import { Card, Text } from "@nextui-org/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface TopicCardProps {
  text: string;
  href: string;
  imageSrc?: string;
}

const TopicCard: FC<TopicCardProps> = ({ text, href, imageSrc }) => {
  return (
    <Card
      css={{
        h: "200px",
        $$cardColor: "$colors$secondary",
        background: `url(${imageSrc}), transparent`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to={href}>
        <Card.Body
          css={{
            display: "flex",
            h: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text h3 color="white" size={40} weight="bold">
            {text}
          </Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default TopicCard;
