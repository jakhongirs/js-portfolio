import './BlogPage.scss'
import Container from '../Container/Container'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BlogPage() {
	const [data, setData] = useState([])
	const getData = () => {
		fetch('./data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json()
			})
			.then(function (myJson) {
				setData(myJson)
			})
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<section className='blog-page'>
			<Container>
				<div className='blog-page__wrapper'>
					<div className='blog-page__left'>
						<h2 className='blog-page__heading'>Blog</h2>

						<ul className='blog-page__list'>
							{data &&
								data.length > 0 &&
								data.map((item) => (
									<li className='blog-page__item' key={item.id}>
										<Link className='blog-page__link' to={item.id}>
											<h3 className='blog-page__title'>{item.title}</h3>
											<p className='blog-page__date'>{item.date}</p>
										</Link>
									</li>
								))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default BlogPage
