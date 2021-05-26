import React from 'react'
import './Hero.scss'
import Container from '../Container/Container'

//Images and icons:
import heroImg from '../../assets/images/hero-img.png'
import heroImg2x from '../../assets/images/hero-img@2x.png'
import Github from '../Lib/Svg/Github'
import Twitter from '../Lib/Svg/Twitter'
import Linkedin from '../Lib/Svg/Linkedin'

function Hero() {
	return (
		<section className='hero'>
			<Container>
				<div className='hero__wrapper'>
					<img
						className='hero__img'
						src={heroImg}
						alt='Jakhongir Sagdullaev'
						srcSet={heroImg2x}
						width='220px'
						height='220px'
					/>

					<div className='hero__texts-wrapper'>
						<h1 className='hero__heading'>Jakhongir Sagdullaev</h1>
						<p className='hero__job-position'>Software Developer @ Abutech</p>
						<p className='hero__desc'>
							I prefer React for the frontend, Node.js for backend development.
							I love everything about JavaScript!
						</p>

						<ul className='hero__skills-list'>
							<li className='hero__skills-item'>JavaScript</li>
							<li className='hero__skills-item'>React</li>
							<li className='hero__skills-item'>Next.js</li>
							<li className='hero__skills-item'>TypeScript</li>
							<li className='hero__skills-item'>Nodejs</li>
							<li className='hero__skills-item'>Express</li>
							<li className='hero__skills-item'>PostgreSQL</li>
						</ul>

						<ul className='hero__social-list'>
							<li className='hero__social-item'>
								<a
									className='hero__social-link'
									href='https://www.linkedin.com/in/jakhongir-sagdullaev'
									target='_blank'>
									<Linkedin className='hero__social-img' />
								</a>
							</li>

							<li className='hero__social-item'>
								<a
									className='hero__social-link'
									href='https://github.com/jakhongirs'
									target='_blank'>
									<Github className='hero__social-img' />
								</a>
							</li>

							<li className='hero__social-item'>
								<a
									className='hero__social-link'
									href='https://twitter.com/jakhongir_codes'
									target='_blank'>
									<Twitter className='hero__social-img' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Hero
