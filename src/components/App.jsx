import React, { Component } from 'react';
import { TabsContainer, TabsItem, TabsNav, TabsNavItem } from './Tabs'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: "voluptatem"
		}
	}
	setActive = (tab) => {
		this.setState({ activeTab: tab })
	}
	render() {
		const { activeTab } = this.state
		return (
			<div>
				<hr />
				<div className="container">

					<TabsNav activeTab={activeTab} setActive={this.setActive}>
						<TabsNavItem label="dignissimos" />
						<TabsNavItem label="voluptatem" />
					</TabsNav>

					<TabsContainer activeTab={activeTab}>
						<TabsItem label="dignissimos">
							<p>dignissimos, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero cumque ab. Quisquam molestiae reprehenderit, commodi odit nulla quo nihil, exercitationem repudiandae, libero velit natus iure veritatis necessitatibus a dignissimos?</p>
						</TabsItem>
						<TabsItem label="voluptatem">
							<p>voluptatem, ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quo rem voluptatem iure sint ipsa natus quos aliquid doloribus nostrum eos, cum mollitia omnis est. Beatae nemo recusandae ea ad.</p>
						</TabsItem>
					</TabsContainer>


				</div>
				<hr />
			</div>

		);
	}
}

export default App;
