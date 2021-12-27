import { connect } from "react-redux";
import Comp3UI from "../components/Comp3UI";
import { resetRestTimerAction } from "../action";

function mapStateToProps(state) {
  return {
    restTime: state.restTime,
    isRestActive: state.isRestActive,
    isHangActive: state.isHangActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetRestTimer: function (data) {
      dispatch(resetRestTimerAction(data));
    },
  };
}

const connectedComp3 = connect(mapStateToProps, mapDispatchToProps)(Comp3UI);

export default connectedComp3;