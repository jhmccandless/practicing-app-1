import Comp2UI from "../components/Comp2UI";
import { connect } from "react-redux";
import { resetTimerAction } from "../action.js";

function mapStateToProps(state) {
  return { hangTime: state.hangTime, isHangActive: state.isHangActive };
}

function mapDispatchToProps(dispatch) {
  return {
    resetTimer: function () {
      dispatch(resetTimerAction());
    },
  };
}

const connectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2UI);

export default connectedComp2;
