import React from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./index.css";


const Preload = ({preload}) => {
	return (
			<div className={[styles.preloadWrapper, preload ? styles.visible : ""].join(" ")}>
				<CircularProgress color="secondary" size={50}/>
			</div>
	);
}

const mapStateToProps = state => ({
	preload: state.preload
})

export default connect(
		mapStateToProps,
)(Preload);
