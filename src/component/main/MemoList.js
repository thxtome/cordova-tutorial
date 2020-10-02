import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MemoTitle from "./MemoTitle";

const StyledMemoList = styled.div`
  width: 100%;
  height: max-content;
  justify-content: space-between;
`;

const MemoList = ({ memoList, removeMemo }) => {
  useEffect(() => {}, []);
  return (
    <StyledMemoList>
      {memoList.map((memo, index) => (
        <MemoTitle {...memo} removeMemo={removeMemo} key={index}></MemoTitle>
      ))}
    </StyledMemoList>
  );
};

export default MemoList;
