const AlreadyAccount: React.FC<{}> = () => {
	return (
		<div className='text-sm absolute top-8 right-8'>
			Already have an account?{' '}
			<a
				className='underline hover:no-underline text-blue-500 '
				href='#'>
				Sign in
			</a>
		</div>
	)
}

export default AlreadyAccount
