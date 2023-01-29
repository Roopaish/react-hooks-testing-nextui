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
        h: "$24",
        $$cardColor: "$colors$secondary",
        background: `url(${imageSrc}), $colors$secondary`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
        transition: "all 0.3s ease",
      }}
    >
      <Link to={href}>
        <Card.Body
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text h3 color="white">
            {text}
          </Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default TopicCard;
