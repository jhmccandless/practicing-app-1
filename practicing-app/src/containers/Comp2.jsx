import Comp2UI from "../components/Comp2UI";
import { connect } from "react-redux";
import { deactivateTimerAction, testingAction } from "../action.js";

function mapStateToProps(state) {
  console.log(state);
  return { hangTime: state.hangTime, isHangActive: state.isHangActive };
}

function mapDispatchToProps(dispatch) {
  return {
    deactivateTimer: function () {
      dispatch(deactivateTimerAction());
    },
    testing: function (data) {
      dispatch(testingAction(data));
    },
  };
}

const connectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2UI);

export default connectedComp2;
