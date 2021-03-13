import React from 'react';
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';
import Grid from '@material-ui/core/Grid';
import Scream from '../components/Scream';
import Profile from '../components/Profile';
import PropTypes from 'prop-types';

class home extends React.Component {

    componentDidMount() {
        this.props.getScreams()
    }

    render() {
        const { screams, loading } = this.props.data;

        let recentScreamsMarkup = !loading ? (
            screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
        ) : (
        <p>Loading ....</p>
        );

        return (
        <div>
            <Grid container spacing={8}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile />
                </Grid>
            </Grid>
        </div>
        )
    }
}

home.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, { getScreams })(home);

// https://europe-west1-socialape-cfaf3.cloudfunctions.net/api 