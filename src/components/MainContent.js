import Container from "@material-ui/core/Container";
import {Route, Switch} from "react-router-dom";
import SpecificEntityPageContent from "./SpecificEntityPageContent";
import CheckoutComponent from "../checkout/CheckoutComponent";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";
import React from "react";
import {STYLES} from "../STYLES";

const useStyles = STYLES;

export default function MainContent() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <Container className={classes.container}>

                <Switch>
                    <Route exact path="/" component={SpecificEntityPageContent}/>
                    <Route exact path="/searchResult" component={SpecificEntityPageContent}/>
                    <Route exact path="/checkout/" component={CheckoutComponent}/>
                    <Route path="/pharmacy/:pharmacyId" component={SpecificEntityPageContent}/>
                </Switch>

                <Box pt={4}>
                    <Copyright/>
                </Box>

            </Container>
        </main>
    )
}