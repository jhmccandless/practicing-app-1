import Comp1UI from "../components/Comp1UI";
import { connect } from "react-redux";
import { resetRestTimerAction } from "../action";

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
    resetRestTimer: function (data) {
      dispatch(resetRestTimerAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1UI);
