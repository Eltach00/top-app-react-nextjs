import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export function HOCLayout<T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) {
  return function HOCWithLayout(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
