import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {Link} from "react-router-dom";

import {fetchDictionaries} from "../../actions"
import Paper from "@material-ui/core/Paper/Paper";


const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: "700px",
		margin: "0 auto",
		overflowX: 'auto',
		padding: "1px"
	},
	flex: {
		display: "flex"
	},
	link: {
		textDecoration: "none",
		width: "100%"
	},
	paper: {
		padding: theme.spacing.unit + "px"
	},
});

class Dictionaries extends Component {

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchDictionaries())
	}

	renderDictionaries = () => {
		const {dictionaries, classes} = this.props;

		return dictionaries && dictionaries.length ? dictionaries.map(item => {
			return (
				<ListItem key={item} button>
					<Link to={`/dictionary/${item}`} className={[classes.flex, classes.link].join(" ")}>
						<ListItemIcon>
							<LibraryBooksIcon/>
						</ListItemIcon>
						<ListItemText primary={item}/>
					</Link>
				</ListItem>
			)
		}) : (
			<div>No dicts :(</div>
		)
	};

	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<List component="nav">
						{this.renderDictionaries()}
					</List>
				</Paper>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		dictionaries: state.dictionaries
	};
}

export default withRouter(withStyles(styles)(connect(
	mapStateToProps,
)(Dictionaries)))
