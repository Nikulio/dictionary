import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});


const Auth = (props) => {
	const { classes } = props;
	return (
		<div>
			<Paper className={classes.root} elevation={1}>
				<Typography variant="headline" component="h3">
					Auth in development
				</Typography>
				<Typography component="p">
					Hopefully, soon will be available as well as OAuth
				</Typography>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(Auth);
