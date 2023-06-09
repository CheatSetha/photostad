"use client"

import { ErrorMessage, Field, Form, Formik } from "formik"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import * as Yup from "yup"

const validationSchema = Yup.object({
	name: Yup.string().required("កាក​​ មិនអាចទទេបានទេ"),
	email: Yup.string().email().required("កាក​​ មិនអាចទទេបានទេ"),

	password: Yup.string()
		.min(8, "កាក​​ password ត្រូវតែចាប់ពី៨ខ្ទង់ឡើង")
		.required("កាក​​ មិនអាចទទេបានទេ"),
	confirmedPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "កាក​​ password មិនត្រូវគ្នាទេ")
		.required("កាក​​ មិនអាចទទេបានទេ"),
})

export default function Page() {
	const router = useRouter()
	const [data, setData] = useState()

	// for submit to server
	const createNewUser = async (user) => {
		const { email, password, confirmedPassword } = user

		let myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		var raw = JSON.stringify({
			email,
			password,
			confirmedPassword,
			roleIds: ["1"],
		})

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		}

		fetch("http://localhost:8080/api/v1/auth/register", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				if (result.code === 200) {
					var requestOptions = {
						method: "POST",
						redirect: "follow",
					}

					fetch(
						"http://localhost:8080/api/v1/auth/verify?email=" + result.data,
						requestOptions
					)
						.then((response) => response.text())
						.then((result) => console.log(result))
						.catch((error) => console.log("error", error))
				}
			})
			.catch((error) => console.log("error", error))

		// end of submit to server
	}
	console.log("data: ", data)

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold mb-5'>Login now!</h1>
					<img
						src='https://onepiecetopdecks.com/wp-content/uploads/2022/11/zr.jpg'
						alt=''
						className='rounded-2xl'
					/>
				</div>
				<div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-5'>
					<Formik
						initialValues={{
							email: "",
							password: "",
							confirmedPassword: "",
							roleIds: ["1"],
						}}
						validationSchema={validationSchema}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								createNewUser(values)
								setSubmitting(false)
								resetForm()
							}, 500)
						}}
					>
						{({ isSubmitting, setFieldValue }) => (
							<Form>
								<div>
									<label htmlFor='email'> បញ្ចូល name របស់អ្នក </label> <br />
									<Field
										type='text'
										name='name'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូល email អ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='name'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									<label htmlFor='email'> បញ្ចូល Email របស់អ្នក </label> <br />
									<Field
										type='email'
										name='email'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូល email អ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='email'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* password */}
									<label htmlFor='password'>
										{" "}
										បញ្ចូល password របស់អ្នក{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='password'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូលឈ្មោះអ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='password'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* confirm password */}
									<label htmlFor='confirmPassword'>
										{" "}
										ផ្ទៀង password របស់អ្នក{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='confirmedPassword'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូលឈ្មោះអ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='confirmedPassword'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									<button
										type='submit'
										disabled={isSubmitting}
										className='btn btn-primary w-full  '
									>
										submit
									</button>
									<button
										onClick={() => signIn("google")}
										className='btn dark:bg-black dark:text-white p-3 mt-6 border w-full rounded-[16px]'
									>
										<FcGoogle className='inline' /> sign up with google
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

// do drag and drop and preview image
// end of drag and drop and preview image
