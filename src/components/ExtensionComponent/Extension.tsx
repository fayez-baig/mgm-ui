import React from 'react';

import { getExtStyles } from '../styles/getExtStyles';

const ExtensionComponent: React.FC = () => {
	return (
		<>
			<div className={getExtStyles(['steps'])}>
				<div
					className={getExtStyles(['step-item', 'is-completed', 'is-success'])}>
					<div className={getExtStyles(['step-marker'])}>
						<span className={getExtStyles(['icon'])}>
							<i className={getExtStyles(['fa', 'fa-check'])}></i>
						</span>
					</div>
					<div className={getExtStyles(['step-details'])}>
						<p className={getExtStyles(['step-title'])}>Step 1</p>
						<p>This is the first step of the process.</p>
					</div>
				</div>
				<div className={getExtStyles(['step-item', 'is-active'])}>
					<div className={getExtStyles(['step-marker'])}></div>
					<div className={getExtStyles(['step-details'])}>
						<p className={getExtStyles(['step-title'])}>Step 2</p>
						<p>
							This is the second step. You get here once you have completed the
							first step.
						</p>
					</div>
				</div>
			</div>

			<div className={getExtStyles(['timeline'])}>
				<header className={getExtStyles(['timeline-header'])}>
					<span className={getExtStyles(['tag', 'is-medium is-primary'])}>
						Start
					</span>
				</header>
				<div className={getExtStyles(['timeline-item'])}>
					<div className={getExtStyles(['timeline-marker'])}></div>
					<div className={getExtStyles(['timeline-content'])}>
						<p className={getExtStyles(['heading'])}>January 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<div className={getExtStyles(['timeline-item'])}>
					<div
						className={getExtStyles([
							'timeline-marker',
							'is-image',
							'is-32x32'
						])}>
						<img
							src='https://bulma.io/images/placeholders/32x32.png'
							alt='bulma'
						/>
					</div>
					<div className={getExtStyles(['timeline-content'])}>
						<p className={getExtStyles(['heading'])}>February 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<header className={getExtStyles(['timeline-header'])}>
					<span className={getExtStyles(['tag', 'is-primary'])}>2017</span>
				</header>
				<div className={getExtStyles(['timeline-item'])}>
					<div className={getExtStyles(['timeline-marker', 'is-icon'])}>
						<i className={getExtStyles(['fa', 'fa-flag'])}></i>
					</div>
					<div className={getExtStyles(['timeline-content'])}>
						<p className={getExtStyles(['heading'])}>March 2017</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<div className={getExtStyles(['timeline-header'])}>
					<span className={getExtStyles(['tag', 'is-medium', 'is-primary'])}>
						End
					</span>
				</div>
			</div>

			<hr />
		</>
	);
};

export default ExtensionComponent;
