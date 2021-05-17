import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import Container from '../Container/Container'

/* Svg icons */
import LogoImg from '../Lib/Svg/Logo'
import Menu from '../Lib/Svg/Menu'

function Header() {
	const elsitenav = React.useRef()

	return (
		<header className='site-header'>
			<Container>
				<div className='site-header__container'>
					<Link className='logo' to='/'>
						<LogoImg className='logo__img' />
					</Link>

					<nav className='sitenav' ref={elsitenav}>
						<button
							className='sitenav__button'
							onClick={() =>
								elsitenav.current.classList.toggle('sitenav--open')
							}>
							<Menu className='sitenav__button-img' />
						</button>

						<ul className='sitenav__list'>
							<li className='sitenav__item'>
								<NavLink className='sitenav__link' to='/about'>
									About
								</NavLink>
							</li>

							<li className='sitenav__item'>
								<NavLink className='sitenav__link' to='/blog'>
									Blog
								</NavLink>
							</li>

							<li className='sitenav__item'>
								<NavLink className='sitenav__link' to='/projects'>
									Projects
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
