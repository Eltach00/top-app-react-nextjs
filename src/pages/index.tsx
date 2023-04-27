import Htag from "@/components/Htag/Htag";
import Tag from "@/components/Tag/Tag";
import Button from "@/components/button/Button";
import P from "@/components/paragraph/Paragraph";

export default function Home() {
  return (
    <>
      <Htag tag="h4"> Test </Htag>
      <Button appearance="primary" arrow="right">
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
    </>
  );
}
