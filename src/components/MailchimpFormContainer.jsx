import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const MailchimpFormContainer = () => {
	const postUrl = `https://webstudiomallorca.us14.list-manage.com/subscribe/post?u=${
		import.meta.env.VITE_MAILCHIMP_U
	}&id=${import.meta.env.VITE_MAILCHIMP_ID}`

	console.log(postUrl)
	return (
		<div>
			<MailchimpSubscribe
				url={postUrl}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={formData => subscribe(formData)}
					/>
				)}
			/>
		</div>
	)
}

export default MailchimpFormContainer
