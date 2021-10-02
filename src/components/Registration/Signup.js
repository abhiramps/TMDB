import React, { useState, useReducer, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ShowContext } from '../../Contexts/Contexts';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'blue',

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignUp = () => {
    const classes = useStyles();

    // const [value, setValue] = useState('female');
    // const handleGenderChange = (event) => {
    //     setValue(event.target.value);
    // };

    const initialState = {
        userName: "",
        email: "",
        password: "",
        gender: "female"
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'USERNAME':
                return { ...state, userName: action.payload.username }
            case 'EMAIL':
                return { ...state, email: action.payload.email }
            case 'PASSWORD':
                return { ...state, password: action.payload.password }
            case 'GENDER':
                return { ...state, gender: action.payload.gender }    
            case 'CLEAR':
                return { ...state, userName: '',email:'', password: '',gender:'' }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { SendSignUpCredentials } = useContext(ShowContext)
    const history = useHistory();
    const onHandleSubmit = (ev) => {
        ev.preventDefault()
        // console.log(state)
        SendSignUpCredentials(state.userName, state.email, state.password,state.gender,history)
        dispatch({ type: 'CLEAR' })
        
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToRegIcon style={{ fontSize: "3rem" }} />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate onSubmit={onHandleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="user name"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={state.userName}
                        onChange={(ev) => { dispatch({ type: 'USERNAME', payload: { username: ev.target.value } }) }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email id"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={state.email}
                        onChange={(ev) => { dispatch({ type: 'EMAIL', payload: { email: ev.target.value } }) }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={state.password}
                        onChange={(ev) => { dispatch({ type: 'PASSWORD', payload: { password: ev.target.value } }) }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"

                    />

                    <FormControl component="fieldset" style={{ marginTop: "2rem" }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={state.gender}
                            onChange={(ev) => { dispatch({ type: 'GENDER', payload: { gender: ev.target.value } }) }}
                            style={{ display: "flex", flexDirection: "row" }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign UP
                    </Button>

                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link to="signin" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>

            </Box>
        </Container>
    );
};

export default SignUp;