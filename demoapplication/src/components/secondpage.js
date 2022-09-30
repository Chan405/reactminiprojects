import React from "react";
import {Link} from "react-router-dom";
import Keyboard from "./keyboard";


const CODE_LENGTH = new Array(6).fill(0);
// const navigate = useNavigate();

class Secondpage extends React.Component {

	input = React.createRef();
	
	state = {
    value: "",
    kbclass: "keyboard",
    focused: false,
  	};


  	handleClick = () => {
  	 this.input.current.focus();
  	 this.state.kbclass = "keyboard show";
  	};

	handleFocus = () => { this.setState({ focused: true })};
	handleBlur = () => { this.setState({ focused: false})};

	handlekeyboard = () => { 
		if(this.state.focused){
			this.setState({ showkeyboard: true});
		}
	}

	handleChange = (e) => {
  		const value = e.target.value;

  		this.setState((state) => {
    		if (state.value.length >= CODE_LENGTH.length) return null;
    		
    		return {
     		 value: (state.value + value).slice(0, CODE_LENGTH.length),
    		};
  		});
	};


	handleKeyUp = (e) => {
  		if (e.key === "Backspace") {
    		this.setState((state) => {
      			return { value: state.value.slice(0, state.value.length - 1),};
    		});
  		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.value);

		//if(!(this.state.value)) return;
		// useNavigate("/setuporganization");
	}

	btnclick = (num) => {
		console.log(num, typeof num);
		this.setState((state) => {
      			return { value: state.value+ num};
    		});
	}

	render() {
		const { value , focused} = this.state;
    	const values = value.split("");

    	const selectedIndex = values.length < CODE_LENGTH.length 
    							? values.length : CODE_LENGTH.length - 1;

    	const hideInput = !(values.length < CODE_LENGTH.length);

		return(
		<div className="verify-container">
		<div>
    		<p className="title"> Enter the OTP code we sent to your email </p>
			<div className="wrap" onClick={this.handleClick}>
				<form onSubmit={this.handleSubmit}>
				<input
				type="number"
   				value=""
   				ref={this.input}
   				className="secondpage-input"
    			ref={this.input}
   				onFocus={this.handleFocus}
    			onBlur={this.handleBlur}
    			onChange= {this.handleChange}
    			onKeyUp={this.handleKeyUp}
    			style={{
    				left: `${selectedIndex * 60}px`,
    				opacity: hideInput ? 0 : 1,
    			}} />
    			</form>

        {
          	CODE_LENGTH.map((v, index) => {
		const selected = values.length === index;
    	const filled = values.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1;

            return <div key={index} className="display"> 
            		{values[index]} 
            		{(selected || filled) && focused && <div className="shadows" />}
            		</div>;
          	})
        }

        </div>

        <Link to="/setuporganization">
        	<button type="submit" className="verify btn"> Verify </button>
        </Link>

        <Keyboard 
        	kbclass={this.state.kbclass} 
        	btnclick={this.btnclick}
        />
        </div>
		</div>
		)
		
	}
}
export default Secondpage;