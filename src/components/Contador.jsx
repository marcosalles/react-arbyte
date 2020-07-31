import React from 'react';

export default class Contador extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contador: 0,
			incremento: 1,
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState((pState) => {
				return {
					contador: pState.contador + pState.incremento,
				};
			});
		}, 1000);
	}

	render() {
		return (
			<div onClick={() => {
				this.setState(pState => ({
					incremento: pState.incremento + 1,
				}));
			}}>
				Contador ({this.state.incremento})
				<Numero numero={this.state.contador} />
			</div>
		);
	}
}

function Numero(props) {
	return (
		<div>
			Numero: {props.numero}
		</div>
	)
}

