import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
	<div>
		<nav>
			<h2 className="logo">Header</h2>
			<ul className="navlist">
				<li className="list">
					<NavLink to="/component-1">First component</NavLink>
				</li>
				<li className="list">
					<NavLink to="/component-2">Second component</NavLink>
				</li>
				<li className="list">
					<NavLink to="/component-3">Third component</NavLink>
				</li>
			</ul>
		</nav>
	</div>
  )
}

export default Nav
