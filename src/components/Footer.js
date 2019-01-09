import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import './App.css'

const Footer = () => (
	<div>
		<span className="note">*触摸事项变更完成状态，完成事项加画横线</span>
		<br/>
		<span>显示: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>
			全部
		</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
			尚未完成
		</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
			已经完成
		</FilterLink>
	</div>
)

export default Footer
