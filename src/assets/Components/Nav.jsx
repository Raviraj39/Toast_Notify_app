import React from 'react'

const Nav = () => {
  return (
	<div>
		<nav>
			<h2 className="logo">Header</h2>
			<ul className="navlist">
				<li className="list">
					<a href="/component-1">First component</a>
				</li>
				<li className="list">
					<a href="/component-2">Second component</a>
				</li>
				<li className="list">
					<a href="/component-3">Third component</a>
				</li>
			</ul>
		</nav>
	</div>
  )
}

export default Nav
