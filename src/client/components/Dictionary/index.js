import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {fetchWordsByDictionary} from "../../actions";
import Words from "../Words";

class Dictionary extends Component {

	componentDidMount() {
		const {match, dispatch} = this.props;
		dispatch(fetchWordsByDictionary(match.params.lang))
	}

	render() {
		const {words} = this.props
		return (
			<Words words={words}/>
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
)(Dictionary));

