import { Card, Text } from "@nextui-org/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface TopicCardProps {
  text: string;
  href: string;
}

const TopicCard: FC<TopicCardProps> = ({ text, href }) => {
  return (
    <Card css={{ h: "$24", $$cardColor: "$colors$secondary" }}>
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
