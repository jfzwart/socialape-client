import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';

const styles = (theme) => ({
    ...theme.spreadThis,
        homeButton: {
            color: 'white'
        }
    });
class Navbar extends React.Component {

    render() {
        const { authenticated, classes } = this.props
        return (
            <AppBar>
                <Toolbar className="nav-container">
                {authenticated ? (        
                    <Fragment >
                        <PostScream />
                        <Link to="/" >
                            <MyButton tip="Home!">
                                <HomeIcon className={classes.homeButton}/>
                            </MyButton>
                        </Link>
                        <Notifications />
                    </Fragment>
                    ) : (
                    <Fragment>
                        <Button color="inherit" component={Link} to="/Login">Login</Button>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/Signup">Signup</Button>
                    </Fragment>
                    )}
                </Toolbar>
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



export default connect(mapStateToProps)(withStyles(styles)(Navbar))