import AccountExists from './AccountExists'
import { useState } from 'react'
import './output.css'

function App() {
	return (
		<>
			<AccountExists />
			<div className='grid grid-cols-2 h-screen w-screen'>
				<div className=' w-1/2'></div>
				<div className=' w-1/2 container flex flex-col gap-8 max-w-xl w-full bg-white text-left text-black'>
					<h1 className='text-3xl font-bold'>Dive headfirst into success.</h1>
					<p>You'll be on a luxry liner in no time. Get started with a free account. Sign up for a voyage of a lifetime.</p>
					<div className='flex justify-between'>
						<button>Sign Up with google</button>
						<button className='disabled'>Linked in coming soon</button>
					</div>
					<form
						className='flex flex-col gap-4'
						action=''>
						<label
							className='flex flex-col gap-1'
							htmlFor='full_name'>
							Full Name
							<input
								type='text'
								name='full_name'
								id='full_name'
							/>
							<small>Enter your full name</small>
						</label>

						<label
							className='flex flex-col gap-1'
							htmlFor='email'>
							Email
							<input
								type='email'
								name='email'
								id='email'
							/>
							<small>Enter your email</small>
						</label>
						<label
							className='flex flex-col gap-1'
							htmlFor='password'>
							Password
							<input
								type='password'
								name='password'
								id='password'
							/>
							<small>Enter your password</small>
						</label>

						<button
							type='submit'
							className='bg-black text-white'>
							Sign Up
						</button>
						<small>
							By signing up you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
						</small>
					</form>
				</div>
			</div>
		</>
	)
}

export default App
