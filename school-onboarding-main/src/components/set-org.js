import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { upload } from '../utils/icons';
import useStyles from "./usestyle";
import Gifcontainer from "./gifcontainer";


export default function SetOrg (props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [schoolLogo, setSchoolLogo] = useState(null);
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

    const onSubmit = e => {
        e.preventDefault();
        //api call
        navigate('/dashboard/getstarted');
    };
    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} className={classes.grbg1}>
                <Gifcontainer />
            </Grid>

            <Grid item xs={6} className={classes.grbg2}>
                <Card className={classes.card}>
                    <CardContent>
                        <h2>Set up your organization</h2>
                        <form className={classes.form} onSubmit={onSubmit}>
                            <div className={classes.inputWraper}>
                                <label>Preferred Domain Name</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="domainname"
                                    required
                                    placeholder={'domainname'}
                                    onChange={onChange}
                                />
                                <p className={classes.domainplaceholder}>.gopedagogy.com</p>
                                <small>
                                    * Required (You can have both letters and numbers)
                                </small>
                            </div>
                            <div className={classes.inputWraper}>
                                <label>School Name</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="schoolName"
                                    required
                                    placeholder="Enter School Name"
                                    onChange={onChange}
                                />
                                <small>* Required</small>
                            </div>
                            <div className={classes.inputWraper}>
                                <input
                                    type="file"
                                    name="logo"
                                    id="upload-logo"
                                    ref={ref}
                                    placeholder="Upload Logo"
                                    onChange={e => setSchoolLogo(e.target.files)}
                                    hidden
                                />
                                <div className={classes.logoGrid}>
                                    <div>
                                        <div className={classes.inputWraper}>
                                            <label
                                                className={`${classes.input} ${classes.uploadBtn}`}
                                                for="upload-logo"
                                            >
                                                Upload Logo
                                            </label>
                                            <img
                                                className={classes.uploadIco}
                                                src={upload}
                                                alt="upload"
                                            />
                                            <small>
                                                * Max file size: 1mb, accepted: jpg, jpeg, png
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btnWraper}>
                                <Button className={classes.btn} type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
