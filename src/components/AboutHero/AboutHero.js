import React from 'react'
import './AboutHero.scss'
import Container from '../Container/Container'

//Images and icons:
import aboutImg from '../../assets/images/about-bg.png'
import aboutImg2x from '../../assets/images/about-bg@2x.png'

function AboutHero() {
	return (
		<section className='about-hero'>
			<Container>
				<div className='about-hero__wrapper'>
					<div className='about-hero__texts'>
						<h2 className='about-hero__heading'>More about me</h2>
						<p className='about-hero__desc'>
							I am Jakhongir Sagdullaev, a 22-year-old Software Engineer from
							Tashkent, Uzbekistan, currently living in Warsaw, Poland. <br />{' '}
							<br /> I am always contributing to developer events by giving a
							talk or as a mentor, especially the ones that engage women in
							tech. As a developer, I really want to see more diversity in the
							industry. <br /> <br /> In short, it's me, Jakhongir, a friendly
							programmer from Uzbekistan. You can read my story of becoming a
							software engineer here.
						</p>
					</div>

					<img
						className='about-hero__img'
						src={aboutImg}
						alt='Jakhongir Sagdullaev'
						srcSet={aboutImg2x}
						width='326px'
						height='357px'
					/>
				</div>
			</Container>
		</section>
	)
}

export default AboutHero
