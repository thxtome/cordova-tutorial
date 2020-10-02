import React, { useState, useEffect } from "react";
import styled from "styled-components";
import format from "../lib/dateFormater";

const StyledStartPage = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StartPage = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 2000);
  }, []);
  return isOpened ? (
    <StyledStartPage>
      <h1>메모장</h1>
    </StyledStartPage>
  ) : (
    ""
  );
};

export default StartPage;
