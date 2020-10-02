import { createReducer, createAction } from "@reduxjs/toolkit";

const ADD_MEMO = createAction("ADD_MEMO");
const RETRIEVE_MEMO = createAction("RETRIEVE_MEMO");
const UPDATE_MEMO = createAction("UPDATE_MEMO");
const REMOVE_MEMO = createAction("REMOVE_MEMO");

export const memoActions = {
  ADD_MEMO,
  RETRIEVE_MEMO,
  UPDATE_MEMO,
  REMOVE_MEMO,
};

const initialState = {
  memoList: [],
};

const reducer = createReducer(initialState, {
  [ADD_MEMO]: (state, action) => {
    const tempMemo = action.payload.tempMemo;
    let memoList = JSON.parse(localStorage.getItem("memoList"));

    if (!memoList || memoList.length === 0) {
      memoList = [];
      tempMemo.idx = 0;
    } else {
      tempMemo.idx = memoList[memoList.length - 1].idx + 1;
    }

    let newMemoList = [...memoList, tempMemo];
    localStorage.setItem("memoList", JSON.stringify(newMemoList));
    return { ...state, memoList: newMemoList };
  },

  [RETRIEVE_MEMO]: (state, action) => {
    let memoList = JSON.parse(localStorage.getItem("memoList"));
    let newMemoList = memoList ? memoList : [];
    return { ...state, memoList: newMemoList };
  },

  [UPDATE_MEMO]: (state, action) => {
    const tempMemo = action.payload.tempMemo;
    let memoList = JSON.parse(localStorage.getItem("memoList"));
    let newMemoList = memoList.map((memo) =>
      memo.idx === tempMemo.idx ? tempMemo : memo
    );
    localStorage.setItem("memoList", JSON.stringify(newMemoList));
    return { ...state, memoList: newMemoList };
  },

  [REMOVE_MEMO]: (state, action) => {
    const targetIdx = action.payload.targetIdx;
    let memoList = JSON.parse(localStorage.getItem("memoList"));
    let newMemoList = memoList.filter((memo) => {
      return memo.idx !== targetIdx;
    });
    localStorage.setItem("memoList", JSON.stringify(newMemoList));
    return { ...state, memoList: newMemoList };
  },
});

export default reducer;
