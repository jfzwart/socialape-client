import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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
                // screamId,
                // likeCount, 
                // commentCount
            }
        } = this.props;

        return (
            <Card className={classes.card}>
                <CardMedia
                    image={userImage}
                    title="Profile Image"
                    className={classes.image} 
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5">{userHandle}</Typography>
                    <Typography variant="body1">{body}</Typography>
                    <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream);
