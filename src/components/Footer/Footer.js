import React from 'react'
import './Footer.scss'
import Container from '../Container/Container'

function Footer() {
	return (
		<footer className='site-footer'>
			<Container>
				<div className='site-footer__wrapper'>
					<p className='site-footer__copyright'>2021 © jakhongir.codes</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
