import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import PostScream from './PostScream';
// import Notifications from './Notifications';
// MUI Stuff
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
class Navbar extends React.Component {
    render() {
        const { authenticated } = this.props
        return (
            <AppBar>
                <ToolBar className="nav-container">
                {authenticated ? (        
                    <Fragment>
                        <PostScream />
                        <Link to="/" >
                            <MyButton tip="Home!">
                                <HomeIcon />
                            </MyButton>
                        </Link>
                        {/* <Notifications /> */}
                    </Fragment>
                    ) : (
                    <Fragment>
                        <Button color="inherit" component={Link} to="/Login">Login</Button>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/Signup">Signup</Button>
                    </Fragment>
                    )}
                </ToolBar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})



export default connect(mapStateToProps)(Navbar);