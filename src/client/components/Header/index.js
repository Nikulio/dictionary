import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import BookIcon from '@material-ui/icons/CollectionsBookmark';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from "react-router-dom";

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginBottom: "40px"
	},
	flex: {
		flexGrow: 1,
		display: "flex"
	},
	icon: {
		marginRight: theme.spacing.unit
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	link: {
		textDecoration: "none",
		color: "#fff"
	},
	loginButton: {
		marginLeft: "auto"
	}
});

class Header extends Component {

	render() {
		const {classes} = this.props;
		return (
				<div className={classes.root}>
					<AppBar position="static">
						<Toolbar>
							<Link to="/" className={[classes.flex, classes.link].join(" ")}>
								<BookIcon className={classes.icon}/>
								<Typography variant="title" color="inherit" className={classes.flex}>
									Dictionary - remember everything!
								</Typography>
							</Link>
							<Link to="/login" className={classes.link}>
								<Button color="inherit">Login</Button>
							</Link>
						</Toolbar>
					</AppBar>
				</div>
		);
	}
}

export default withStyles(styles)(Header);
