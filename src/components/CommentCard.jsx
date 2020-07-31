import React from 'react';

class CommentCardClass extends React.Component {
	render() {
		const { avatarUrl, comment, userName } = this.props;
		return (
			<div style={styles.wrapper}>
				<img src={avatarUrl}/>
				<span style={styles.text} className={'text comment'}>{comment}</span>
				<span style={styles.text} className={'text username'}>{userName}</span>
			</div>
		);
	}
}

function CommentCardFunction(props) {
	const { avatarUrl, comment, userName } = props;
	return (
		<div style={styles.wrapper}>
			<img src={avatarUrl}/>
			<span style={styles.text} className={'text comment'}>{comment}</span>
			<span style={styles.text} className={'text username'}>{userName}</span>
		</div>
	);
}

const styles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		padding: 24,
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 800
	},
};

export {
	CommentCardFunction,
	CommentCardClass,
};
