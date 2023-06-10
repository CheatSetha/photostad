"use client"
import React from "react"
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { FcGoogle } from "react-icons/fc"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const validationShcema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Required"),
})
const initialValues = {
	email: "",
	password: "",
}
const handleSubmit = (values) => {
	console.log(values)
}

// test auth
const Page = () => {
	const { data: session } = useSession()
	const router = useRouter()
	// check if log in success redirect to home page
	if (session) {
		router.push("/")
	}

	return (
		<div className='bg-white dark:bg-slate-800 xl:w-[1290px] w-full justify-center items-center h-[100vh] flex flex-wrap  '>
			<div className='w-1/2 hidden md:flex justify-end items-center '>
				<img
				

					className='w-96   '
					src='/assets/images/signup.png'
					alt='sign up logo'
				/>
			</div>
			<div className='md:w-1/2 w-full'>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={validationShcema}
				>
					<div className='form-container w-[90%] md:w-[500px] xl:w-[600px] mx-auto  border p-10 rounded-[16px]'>
						<h1 className='font-bold text-2xl mb-5 dark:text-white'>Log In</h1>
						<div>
							<label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Email
							</label>
							<Field
								placeholder='enter your email'
								type='email'
								name='email'
								class='bg-gray-50 border rounded-[16px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
						</div>
						<ErrorMessage
							name='email'
							component='div'
							className='text-red-500 text-sm mb-6'
						/>
						<div class='mt-6'>
							<label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Password
							</label>
							<Field
								placeholder='enter your password'
								type='password'
								name='password'
								class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
						</div>
						<ErrorMessage
							name='password'
							component='div'
							className='text-red-500 text-sm mb-6'
						/>

						<div className='mt-6'>
							<button class='rounded-[16px] cursor-pointer hover:bg-gray-700  bg-[#E85854] p-2.5 w-full text-white border-none '>
								{" "}
								Log in{" "}
							</button>
						</div>
						<div className='divider'>
							<span className='font-extralight text-[12px]'>OR</span>
						</div>
						<button
							onClick={() => signIn("google")}
							className='cursor-pointer p-2.5 bg-slate-100 dark:bg-black  dark:text-white  border w-full rounded-[16px]'
						>
							<FcGoogle className='inline' /> log in with google
						</button>
						<small className='justify-end flex mt-10'>
						forgot password ? click  {" "}
						<span className='text-[#E85854] cursor-pointer'> here</span>{" "}
					</small>
					</div>
				
				</Formik>
			</div>
		</div>
	)
}

export default Page
