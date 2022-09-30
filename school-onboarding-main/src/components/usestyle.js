import {makeStyles} from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    root: {
        background:
            ' -webkit-linear-gradient(10deg, rgb(251, 252, 255) 0%, rgb(208, 213, 238) 40%)',
        height: '100vh',
        width: '100vw',
    },
    title: {
        color: '#3C50E0',
        fontWeight: '500',
    },
    setuptitle: {
        textAlign: 'center',
    },
    gr1: {
        textAlign: 'center',
        margin: 'auto',
        marginTop: '6rem',
        width: '60%',
    },
    textWraper: {
        textAlign: 'left',
        '& h2': {
            fontSize: '35px',
            color: 'black',
        },
        '& p': {
            fontSize: '20px',
            fontWeight: '500',
            color: 'black',
        },
    },
    card: {
        background: '#fff',
        height: '100vh',
        width: '100%',
        borderRadius: '39px',
        
        textAlign: 'center',
        overflow: 'auto',
        position: 'relative',
        //display: 'flex',
        //alignItems: 'center',
        // justifyContent: 'center',
        '& h2': {
            fontSize: '30px',
        },
        '& label': {
            fontSize: '16px',
            fontWeight: '500',
            display: 'block',
            textAlign: 'left',
            marginBottom: '0.5rem',
        },
    },

    centercard: {
        background: '#fff',
        height: '100vh',
        width: '100%',
        borderRadius: '39px',
        
        textAlign: 'center',
        overflow: 'auto',
        //display: 'flex',
        //alignItems: 'center',
        // justifyContent: 'center',
        '& h2': {
            fontSize: '30px',
        },
        '& label': {
            fontSize: '16px',
            fontWeight: '500',
            display: 'block',
            textAlign: 'left',
            marginBottom: '0.5rem',
        },
    },
    centercontent: {
        height: '50%',
        marginTop: '20%',
    },

    input: {
        display: 'block',
        borderRadius: '11px',
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        color: 'black',
        width: '90%',
        marginBottom: '10px',
        fontSize: 14,
        padding: '10px 26px 10px 12px',
        height: '30px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    inputWraper: {
        position: 'relative',
        '& small': {
            paddingBottom: '15px',
            paddingTop: '5px',
            display: 'block',
            color: '#6D6D93',
        },
    },
    form: {
        width: '70%',
        margin: 'auto',
        paddingTop: '2rem',
        textAlign: 'left',
    },
    btn: {
        background:
            'linear-gradient(90deg, #A135FB 0%, #3C50E0 100%) 0% 0% no-repeat padding-box',
        width: '327px',
        height: '63px',
        borderRadius: '5px',
        fontSize: '20px',
        textTransform: 'capitalize',
        color: '#fff',
        fontWeight: '300',
        marginTop: '5px',
    },
    fwbtn: {
        background:
            'linear-gradient(90deg, #A135FB 0%, #3C50E0 100%) 0% 0% no-repeat padding-box',
        width: '61%',
        height: '60px',
        borderRadius: '5px',
        fontSize: '20px',
        textTransform: 'capitalize',
        color: '#fff',
        fontWeight: '300',
        marginTop: '5px',
        marginLeft: '25px',
    },
    btnWraper: {
        textAlign: 'center',
        marginTop: '10px',
    },
    inputGrid: {
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        width: '100%',
        '& input': {
            width: '70%',
        },
        '& select': {
            marginLeft: '30px',
            height: '52px',
            color: '#6D6D93',
        },
    },
    uploadBtn: {
        color: '#6D6D93',
        fontSize: '16px !important',
        fontWeight: '400 !important',
        textAlign: 'center !important',
        cursor: 'pointer',
        paddingTop: '13px',
        paddingBottom: '8px',
    },
    uploadIco: {
        position: 'absolute',
        top: '12px',
        height: '25px',
        left: '25px',
    },
    clockGif: {
        height: '200px',
    },
    grbg1: {
        background:
            ' -webkit-linear-gradient(10deg, rgb(251, 252, 255) 0%, rgb(208, 213, 238) 60%)',
    },
    grbg2: {
        background:
            ' -webkit-linear-gradient(142deg, rgb(251, 252, 255) 0%, rgb(208, 213, 238) 40%)',
    },
    domainplaceholder: {
        position: 'absolute',
        fontSize: 14,
        top: '32px',
        right: '25px',
        color: '#6D6D93',
    },
    logoGrid: {
        display: 'grid',
        gridTemplateColumns: '100%',
        '& div': {
            marginRight: '11px',
            position: 'relative',
        },
    },
    previewDiv: {
        border: '1px solid #ced4da',
        padding: '10px',
        borderRadius: '11px',
    },
    schoolLogo: {
        height: '100px',
        width: '100px',
        objectFit: 'cover',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    logoCancel: {
        position: 'absolute',
        top: '2px',
        right: '10px',
        color: 'red',
        fontSize: '16px',
        cursor: 'pointer',
    },
    verifylabel: {
        width: '60%',
        display: 'block',
        marginTop: '20px',
        marginLeft: '22%',
        fontSize: '16px',
        fontWeight: '500',
    },

    keyboardshow: {
        width: '100%',
        backgroundColor: "transparent",
        padding: '10px 0',
        
        marginTop: '10px',
    },

    numkeys: {
        fontSize: '30px',
        padding: '12px 26px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        //border: 'none',
        // boxShadow: '3px 5px 10px #bbb',
        '&:hover':{
            border: '1px solid #555'
        }
    },

    keyboardrow: {
        margin: '0 auto', 
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
}));
export default useStyles;