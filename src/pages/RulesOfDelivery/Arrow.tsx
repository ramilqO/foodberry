import { useState } from 'react'

interface IClass {
	classNames?: string;
	isArrow?: boolean;
}

const Arrow = ({ classNames, isArrow }: IClass) => {


	return (
		<div className={`${classNames} ${isArrow ? 'open' : ''}`}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 8.5L12 15.5L5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>

	)
}

export default Arrow;