import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import red from '@material-ui/core/colors/red';

import styles from "./index.css";

class ErrorDialog extends React.Component {
	handleClose = () => {
		this.props.onClose();
	};

	render() {
		const {...other} = this.props;
		return (
				<Dialog onClose={this.handleClose} {...other}>
					<DialogTitle>Set backup account</DialogTitle>
				</Dialog>
		);
	}
}

class Error extends React.Component {
	state = {
		open: false,
	};

	handleClose = () => {
		this.setState({
			open: false
		});
	};

	render() {
		const {error} = this.props;
		const status = !!(error && error.length > 0);
		return (
				<div>
					<Dialog onClose={this.handleClose} open={status}>
						<DialogTitle>
							<span style={{color: red[600]}}>
								Error is in the house!
							</span>
						</DialogTitle>
						<DialogContent>
							<DialogContentText>{error}</DialogContentText>
							<Button
									className={styles.button}
									variant="contained"
									color="secondary"
									onClick={() => location.reload()}
							>
								Reload page
							</Button>
						</DialogContent>
					</Dialog>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	error: state.error
})

export default connect(mapStateToProps)(Error);
