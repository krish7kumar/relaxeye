import React, { useState, useEffect } from 'react';
import '../common.css';
import { withRouter } from 'react-router-dom';
import Timer from '../../Timer/Timer';
import FullInstructions from '../../../Components/FullInstructions';

const Exercise2 = React.memo((props) => {
	const [ text, setText ] = useState('');
	const [ next, setNext ] = useState(false);
	const [ start, setStart ] = useState(false);
	const [ full, setFull ] = useState(false);
	const [ timer, setTimer ] = useState(false);
	const [ ecount, setEcount ] = useState(0);

	const timeOut = React.useRef(null);
	useEffect(() => {
		timeOut.current = setTimeout(() => {
			setText("Move your eyes in the shape of figure '8'. Repeat this for 5 breaths");
			setEcount((prevState) => prevState + 1);
			timeOut.current = setTimeout(() => {
				setText('START!');
				setNext(true);
				setStart(true);
				setTimer(true);
			}, 4000);
		}, 1000);
		return () => {
			clearTimeout(timeOut.current);
		};
	}, []);

	const nextExercise = () => {
		if (next) {
			props.history.push('/exercises/3');
		} else {
			clearTimeout(timeOut.current);
			setText('START!');
			setNext(true);
			setStart(true);
		}
	};

	const prevExercise = () => {
		props.history.goBack();
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
				<h1>Figure 8</h1>
				<p>In a stable relaxed position</p>
				<div className="slide">
					{!next ? (
						<p>
							<span>{ecount}</span>/1
						</p>
					) : (
						<p>1/1</p>
					)}
				</div>
				<p className="Instruction">{text}</p>
			</div>
			{timer ? (
				<Timer minutes="0" seconds="30" />
			) : (
				<div
					style={{
						marginBottom: '16px',
						opacity: 0.5
					}}
				>
					Time Remaining: 0:30
				</div>
			)}
			<button disabled={!full && !start} onClick={timerOn}>
				{timer ? 'Reset Timer' : 'Start Timer'}
			</button>
			<button
				disabled={!next}
				onClick={fullInstructions}
				style={{
					margin: '10px auto'
				}}
			>
				Full Instructions
			</button>
			<br />
			<button onClick={prevExercise}>BACK</button>
			<button onClick={nextExercise}>{buttonName}</button>

			{full ? <FullInstructions number="2" /> : null}
		</div>
	);
});

export default withRouter(Exercise2);
