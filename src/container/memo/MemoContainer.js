import { connect } from "react-redux";
import { memoActions } from "../../store/modules/memo";
import Memo from "../../component/memo/Memo";

const mapStateToProps = (state) => {
  let memoList = state.memoReducer.memoList;
  return { memoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMemo: (tempMemo) => {
      dispatch(memoActions.UPDATE_MEMO({ tempMemo }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memo);
