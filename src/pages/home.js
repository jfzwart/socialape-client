import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/Scream';
import Profile from '../components/Profile';
import PropTypes from 'prop-types';

class home extends React.Component {
    state = {
        screams: null
    };

    componentDidMount() {
        axios
            .get('/screams')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    screams: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => (
                <Scream key={scream.screamId} scream={scream} /> 
            )
            )
        ) : <p>Loading ....</p>

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
    data: PropTypes.object.isRequired
};

export default home;

// https://europe-west1-socialape-cfaf3.cloudfunctions.net/api 