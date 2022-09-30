import React, {useState} from "react";
const Keyboard = ({ kbclass, btnclick }) => {

	const [showkeyboard, setshowkeyboard] = useState(false);
		
	return (
		
		<div className={kbclass}>
			<div className="keyboard-row">
				<button onClick={() => btnclick(1)}> 1 </button>
				<button onClick={() => btnclick(2)}> 2 </button>
				<button onClick={() => btnclick(3)}> 3 </button>
			</div>

			<div className="keyboard-row">
				<button onClick={() => btnclick(4)}> 4 </button>
				<button onClick={() => btnclick(5)}> 5 </button>
				<button onClick={() => btnclick(6)}> 6 </button>
			</div>

			<div className="keyboard-row">
				<button onClick={() => btnclick(7)}> 7 </button>
				<button onClick={() => btnclick(8)}> 8 </button>
				<button onClick={() => btnclick(9)}> 9 </button>
			</div>

			<div className="keyboard-row center">
				<button onClick={() => btnclick(0)}> 0 </button>	
			</div>
		</div>
		)
}
export default Keyboard;