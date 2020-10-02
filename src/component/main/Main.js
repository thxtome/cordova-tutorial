import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MemoList from "../main/MemoList";
import format from "../../lib/dateFormater";

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledMemoTitle = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.6rem;
`;

const Main = ({ memoList, addMemo, retrieveMemoList, removeMemo }) => {
  useEffect(() => {
    retrieveMemoList();
  }, []);

  const handleClick = () => {
    addMemo({
      title: "새 메모",
      content: "새 내용",
      createdAt: format("yyyy-MM-dd a/p hh:mm:ss"),
    });
  };
  return (
    <StyledMain>
      <StyledMemoTitle>
        <h1>메모장</h1>
        <button onClick={handleClick}>+</button>
      </StyledMemoTitle>
      <MemoList memoList={memoList} removeMemo={removeMemo}></MemoList>
    </StyledMain>
  );
};

export default Main;
