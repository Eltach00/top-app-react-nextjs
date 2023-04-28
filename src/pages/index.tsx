import { Button, Htag, P, Rating } from "@/components";
import { Tag } from "@/components/Tag/Tag";
import { HOCLayout } from "@/layout/Layout";
import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h1"> {counter} </Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter(counter + 1)}>
        Узнать подробнее
      </Button>
      <Button appearance="ghost" arrow="down">
        Читать отзывы
      </Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag color="red"> Red</Tag>
      <Tag color="primary"> Primary</Tag>
      <Tag color="ghost"> Ghost</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default HOCLayout(Home);
