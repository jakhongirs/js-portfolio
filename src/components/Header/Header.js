import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import Container from '../Container/Container'

/* Svg icons */
import LogoImg from '../Lib/Svg/Logo'

function Header() {
	return (
		<header className='site-header'>
			<Container>
				<div className='site-header__container'>
					<Link className='logo' to='/'>
						<LogoImg className='logo__img' />
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Header
