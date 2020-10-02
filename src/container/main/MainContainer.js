import { connect } from "react-redux";
import { memoActions } from "../../store/modules/memo";
import Main from "../../component/main/Main";

const mapStateToProps = (state) => {
  let memoList = state.memoReducer.memoList;
  return { memoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMemo: (tempMemo) => {
      dispatch(memoActions.ADD_MEMO({ tempMemo }));
    },
    retrieveMemoList: () => {
      dispatch(memoActions.RETRIEVE_MEMO());
    },
    updateMemo: (tempMemo) => {
      dispatch(memoActions.UPDATE_MEMO({ tempMemo }));
    },
    removeMemo: (targetIdx) => {
      dispatch(memoActions.REMOVE_MEMO({ targetIdx }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
