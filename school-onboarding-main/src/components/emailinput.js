import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from "./usestyle";
import Gifcontainer from "./gifcontainer";

import { useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema= yup.object().shape({
    email: yup.string().label("Email").email().required()
})


export default function EmailInput (props) {

    const {register, handleSubmit, watch, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    }); 

    const email = watch('email');
    const isValid = email;

    const classes = useStyles();
    const navigate = useNavigate();

    const submitForm = (data, e) => {
        e.preventDefault();
        console.log(data);

        navigate("/verification");
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
                    <CardContent className={classes.centercontent}>
                        <h2 className={classes.setuptitle}>Set up your organization</h2>
                        <form 
                            className={classes.form} 
                            onSubmit={ handleSubmit(submitForm)}>

                            <div className={classes.inputWraper}>
                                <label>Email</label>
                                <input
                                    className={classes.input}
                                    type="email"
                                    name="schoolName"
                                    autoComplete="off"
                                    placeholder="Enter Your Email"
                                    onChange={onChange}
                                    {...register("email", 
                                    { required: "Required", })}
                                />
                                <small> *Required </small>
                            </div>
                           
                            <div className={classes.btnWraper}>
                                <Button 
                                className={`${!isValid} ? ${classes.emailinputbtn} : ${classes.btn}`} 
                                type="submit"
                                disabled={!isValid}
                                >
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
