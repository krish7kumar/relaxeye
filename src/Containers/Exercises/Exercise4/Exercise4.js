import React, { useState, useEffect } from 'react';
import '../common.css';
import { withRouter } from 'react-router-dom';
import Timer from '../../Timer/Timer';
import FullInstructions from '../../../Components/FullInstructions';

const Exercise4 = React.memo((props) => {
	const [ text, setText ] = useState(''),
		[ next, setNext ] = useState(false),
		[ start, setStart ] = useState(false),
		[ full, setFull ] = useState(false),
		[ timer, setTimer ] = useState(false),
		[ ecount, setEcount ] = useState(0);

	const timeOut = React.useRef(null);
	useEffect(() => {
		timeOut.current = setTimeout(() => {
			setText('Relax your shoulders. Rub your hands with little friction for 15 seconds until it get warm.');
			setEcount((prevState) => prevState + 1);

			timeOut.current = setTimeout(() => {
				setText(
					'Once the hands feel warm and nice, cover the eyes placing the heels of your hands on the cheekbones resting the palm on the brow bones and letting the fingertips rest on your skull.'
				);
				setEcount((prevState) => prevState + 1);

				timeOut.current = setTimeout(() => {
					setText(
						'Feel the warmth of the hands and darkness. Notice if you see any flashes of light. Let your breath be natural and smooth. When lights and the colors fade to black open your eyes into the darkness'
					);
					setEcount((prevState) => prevState + 1);

					timeOut.current = setTimeout(() => {
						setText('START!');
						setNext(true);
						setTimer(true);
						setStart(true);
					}, 7000);
				}, 7000);
			}, 5000);
		}, 1000);
		return () => {
			clearTimeout(timeOut.current);
		};
	}, []);

	const prevExercise = () => {
		props.history.goBack();
	};

	const restartExercise = () => {
		if (next) {
			props.history.replace('/exercises');
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

	const buttonName = next ? 'RESTART' : 'SKIP';

	return (
		<div className="Container">
			<div className="Exercise">
				<h1>Rub Rub</h1>
				<p>In a stable relaxed position</p>
				<div className="slide">
					{!next ? (
						<p>
							<span>{ecount}</span>/3
						</p>
					) : (
						<p>3/3</p>
					)}
				</div>
				<p className="Instruction">{text}</p>
			</div>
			{timer ? (
				<Timer minutes="1" seconds="0" />
			) : (
				<div
					style={{
						marginBottom: '16px',
						opacity: 0.5
					}}
				>
					Time Remaining: 1:00
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
			<button onClick={restartExercise}>{buttonName}</button>
			{full ? <FullInstructions number="4" /> : null}
		</div>
	);
});

export default withRouter(Exercise4);
