import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LikeButton from './LikeButton';
import DeleteScream from './DeleteScream';
// import ChatIcon from '@material-ui/icons/Chat';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
};
class Scream extends React.Component {
    render() {
        dayjs.extend(relativeTime);
        const { 
            classes,
            scream: { 
                body,
                createdAt,
                userImage,
                userHandle,
                screamId,
                likeCount, 
                // commentCount
            },
            user: {
                authenticated,
                credentials: { handle }
            }
        } = this.props;

        const deleteButton = authenticated && userHandle === handle ? (
            <DeleteScream screamId={screamId} />
            ) : null;
        
        return (
            <Card className={classes.card}>
                <CardMedia
                    image={userImage}
                    title="Profile Image"
                    className={classes.image} 
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5">{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    <Typography variant="body1">{body}</Typography>
                    {deleteButton}
                    <LikeButton screamId={screamId} />
                    <span>{likeCount} Likes</span>
                </CardContent>
            </Card>
        )
    }
}

Scream.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    scream: PropTypes.object.isRequired,
    openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
    user: state.user 
})


export default connect(mapStateToProps)(withStyles(styles)(Scream));
