import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import StartPage from "./component/StartPage";
import MainContainer from "./container/main/MainContainer";
import MemoContainer from "./container/memo/MemoContainer";

const GlobalStyle = createGlobalStyle`
html, body {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    overflow:hidden;
    font-size: 16px;
  }
  
h1 {
  color:white;
  font-size:1.6rem;
}
h2 {
  color:white;
  font-size:1.4rem;
}
span{
  font-size:0.7rem;
}
input {
  max-width:130px;
  overflow:hidden;
  font-size:1.4rem;
  background:black;
  color:white;
  border:none;
  &:focus{
    outline:none;
  }
}
textarea{
  &:focus{
    outline:none;
  }
}

  #app{
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    background:black;
  }
`;

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <AppBlock>
          <StartPage></StartPage>
          <Switch>
            <Route
              exact
              path={["/", "/index.html"]}
              component={MainContainer}
            />
            <Route exact path="/memo" component={MemoContainer} />
          </Switch>
        </AppBlock>
      </HashRouter>
    </Provider>
  );
};

export default App;
