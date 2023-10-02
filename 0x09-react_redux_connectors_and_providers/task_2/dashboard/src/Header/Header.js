import { connect } from "react-redux";
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/holberton-logo-jpg';
import { StyleSheet, css } from "aphrodite";


// mapStateToProps function to map the user prop to the user within the redux state
const mapStateToProps = (state) => ({
    user: state.uiReducer.user,
})

const styles = StyleSheet.create({
    header: {
        fontSize: "1.4rem",
        color: "#e0354b",
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #e0354b",
        paddingTop: "200px",
    },
    logo: {
        width: "200px",
        height: "200px",
    },
    welcome: {
        marginLeft: "auto", // Move the welcome text to the right
    },
});

class Header extends React.Component {
    render() {
      const { user, logout } = this.props; // Get user and logout from props
      return (
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1>School Dashboard</h1>
          {/* Conditional rendering based on isLoggedIn */}
          {user.isLoggedIn && (
            <div className={css(styles.welcome)}>
              Welcome {user.email} (
              <span id="logoutSection" onClick={logout}>
                logout
              </span>
              )
            </div>
          )}
        </div>
      );
    }
  }
  
export default connect(mapStateToProps, { logout })(Header);
