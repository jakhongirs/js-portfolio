import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Blog from './screens/Blog/Blog'
import Projects from './screens/Projects/Projects'
import './App.scss'

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/about' component={About} exact />
					<Route path='/blog' component={Blog} exact />
					<Route path='/projects' component={Projects} exact />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
