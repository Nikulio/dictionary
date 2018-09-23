import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {addWordAction, editWordAction} from "../../actions";

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: "360px",
		margin: "0 auto"
	},
	textField: {
		width: "100%",
	},
	button: {
		width: "100%",
		marginTop: theme.spacing.unit
	},
	menu: {
		width: "100%",
	},
});

const languages = [
	{
		value: 'English',
		label: 'en',
	},
	{
		value: 'Russian',
		label: 'ru',
	},
	{
		value: 'German',
		label: 'de',
	},
	{
		value: 'French',
		label: 'fr',
	},
];

class AddWord extends Component {

	state = {
		from: "",
		language: "",
		to: ""
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	fromChange = e => {
		this.setState({
			from: e.target.value,
		});
	};

	toChange = e => {
		this.setState({
			to: e.target.value,
		});
	};

	submit = () => {
		const {dispatch, update, handleClose} = this.props;
		if (update && update.length > 0) {
			dispatch(editWordAction(this.state, update));
			handleClose();
		} else {
			dispatch(addWordAction(this.state));
		}
		this.setState({
			from: "",
			language: "",
			to: ""
		});
	};

	render() {
		const {classes} = this.props;
		const {from, to, language} = this.state;
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="word"
					label="Word"
					value={from}
					className={classes.textField}
					helperText="Type word"
					margin="normal"
					onChange={this.fromChange}
				/>
				<TextField
					id="language"
					select
					label="Language"
					className={classes.textField}
					value={this.state.language}
					onChange={this.handleChange('language')}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					helperText="Wished language"
					margin="normal"
				>
					{languages.map(option => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="translation"
					label="Translation"
					value={to}
					className={classes.textField}
					type="text"
					helperText="Type translation"
					onChange={this.toChange}
					margin="normal"
				/>
				<Button
					variant="contained"
					onClick={this.submit}
					disabled={!from.length || !language.length || !to.length}
					color="primary"
					className={classes.button}>
					Submit
				</Button>
			</form>
		);
	}
}

const mapStateToProps = (store) => ({
	store: store
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(AddWord)));
