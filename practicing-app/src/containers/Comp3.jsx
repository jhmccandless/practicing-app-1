import { connect } from "react-redux";
import Comp3UI from "../components/Comp3UI";
import { resetHangTimerAction } from "../action";

function mapStateToProps(state) {
  return {
    restTime: state.restTime,
    totalTime: state.totalTime,
    isRestActive: state.isRestActive,
    isHangActive: state.isHangActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetHangTimer: function (data) {
      dispatch(resetHangTimerAction(data));
    },
  };
}

const connectedComp3 = connect(mapStateToProps, mapDispatchToProps)(Comp3UI);

export default connectedComp3;
