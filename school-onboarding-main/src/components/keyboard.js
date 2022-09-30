import React, {useState} from "react";
import useStyles from "./usestyle";

const Keyboard = ({  btnclick }) => {

	//const [showkeyboard, setshowkeyboard] = useState(false);
	const classes = useStyles();
		
	return (
		
		<div className={classes.keyboardshow}>
			<div className={classes.keyboardrow}>
				<button onClick={() => btnclick(1)} className={classes.numkeys}> 1 </button>
				<button onClick={() => btnclick(2)} className={classes.numkeys}> 2 </button>
				<button onClick={() => btnclick(3)} className={classes.numkeys}> 3 </button>
			</div>

			<div className={classes.keyboardrow}>
				<button onClick={() => btnclick(4)} className={classes.numkeys}> 4 </button>
				<button onClick={() => btnclick(5)} className={classes.numkeys}> 5 </button>
				<button onClick={() => btnclick(6)} className={classes.numkeys}> 6 </button>
			</div>

			<div className={classes.keyboardrow}>
				<button onClick={() => btnclick(7)} className={classes.numkeys}> 7 </button>
				<button onClick={() => btnclick(8)} className={classes.numkeys}> 8 </button>
				<button onClick={() => btnclick(9)} className={classes.numkeys}> 9 </button>
			</div>

			<div className={classes.keyboardrow}>
				<button onClick={() => btnclick(0)} className={classes.numkeys}> 0 </button>	
			</div>
		</div>
		)
}
export default Keyboard;