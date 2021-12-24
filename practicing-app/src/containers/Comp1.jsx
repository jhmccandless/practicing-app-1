import Comp1UI from "../components/Comp1UI";
import { connect } from "react-redux";
import { testingAction } from "../action.js";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    testing: function (data) {
      dispatch(testingAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1UI);
