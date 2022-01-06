import HangUpUI from "../components/HangUpUI";
import { connect } from "react-redux";
import { resetHangTimerAction } from "../action.js";

function mapStateToProps(state) {
  return {
    downTime: state.downTime,
    hangTime: state.hangTime,
    restingTime: state.restTime,
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

const connectedHangUpUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(HangUpUI);

export default connectedHangUpUI;
