import React from "react";
import { Provider } from "react-redux";
import { AnyAction, Store } from "redux";

const ProviderWrapper = <S extends Store<any, AnyAction>>({
  children,
  store,
}: {
  children: any;
  store: S;
}) => <Provider store={store}>{children}</Provider>;

export default ProviderWrapper;
