import React, { Component } from 'react';
import { TabsContainer, TabsItem, TabsNav, TabsNavItem } from './Tabs'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: ""
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

					<h1> Задачи на неделю </h1>
					<h3> Выберите день недели для просмотра подробной информации  </h3>
					{/* 
						Объявлем блок навигации по вкладкам, передаем в свойства поле с активной вкладкой и функцию смены активной вкладки. 
						В тело передаем ссылки на вкладки с указанием их имен.
					*/}
					<TabsNav activeTab={activeTab} setActive={this.setActive}> 
						<TabsNavItem label="Пн" />
						<TabsNavItem label="Вт" />
						<TabsNavItem label="Ср" />
						<TabsNavItem label="Чт" />
						<TabsNavItem label="Пт" />
						<TabsNavItem label="Сб" />
						<TabsNavItem label="Вс" />
					</TabsNav>


					
					{/* 
						Объявлем блок со всеми вкладками, передавая в свойсвто поле с именем активной вкладки. 
						В тело передаем все вкладки с их именем и содержимым.
					*/}
					<TabsContainer activeTab={activeTab}>
						<TabsItem label="пн">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur id labore minima at aliquam vitae, esse nisi ipsum nihil, totam, dignissimos dolores atque quam pariatur consequuntur animi suscipit. Tenetur!</p>
						</TabsItem>
						<TabsItem label="вт">
							<p>Fuga perferendis, maxime eum id ipsum, vel incidunt aspernatur sunt nam eaque culpa nemo cum illo cupiditate ipsa, autem aut laboriosam similique iste consequuntur amet eius porro corporis. Nostrum, illum.</p>
							
						</TabsItem>
						<TabsItem label="ср">
							<p>Voluptatum quaerat sunt iusto ipsa cupiditate ab nesciunt expedita at alias nemo adipisci reiciendis eveniet accusantium officiis fugiat, quam fugit voluptatem facilis assumenda consequatur ipsum totam. Sed consectetur aperiam perferendis!</p>
						</TabsItem>
						<TabsItem label="чт">
							<p>Fugit saepe commodi harum veniam in esse sit! Fuga possimus reprehenderit ducimus voluptas expedita quo dicta officiis culpa nisi, quia qui deleniti cum. Quaerat corrupti, dolor recusandae architecto reprehenderit pariatur?</p>
						</TabsItem>
						<TabsItem label="пт">
							<p>Voluptatem ut aperiam iure omnis iusto commodi alias libero consequuntur tenetur nihil quisquam quis, placeat soluta repudiandae, officiis eaque ducimus perferendis nisi ipsam quidem sunt, doloribus sed. Obcaecati, numquam soluta!</p>
						</TabsItem>
						<TabsItem label="сб">
							<p>Esse unde est maiores ea non labore ducimus tempora expedita eligendi quas dolore commodi iste delectus, fugit nesciunt modi impedit enim error consequatur voluptates cupiditate recusandae! Autem culpa minima ullam!</p>
						</TabsItem>
						<TabsItem label="вс">
							<p>Consequatur iste, praesentium, obcaecati sit blanditiis quia tenetur odit quos nobis nisi sint rem amet! Id ducimus ex laudantium aliquam aut autem placeat iure, omnis cum cumque tenetur veritatis deserunt.</p>	
						</TabsItem>
						
					</TabsContainer>
				</div>
				<hr />
			</div>
		);
	}
}

export default App;
