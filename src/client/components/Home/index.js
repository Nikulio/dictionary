import React, {Component} from 'react';
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BookIcon from '@material-ui/icons/Book';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Words from "../Words";
import {fetchAllWordsAction} from "../../actions";


const styles = theme => ({
	root: {
		display: "block"
	},
	wrapper: {
		width: '100%',
		margin: "20px auto",
		maxWidth: 360,
	},
	nav: {
		backgroundColor: theme.palette.background.paper
	},
	link: {
		display: "flex",
		width: "100%",
		textDecoration: "none"
	}
});

class Home extends Component {

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchAllWordsAction())
	}

	render() {
		const {classes, words} = this.props;
		return (
			<div className={classes.root}>
				<List component="nav" className={classes.wrapper}>
					<ListItem button>
						<Link to="/add-word" className={classes.link}>
							<ListItemIcon>
								<AddIcon/>
							</ListItemIcon>
							<ListItemText primary="Add translation"/>
						</Link>
					</ListItem>
					<Divider/>
					<ListItem button>
						<Link to="/dictionaries" className={classes.link}>
							<ListItemIcon>
								<BookIcon/>
							</ListItemIcon>
							<ListItemText primary="View dictionaries"/>
						</Link>
					</ListItem>
				</List>
				<Typography variant="title" align="center" className={classes.wrapper}>
					Recent words:
				</Typography>
				<Words words={words}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	words: state.words
})


export default connect(mapStateToProps)(withStyles(styles)(Home));
