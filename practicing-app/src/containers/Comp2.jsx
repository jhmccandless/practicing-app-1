import Comp2UI from "../components/Comp2UI";
import { connect } from "react-redux";
import { resetHangTimerAction } from "../action.js";

function mapStateToProps(state) {
  return {
    hangTime: state.hangTime,
    restingTime: state.restTime,
    setTotalTime: state.totalSetTime,
    betweenSets: state.setRestTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetHangTimer: function (data) {
      dispatch(resetHangTimerAction(data));
    },
  };
}

const connectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2UI);

export default connectedComp2;
