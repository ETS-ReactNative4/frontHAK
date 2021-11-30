import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Box from '@mui/material/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import PodcastCard from "./PodcastCard";

import logo from '../../img/logo.png'

import HomeIcon from '@mui/icons-material/Home'; //Página Inicial
import LightbulbIcon from '@mui/icons-material/Lightbulb'; //Sugestões

import InfoIcon from '@mui/icons-material/Info'; //Dados da Empresa
import AddIcCallIcon from '@mui/icons-material/AddIcCall'; //Lista de Ramais
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; //Lista de E-mails
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'; //Normas e Políticas Internas
import DialerSipIcon from '@mui/icons-material/DialerSip'; //Operações do PABX

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; //Gestão de Pessoas
import WatchLaterIcon from '@mui/icons-material/WatchLater'; //Ocorrência de Ponto
import NewReleasesIcon from '@mui/icons-material/NewReleases'; //Ocorrência de Acidente
import FoodBankIcon from '@mui/icons-material/FoodBank'; //Portal Refeição
import ExtensionIcon from '@mui/icons-material/Extension'; //Area Administrativa

import { Button } from "@mui/material";


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",

	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: 'orange'
	},
	drawer: {
		flexShrink: 0,
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	toolbar: {
		...theme.mixins.toolbar,
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	logo: {
		marginLeft: '5%',
		maxWidth: '30%'
	},
	logoHorizontallyCenter: {
		position: 'fixed',
		left: '50%',
		top: '4%',
		transform: 'translate(-20%, -50%)',
	}
}));

export default function (props) {
	const classes = useStyles();
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	const [open, setOpen] = React.useState(false);

	const toggleDrawer = event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={toggleDrawer}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.logoHorizontallyCenter}>
						<img src={logo} className={classes.logo} />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant={isMdUp ? "permanent" : "temporary"}
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="left"
				open={open}
				onClose={toggleDrawer}
			>
				<div className={classes.toolbar} />

				<Divider />

				<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Página Inicial'} />
					</ListItem>
				</Link>

				<Link to='/app-sugestoes' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<LightbulbIcon />
						</ListItemIcon>
						<ListItemText primary={'Sugestões'} />
					</ListItem>
				</Link>

				<Divider />

				<Link to='/app-empresas' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={'Dados da Empresa'} />
					</ListItem>
				</Link>

				<Link to='/app-ramais' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<AddIcCallIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de Ramais'} />
					</ListItem>
				</Link>

				<Link to='/app-emails' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<AlternateEmailIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de Emails/Colab.'} />
					</ListItem>
				</Link>

				<Link to='/app-politicas' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<LocalPoliceIcon />
						</ListItemIcon>
						<ListItemText primary={'Políticas/Regras Internas'} />
					</ListItem>
				</Link>

				<Link to='/app-pabx' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<DialerSipIcon />
						</ListItemIcon>
						<ListItemText primary={'Operações do PABX'} />
					</ListItem>
				</Link>

				<Divider />

				<a onClick={() => { window.open('http://refeicao.feak.local/#!/') }}
					style={{ textDecoration: 'none', color: 'black', cursor: 'alias' }}>
					<ListItem>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						<ListItemText primary={'Portal de Refeições'} />
					</ListItem>
				</a>

				<a onClick={() => { window.open('http://ponto.feak.local/#!/') }}
					style={{ textDecoration: 'none', color: 'black', cursor: 'alias' }}>
					<ListItem >
						<ListItemIcon>
							<WatchLaterIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Ponto'} />
					</ListItem>
				</a>

				<a onClick={() => { window.open('http://acidente.feak.local/#!/') }}
					style={{ textDecoration: 'none', color: 'black', cursor: 'alias' }}>
					<ListItem >
						<ListItemIcon>
							<NewReleasesIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Acidente'} />
					</ListItem>
				</a>

				<a onClick={() => { window.open('http://gestaopessoas.feak.local/#!/') }}
					style={{ textDecoration: 'none', color: 'black', cursor: 'alias' }}>
					<ListItem >
						<ListItemIcon>
							<AssignmentIndIcon />
						</ListItemIcon>
						<ListItemText primary={'Gestão de Pessoas'} />
					</ListItem>
				</a>

				<Divider />

				<Link to='/app-login' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<ExtensionIcon />
						</ListItemIcon>
						<ListItemText primary={'Área Administrativa'} />
					</ListItem>
				</Link>

				<PodcastCard sx={{maxWidth: '90%'}} />
			</Drawer>
			<Box sx={{ flexGrow: 1, p: 3, marginY: '5%' }}>
				{props.corpo}
			</Box>
		</div >
	);
}
