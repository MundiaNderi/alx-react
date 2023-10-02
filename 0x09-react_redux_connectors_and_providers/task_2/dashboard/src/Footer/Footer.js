import React from "react";
import "./Footer.css";
import { connect } from "react-redux";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext"; // Import your context here

// mapStateToProps function to map the user prop to user within the redux state
const mapStateToProps = (state) => ({
  user: state.uiReducer.user,
})

function Footer() {
    const { user } = useContext(AppContext)
  return (
    <>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
        {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Footer);
