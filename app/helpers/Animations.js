

import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
import React, { Component } from 'react'



// More advanced JS based styling animation:
export const AdvancedAnimation = ({ in: inProp, children, ...otherProps }) => {
	let duration = otherProps.duration || 300
	let defaultStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		height: 0,
		...otherProps.style
	}
	let transitionStyles = {
		entering: { height: 'inherit' },
		entered:  { height: 'inherit' },
		...otherProps.transitionStyles
	}
	return (
		<Transition in={inProp} timeout={duration} { ...otherProps }>
			{(state) => (
				<div style={{ ...defaultStyle, ...transitionStyles[state] }}>
					{ children }
				</div>
			)}
		</Transition>
	)
}


export const Group = TransitionGroup

export const Animation = ({ children, ...props }) => {
	let duration = props.duration || 300
	let classes = props.classes || "animation-trans"
	return (
		<CSSTransition
			{...props}
			classNames={classes}
			timeout={duration}
			unmountOnExit={true}>
				{children}
		</CSSTransition>
	)
}


export const CollapseTrans = ({ children, ...props }) => {
	props.className = "collpase-trans"
	return Animation({ children, ...props })
}


export const FadeTrans = ({ children, ...props }) => {
	props.className = "fade-trans"
	return Animation({ children, ...props })
}


