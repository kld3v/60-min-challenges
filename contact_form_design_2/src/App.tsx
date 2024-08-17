import AlreadyAccount from './AlreadyAccount'
import './App.css'
import ContactForm from './ContactForm'

function App() {
	return (
		<>
			<AlreadyAccount />
			<div className='h-screen w-screen grid grid-cols-12 '>
				<div className='col-span-0 md:col-span-5 '>
					<img
						className='h-full'
						src='./diving.png'
						alt='person diving carton'
					/>
				</div>
				<div className='col-span-12 md:col-span-7 h-screen'>
					<ContactForm />
				</div>
			</div>
		</>
	)
}

export default App
