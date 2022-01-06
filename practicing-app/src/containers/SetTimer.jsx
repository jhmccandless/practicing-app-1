import { connect } from "react-redux";
import SetTimerUI from "../components/SetTimerUI";
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

const connectedSetTimerUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTimerUI);

export default connectedSetTimerUI;
