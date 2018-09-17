import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


import image from "../../../../images/not_found.jpg";

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: "700px",
		margin: "0 auto",
		overflowX: 'auto',
		padding: "1px"
	},
	paper: {
		padding: theme.spacing.unit + "px"
	},
	card: {
		maxWidth: 345,
		margin: "0 auto"
	},
	media: {
		height: 200,
	},
	button: {
		margin: "0 auto",
		textDecoration: "none"
	}
});

class Words extends Component {

	state = {
		headers: ["from", "language", "to"]
	};

	render() {
		const {classes, words} = this.props;
		const {headers} = this.state;
		return (
			<div className={classes.root}>
				{words.length > 0 ? (
					<Paper className={classes.paper}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									{headers && headers.map(name => {
										return (
											<TableCell key={name}>{name}</TableCell>
										)
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								{words && words.map(row => {
									return (
										<TableRow key={row._id}>
											<TableCell>{row.from}</TableCell>
											<TableCell>{row.language}</TableCell>
											<TableCell>{row.to}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</Paper>
				) : (
					<Card className={classes.card}>
						<CardMedia
							className={classes.media}
							image={image}
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="headline" component="h2" align="center">
								No words :(
							</Typography>
							<Typography component="p" align="center">
								Create your first one!
							</Typography>
						</CardContent>
						<CardActions>
							<Link to="/add-word" className={classes.button}>
								<Button size="small" color="secondary" variant="contained">
									Create your's first one!
								</Button>
							</Link>
						</CardActions>
					</Card>
				)}
			</div>

		);
	}
}

export default withStyles(styles)(Words);

