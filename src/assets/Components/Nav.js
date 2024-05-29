import React, {Component} from "react";

class Nav extends Component {

render(){ 
	return React.createElement("nav",null,
	[(React.createElement("h2",{class:"logo"},"Header")),
	(React.createElement("ul",{class:"navlist"},
			[React.createElement("li",{class:"list"},"First component")],
			[React.createElement("li",{class:"list"},"Second component")],
			[React.createElement("li",{class:"list"},"Third component")]))]
	);
}

}
export default Nav;