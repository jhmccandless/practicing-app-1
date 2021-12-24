import Comp2UI from "../components/Comp2UI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  console.log(state);
  return { hangTime: state.hangTime };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedComp2 = connect(mapStateToProps, mapDispatchToProps)(Comp2UI);

export default connectedComp2;
