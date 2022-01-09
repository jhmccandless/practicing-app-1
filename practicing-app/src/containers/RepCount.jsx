import RepCountUI from "../components/RepCountUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    repsTotal: state.repsTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedRepCountsUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepCountUI);

export default connectedRepCountsUI;
