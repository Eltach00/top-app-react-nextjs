import { AppContextProvider, IAppContext } from "@/context/app.context";
import { Layout } from "@/layout/Layout";
import { FunctionComponent } from "react";

export function HOCLayout<T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) {
  return function HOCWithLayout(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
}
