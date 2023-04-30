import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.inteface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths } from "next";
import { HOCLayout } from "@/HOC/HOC";
import { firstLevel } from "@/helpers/helpers";

function Type({ firstCategory }: TypeProps): JSX.Element {
  return <>Type: {firstCategory}</>;
}

export default HOCLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = firstLevel.map((m) => "/" + m.route);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevel.find(
    (menu) => menu.route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: firstCategoryItem.id }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
