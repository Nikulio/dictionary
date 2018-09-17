import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Link} from "react-router-dom";

const styles = {
	root: {
		flexGrow: 1,
		marginBottom: "40px"
	},
	flex: {
		flexGrow: 1,
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
};

const options = [
	'None',
	'Working',
	'On',
	'It',
	'Close',
	'Or scroll',
	'As you like',
	'See ya!',
];
const ITEM_HEIGHT = 48;


class Header extends Component {
	state = {
		menuIsOpen: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const {classes} = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} onClick={this.handleClick} color="inherit" aria-label="Menu">
							<MenuIcon/>
						</IconButton>
						<Menu
							id="long-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={this.handleClose}
							PaperProps={{
								style: {
									maxHeight: ITEM_HEIGHT * 4.5,
									width: 200,
								},
							}}
						>
							{options.map(option => (
								<MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
									{option}
								</MenuItem>
							))}
						</Menu>
						<Link to="/" className={[classes.flex, classes.link].join(" ")}>
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
