import Courses from "./icons/courses.svg";
import Books from "./icons/books.svg";
import Products from "./icons/products.svg";
import Services from "./icons/service.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
export const firstLevel = [
  {
    route: "courses",
    name: "Курсы",
    id: TopLevelCategory.Courses,
    icon: <Courses />,
  },
  {
    route: "books",
    name: "Книги",
    id: TopLevelCategory.Books,
    icon: <Books />,
  },
  {
    route: "products",
    name: "Продукты",
    id: TopLevelCategory.Products,
    icon: <Products />,
  },
  {
    route: "services",
    name: "Сервисы",
    id: TopLevelCategory.Services,
    icon: <Services />,
  },
];
