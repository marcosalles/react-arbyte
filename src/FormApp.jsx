import React from 'react';
import axios from 'axios';

class FormApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: null,
		};

		console.log('CONSTRUCTOR');
	}

	componentDidMount() {
		console.log('DID MOUNT');
	}

	componentDidUpdate() {
		console.log('DID UPDATE');
	}

	componentWillUnmount() {
		console.log('WILL UNMOUT');
	}

	saveEmail = (event) => {
		const emailValue = event.target.value;
		console.log('Salvando email', emailValue);
		this.setState(() => {
			return { email: emailValue };
		});
	}

	signUp = () => {
		const { email } = this.state;
		axios.post('http://localhost:8080/signup', { email })
			.then(response => {
				console.log(response.data);
			})
			.catch(error => console.log(error.message));
	}

	render() {
		console.log('RENDER');
		return (
			<div style={{padding: 16}}>
				<input onChange={this.saveEmail} />
				<button onClick={this.signUp} >Cadastrar</button>
			</div>
		);
	}
};

export default FormApp;
