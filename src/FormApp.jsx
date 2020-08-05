import React from 'react';
import axios from 'axios';

class FormApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: '',
		};
	}

	changeValue = (event) => {
		const { value, name } = event.target;
		console.log(name);

		this.setState({ [name]: value });
		// if (name == 'email') {
		// 	this.setState({ email: value });
		// } else if (name == 'name') {
		// 	this.setState({ name: value });
		// } else if (name == 'password') {
		// 	this.setState({ password: value });
		// }
		// this.setState({ textValue: value });
	};
	
	render() {
		const inputs = [
			{ name: 'email', type: 'text', label: 'Email' },
			{ name: 'name', type: 'text', label: 'Nome completo' },
			{ name: 'password', type: 'password', label: 'Senha' },
		];
		console.log('state', this.state);
		return (
			<form style={{padding: 16, display: 'flex', flexDirection: 'column'}}>
				{inputs.map(({name, type, label}, index) => (
					<label>
						{label}
						<input
							name={name}
							type={type}
							value={this.state[name]}
							onChange={(event) => this.changeValue(event)}
						/>
					</label>
				))}
				<button >Cadastrar</button>
			</form>
		);
	}
};

export default FormApp;
