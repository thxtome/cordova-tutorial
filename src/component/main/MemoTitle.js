import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMemoTitle = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: 1.4rem;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
`;

const MemoTitle = ({ title, content, createdAt, idx, removeMemo }) => {
  const handleClick = () => {
    removeMemo(idx);
  };
  return (
    <StyledMemoTitle>
      <Link
        to={{
          pathname: `/memo`,
          state: {
            title,
            content,
            createdAt,
            idx,
          },
        }}
      >
        <h2>{title}</h2>
      </Link>
      <button onClick={handleClick}>x</button>
    </StyledMemoTitle>
  );
};

export default MemoTitle;
