import React from 'react';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Header from './components/Header';
import Home from './pages/Home';
import Message from './pages/Message';
import About from './pages/About';

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp/>} />
				<Route path='/user' element={<Header />}>
					<Route path='/user/home' element={<Home />} />
					<Route path='/user/message' element={<Message />} />
					<Route path='/user/about' element={<About />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
