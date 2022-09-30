import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { useRef, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import useStyles from "./usestyle";
import Gifcontainer from "./gifcontainer";
import Otpinput from "./otpinput"

export default function Verify (props) {

    const classes = useStyles();
    const navigate = useNavigate();

    const submitForm = (data) => {
        console.log(data);
     	navigate("/setuporg");   
    }
    
    const ref = useRef();

    const [formData, setFormData] = useState({
        domain: '',
        schoolName: '',
    });
    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // const onSubmit = e => {
    //     e.preventDefault();
    //     //api call
    //     navigate('/dashboard/getstarted');
    // };
    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} className={classes.grbg1}>
                <Gifcontainer />
            </Grid>
            
            <Grid item xs={6} className={classes.grbg2}>
                <Card className={classes.centercard}>
                    <CardContent className={classes.content}>
                        <h2 className={classes.setuptitle}>Set up your organization</h2>

                        <div className={classes.floatleft}>
                        <label className={classes.verifylabel}> Enter the OTP code we sent to your email</label>
                        <Otpinput />
                        <div className={classes.btnWraper}>
                                <Button 
                                	className={classes.fwbtn} 
                                	type="submit"
                                	onClick={submitForm}>
                                    Verify
                                </Button>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}