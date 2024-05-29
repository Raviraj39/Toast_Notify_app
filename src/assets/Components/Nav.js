import React, {Component} from "react";

class Nav extends Component {

render(){ 
	return (React.createElement("nav",null,
	[(React.createElement("h2",{className:"logo"},"Header")),
	(React.createElement("ul",{className:"navlist"},
			[React.createElement("li",{className:"list"},
				[React.createElement("a",{href:"/component-1"},"First component",)])],
			[React.createElement("li",{className:"list"},
				[React.createElement("a",{href:"/component-2"},"Second component",)])],
			[React.createElement("li",{className:"list"},
				[React.createElement("a",{href:"/component-3"},"Third component",)])]))]
	)
	)
}

}
export default Nav;