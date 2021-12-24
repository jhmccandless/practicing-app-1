import Comp2UI from "../components/Comp2UI";
import { connect } from "react-redux";
import { deactivateTimerAction } from "../action.js";
// import { testingReducerAction } from "../action";

function mapStateToProps(state) {
  console.log(state);
  return { hangTime: state.hangTime, isHangActive: state.isHangActive };
}

function mapDispatchToProps(dispatch) {
  return {
    deactivateTimer: function (data) {
      dispatch(deactivateTimerAction(data));
    },
  };
}

const connectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2UI);

export default connectedComp2;
