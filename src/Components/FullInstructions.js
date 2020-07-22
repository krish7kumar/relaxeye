import React from 'react';

const fullInstructions = React.memo((props) => {
	switch (props.number) {
		case '1':
			return (
				<div className="FullInstruction">
					<h3>Full Instruction</h3>
					<ol className="Ol">
						<li>Move your eyes up and down for 5 breaths</li>
						<li>Move your eyes left and right for 5 breaths</li>
						<li>Move your eyes diagonally from left to right for 5 breaths</li>
						<li>Move your eyes diagonally from right to left for 5 breaths</li>
					</ol>
				</div>
			);
		case '2':
			return (
				<div className="FullInstruction">
					<h3>Full Instruction</h3>
					<ol className="Ol">
						<li>Move your eyes in the shape of figure '8'.</li>
						<li>Repeat this for 5 breaths</li>
					</ol>
				</div>
			);
		case '3':
			return (
				<div className="FullInstruction">
					<h3>Full Instruction</h3>
					<ol className="Ol">
						<li>
							Hold your two index fingers horizontally opposite with 2 inches gap in between also about 8
							inches front of your face and eye level.
						</li>
						<li>
							Look across the room, with aware of your fingers, you will see a little hotdog in between
							your fingers.
						</li>
						<li>The hotdog will disappear once you focus on it.</li>
						<li>Repeat for 10 times, 1 breath across the room and 1 breath getting rid off hotdog.</li>
					</ol>
				</div>
			);
		case '4':
			return (
				<div className="FullInstruction">
					<h3>Full Instruction</h3>
					<ol className="Ol">
						<li>
							Relax your shoulders. Rub your hands with little friction for 15 seconds until it get warm
						</li>
						<li>
							Once the hands feel warm and nice, cover the eyes placing the heels of your hands on the
							cheekbones resting the palm on the brow bones and letting the fingertips rest on your skull.
						</li>
						<li>
							Feel the warmth of the hands and darkness. Notice if you see any flashes of light. Let your
							breath be natural and smooth. When lights and the colors fade to black open your eyes into
							the darkness
						</li>
					</ol>
				</div>
			);
		default:
			return 'NO';
	}
});

export default fullInstructions;
