import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';

import {fetchWordsByDictionary} from "../../actions";
import Words from "../Words";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";


const styles = theme => ({
	title: {
		marginBottom: theme.spacing.unit
	}
});

class Dictionary extends Component {

	componentDidMount() {
		const {match, dispatch} = this.props;
		dispatch(fetchWordsByDictionary(match.params.lang))
	}

	render() {
		const {words, classes} = this.props;
		return (
			<div>
				<Typography variant="title" align="center" className={classes.title}>
					Words:
				</Typography>
				<Words words={words}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		words: state.words
	};
}

export default withRouter(connect(
	mapStateToProps,
)(withStyles(styles)(Dictionary)));

