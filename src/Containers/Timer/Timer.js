import React, { Component } from 'react';
import Audio from './10-sec-count.mp3';
import { Howl } from 'howler';

class Timer extends Component {
	minutes = this.props.minutes === '0' ? 0 : this.props.minutes;
	seconds = this.props.seconds === '0' ? 0 : this.props.seconds;
	state = {
		minutes: this.minutes,
		seconds: this.seconds,
		audio: false
	};

	sound = new Howl({
		src: Audio
	});

	componentDidMount() {
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state;

			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}));
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval);
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59
					}));
				}
			}
			if (seconds === 11) {
				this.sound.play();
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
		this.sound.stop();
	}

	render() {
		const { minutes, seconds } = this.state;

		return (
			<div>
				{minutes === 0 && seconds === 0 ? (
					<p>Patience level 100. Good! :)</p>
				) : (
					<p>
						Time Remaining:{' '}
						<strong>
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</strong>
					</p>
				)}
			</div>
		);
	}
}

export default Timer;
