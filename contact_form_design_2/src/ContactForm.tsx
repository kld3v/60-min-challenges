import React, { useState } from 'react'

const ContactForm: React.FC<{}> = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})

	const [showPassword, setShowPassword] = useState(false)
	const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault()

		console.log(formData)
	}

	return (
		<form className='max-w-[480px] w-full min-w-[320px] flex flex-col gap-8 mt-16'>
			<h1 className='text-[48px]'>Dive headfirst into success.</h1>
			<p>You'll be on a luxury liner in no time. Get started with a free account. Sign up for a voyage of a lifetime.</p>
			<div className='flex justify-between flex-wrap gap-y-4'>
				<button className='border-2 border-gray-300 bg-white rounded-3xl px-8 py-4 text-xs w-1/3 w-[45%]'>Sign up with google </button>
				<button className='border-2 border-gray-300  rounded-3xl px-4 py-4 text-xs w-[45%]'>Linked in coming soon</button>
			</div>
			<div className='flex justify-evenly '>
				<div className='border-t mr-12 mt-2 border-gray-300 w-full'></div>
				<p className='text-xs text-gray-300'>or</p>
				<div className='border-t ml-12 mt-2 border-gray-300 w-full'></div>
			</div>
			<label
				className='flex flex-col '
				htmlFor='full_name'>
				<p className='text-sm'>Full Name</p>
				<input
					value={formData.name}
					onChange={(event) => setFormData({ ...formData, name: event.target.value })}
					type='text'
					id='full_name'
					className='border-2 border-blue-300 rounded-md px-4 py-2'
				/>
				<small className='text-gray-600 font-light'>Enter your full name in the field above</small>
			</label>

			<label
				htmlFor='email'
				className='flex flex-col'>
				<p className='text-sm'>Email</p>
				<input
					value={formData.email}
					onChange={(event) => setFormData({ ...formData, email: event.target.value })}
					className='border-2 border-blue-300 rounded-md px-4 py-2'
					type='email'
					id='email'
				/>
				<small className='text-gray-600 font-light'>Enter your email in the field above</small>
			</label>

			<label
				htmlFor='password'
				className='flex flex-col'>
				<div className='flex justify-between'>
					<p className='text-sm'>Password</p>
					<p
						className='text-sm text-blue-500 cursor-pointer hover:text-blue-700'
						onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? 'Hide' : '👁'}
					</p>
				</div>
				<input
					value={formData.password}
					onChange={(event) => setFormData({ ...formData, password: event.target.value })}
					className='border-2 border-blue-300 rounded-md px-4 py-2'
					type={showPassword ? 'text' : 'password'}
					id='password'
					autoComplete='current-password'
				/>
				<small className='text-gray-600 font-light'>Enter your password in the field above</small>
			</label>

			<button
				className='bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl px-4 py-2'
				type='submit'
				onClick={onSubmit}>
				Sign Up
			</button>
			<small className='text-gray-600 text-center mx-8'>
				By signing up, you acknowledge that you have read our{' '}
				<a
					className='underline hover:no-underline text-blue-500'
					href='#'>
					Terms of Service
				</a>{' '}
				and our{' '}
				<a
					className='underline hover:no-underline text-blue-500'
					href='#'>
					Privacy Policy
				</a>
			</small>
		</form>
	)
}

export default ContactForm
