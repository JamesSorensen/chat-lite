import React from 'react';
import axios from 'axios';


function JoinBlock ({onLogin}) {
	const [roomId, setRoomId] = React.useState('');
	const [userName, setUserName] = React.useState('');
	const [isLoading, setLoading] = React.useState(false);
	const [isError, setError] = React.useState(false);

	const onEnter = async () => {
		if (!roomId) return setError('Enter the roomId');
		else if (!userName) return setError('Enter the username');
		else {
			const obj = {
				roomId,
				userName
			}
			setLoading(true);
			await axios.post('/rooms', obj);
			onLogin(obj);
		}
	};

	return (
		<div className="join-block">
			<div className="joined-error">{isError ? isError : ''}</div>
			<input type="text" placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)} />
			<input type="text" placeholder="User Name" value={userName} onChange={e => setUserName(e.target.value)}  />
			<button disabled={isLoading} onClick={onEnter} className="btn btn-success">
				{isLoading ? 'Loading' : 'Enter'}
			</button>
			
		</div>
	)
}

export default JoinBlock;