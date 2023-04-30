import { Button, Htag, P, Rating } from "@/components";
import { Tag } from "@/components/Tag/Tag";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.inteface";
import { HOCLayout } from "@/HOC/HOC";

function Home({ menu }: HomeProps) {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
