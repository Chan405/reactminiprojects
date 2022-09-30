import React from "react";
import useStyles from "./usestyle";
import { clockGif } from '../utils/constants';
import {Container} from "@material-ui/core";

const Gifcontainer = () => {
	const classes = useStyles();

	return(
		<Container>
            <h1 className={classes.title}>Pedagogy</h1>
            <div className={classes.gr1}>
                <img className={classes.clockGif} src={clockGif} alt="Clock" />
                <div className={classes.textWraper}>
                    <h2>
                        Just a few <br /> 
                        things to setup <br />
                        your account
                    </h2>
                    <p>
                        Set up your organization first to help you to get better experience
                    </p>
                </div>
            </div>
        </Container>
		)
}

export default Gifcontainer;