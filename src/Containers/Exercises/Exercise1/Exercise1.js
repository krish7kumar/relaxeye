import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../common.css';
import Timer from '../../Timer/Timer';
import FullInstructions from '../../../Components/FullInstructions';

const Exercise1 = React.memo((props) => {
	const [ text, setText ] = useState(null);
	const [ next, setNext ] = useState(false);
	const [ start, setStart ] = useState(false);
	const [ full, setFull ] = useState(false);
	const [ timer, setTimer ] = useState(false);
	const [ ecount, setEcount ] = useState(0);

	const timeOut = React.useRef(null);

	useEffect(() => {
		timeOut.current = setTimeout(() => {
			setText('Move your eyes up and down for 5 breaths');
			setEcount((prevState) => prevState + 1);

			timeOut.current = setTimeout(() => {
				setText('Move your eyes left and right for 5 breaths');
				setEcount((prevState) => prevState + 1);

				timeOut.current = setTimeout(() => {
					setText('Move your eyes diagonally from left to right for 5 breaths');
					setEcount((prevState) => prevState + 1);

					timeOut.current = setTimeout(() => {
						setText('Move your eyes diagonally from right to left for 5 breaths');
						setEcount((prevState) => prevState + 1);

						timeOut.current = setTimeout(() => {
							setText('START!');
							setNext(true);
							setStart(true);
							setTimer(true);
						}, 3000);
					}, 3000);
				}, 3000);
			}, 3000);
		}, 1000);
		return () => {
			clearTimeout(timeOut.current);
		};
	}, []);

	const nextExercise = () => {
		if (next) {
			props.history.push('/exercises/2');
		} else {
			clearTimeout(timeOut.current);
			setText('START!');
			setNext(true);
			setStart(true);
		}
	};

	const fullInstructions = () => {
		setFull((prevState) => !prevState);
	};

	const timerOn = () => {
		setTimer((prevState) => !prevState);
	};

	const buttonName = next ? 'NEXT' : 'SKIP';

	return (
		<div className="Container">
			<div className="Exercise">
				<h1>8 Directions</h1>
				<p>In a stable relaxed position</p>
				<div className="slide">
					{!next ? (
						<p>
							<span>{ecount}</span>/4
						</p>
					) : (
						<p>4/4</p>
					)}
				</div>
				<p className="Instruction">{text}</p>
			</div>
			{timer ? (
				<Timer minutes="0" seconds="45" />
			) : (
				<div
					style={{
						marginBottom: '16px',
						opacity: 0.5
					}}
				>
					Time Remaining: 0:45
				</div>
			)}

			<button disabled={!full && !start} onClick={timerOn}>
				{timer ? 'Reset Timer' : 'Start Timer'}
			</button>
			<br />
			<button
				disabled={!next}
				style={{
					margin: '10px auto'
				}}
				onClick={fullInstructions}
			>
				Full Instructions
			</button>
			<button onClick={nextExercise}>{buttonName}</button>
			{full ? <FullInstructions number="1" /> : null}
		</div>
	);
});

export default withRouter(Exercise1);
