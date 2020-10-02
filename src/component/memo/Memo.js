import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledMemo = styled.div`
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
  color: white;
`;

const StyledMemoContent = styled.textarea`
  width: 100%;
  min-height: 100px;
  height: calc(100% - 80px);
  padding-left: 20px;
  background: black;
  color: white;
  border: none;
`;

const useInput = (defalutValue) => {
  const [value, setValue] = useState(defalutValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const Memo = ({
  location: {
    state: { title, content, createdAt, idx },
  },
  updateMemo,
}) => {
  const titleInput = useInput(title);

  const handleContentChange = (e) => {
    updateMemo({ title, content: e.target.value, createdAt, idx });
  };

  const handleTitleChange = (e) => {
    titleInput.onChange(e);
    updateMemo({ title: e.target.value, content, createdAt, idx });
  };

  return (
    <StyledMemo>
      <StyledMemoTitle>
        <input value={titleInput.value} onChange={handleTitleChange} />
        <span>{createdAt}</span>
      </StyledMemoTitle>
      <StyledMemoContent
        onChange={handleContentChange}
        defaultValue={content}
      ></StyledMemoContent>
    </StyledMemo>
  );
};

export default Memo;
