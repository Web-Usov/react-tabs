# Модуль вкладок для React

Данный модуль позволяет использовать привычные вкладки отображения (табы) внутри реакта, работая с ними как с компонентами. Метод реализации позволяет разделить панель навигации по вкладкам и контейнер с самими вкладками.

## Запуск

```sh
npm install
npm start
```
## Структура


### Модуль состоит из 4х компонентов: 
 № | Компонент       | Описание
---|-----------------|----------------------
 1 |TabsContainer    | Контейнер для отображения активной вкладки
 2 |TabsItem         | Сама вкладка
 3 |TabsNav          | Контейнер для навигации по вкладкам
 4 |TabsNavItem      | Элемент навигации 


`TabsContainer` - компонент, который хранит в себе все вкладки, а отображает лишь активную. В свойство `activeTab` передается поле с названием активной вкладки. В тело передаются все вкладки `TabsItem`

Имя класса для блока `tab-content`


```html
<TabsContainer activeTab={this.state.activeTab}>
    ...tabs...
</TabsContainer>
```
---

`TabsItem` - компонент для представления вкладки и ее содержимого. В свойство `label` передается название вкладки. В тело передается контент для отображения. 

Имена класса для блока `tab-pane fade in active`

```html
<TabsItem label="foo">
    <p>Lorem ipsum dolor ...</p>
</TabsItem>
```
---

`TabsNav` - компонент для вывода панели навигации по вкладкам. В свойство `activeTab` передается поле с названием активной вкладки. В свойство `setActive` указывается имя функции для смены активной вкладки. В тело передаются все ссылки на вкладки в виде `TabsNavItem`

Имена класса для блока `nav nav-tabs`

```html
<TabsNav activeTab={this.state.activeTab} setActive={this.setActive}>
    ...nav items...
</TabsNav>
```
---

`TabsNavItem` - компонент-ссылка для переключения вкладки. В свойство `label` передается название вкладки.

Имя класса для активной вкладки `active`

```html
<TabsNavItem label="Пн" />
```
---

## Использование

Для работы необходимо добавить в `state` родительского компонента поле для хранения активной вкладки, а так же прописать функцию сохранения активной вкладки.
Важно, чтобы названия вкладки и ссылки на нее для компонентов `TabsNavItem` и `TabsNav` в свойстве `label` совпадали.

### Полный пример кода использования модуля вкладок:

```js
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
					<TabsNav activeTab={activeTab} setActive={this.setActive}>
							<TabsNavItem label="Tab 1" />
							<TabsNavItem label="Tab 2" />
					</TabsNav>

					<TabsContainer activeTab={activeTab}>
							<TabsItem label="Tab 1">
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cons</p>
							</TabsItem>
							<TabsItem label="Tab 2">
									<p>Fuga perferendis, maxime eum id ipsum, vel incidunt aspernatur sunt nam eaque culpa n</p>                       
							</TabsItem>
					</TabsContainer>
			</div>
		);
	}
}

```