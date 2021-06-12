import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {mainListItems} from "../NavbarItems";
import InputBase from "@material-ui/core/InputBase";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {STYLES} from "../STYLES";
import MainContent from "./MainContent";


const useStyles = STYLES;

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const entityProductInfo = {
        title: "Ben-U-Ron 500mg 20 Comprimidos",
        description: "Loren ipsum loren ipsum loren ipsum loren ipsum loren.",
        price: 6.6,
        image: "https://s1.kuantokusta.pt/img_upload/produtos_saudebeleza/191713_3_ben-u-ron-500mg-20-comprimidos.jpg",
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        CITO
                    </Typography>

                    <InputBase
                        color="primary"
                        placeholder="Procurar..."
                        classes={{root: classes.inputRoot, input: classes.inputInput}}
                        inputProps={{"aria-label": "search"}}/>

                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),}}
                    open={open}>

                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>

                <div>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemAvatar alignItems="flex-start">
                                <Avatar
                                    className={classes.large}
                                    alt="João Laranjo"
                                    src="https://i.imgur.com/jfMmkxG.png"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="João"
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" className={classes.inline}
                                                    color="textPrimary"></Typography>
                                        {"laranjo@mail.com"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </div>

                <Divider/>
                {<List>{mainListItems}</List>}
                <Divider/>
            </Drawer>
            <MainContent/>
        </div>
    );
}
