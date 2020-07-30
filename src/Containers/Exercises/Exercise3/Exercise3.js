import React, { useState, useEffect } from 'react';
import '../common.css';
import { withRouter } from 'react-router-dom';
import Timer from '../../Timer/Timer';
import FullInstructions from '../../../Components/FullInstructions';

const Exercise3 = React.memo((props) => {
	const [ text, setText ] = useState(''),
		[ next, setNext ] = useState(false),
		[ start, setStart ] = useState(false),
		[ full, setFull ] = useState(false),
		[ timer, setTimer ] = useState(false),
		[ ecount, setEcount ] = useState(0);

	const timeOut = React.useRef(null);
	useEffect(() => {
		timeOut.current = setTimeout(() => {
			setText(
				'Hold your two index fingers horizontally opposite with 2 inches gap in between also about 8 inches front of your face and eye level.'
			);
			setEcount((prevState) => prevState + 1);

			timeOut.current = setTimeout(() => {
				setText(
					'Look across the room, with aware of your fingers, you will see a little hotdog in between your fingers.'
				);
				setEcount((prevState) => prevState + 1);

				timeOut.current = setTimeout(() => {
					setText('The hotdog will disappear once you focus on it.');
					setEcount((prevState) => prevState + 1);

					timeOut.current = setTimeout(() => {
						setText('Repeat for 10 times, 1 breath across the room and 1 breath getting rid off hotdog.');
						setEcount((prevState) => prevState + 1);

						timeOut.current = setTimeout(() => {
							setText('START!');
							setNext(true);
							setStart(true);
							setTimer(true);
						}, 4000);
					}, 3000);
				}, 5000);
			}, 5000);
		}, 1000);
		return () => {
			clearTimeout(timeOut.current);
		};
	}, []);

	const nextExercise = () => {
		if (next) {
			props.history.push('/exercises/4');
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
				<h1>Hotdog</h1>
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

			{full ? <FullInstructions number="3" /> : null}
		</div>
	);
});

export default withRouter(Exercise3);
