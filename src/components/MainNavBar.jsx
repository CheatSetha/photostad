"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FiMoon } from "react-icons/fi"
import { BsSun } from "react-icons/bs"
import { useTheme } from "next-themes"

const MainNavBar = () => {
	const { theme, setTheme } = useTheme('light')

	const toggleDarkMode = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}
	useEffect(()=>{
		toggleDarkMode()
	},[])

	const [logIN, setLogIN] = React.useState(false)
	return (
		<div className='bg-white dark:bg-[#1e1e1e] '>
			<div className='navbar md:h-[80px]  xl:w-[1290px] mx-auto'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label
							tabIndex={0}
							className='btn btn-ghost lg:hidden'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Watermark</a>
							</li>

							<li>
								<a>Certificate</a>
							</li>
							<li>
								<a>About Us</a>
							</li>
						</ul>
					</div>
					<Link href={"/"}>
						<img
							className='md:w-[131px] w-[100px]'
							src='./assets/images/logo.png'
							alt='logo img'
						/>
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 dark:text-white'>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Watermark</a>
						</li>

						<li>
							<a>Certificate</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end space-x-2'>
					{theme === "light" ? (
						<button
							onClick={toggleDarkMode}
							className='mr-2'
						>
							{" "}
							<FiMoon className='text-4xl' />{" "}
						</button>
					) : (
						<button
							onClick={toggleDarkMode}
							className='mr-2'
						>
							{" "}
							<BsSun className='text-4xl text-white' />
						</button>
					)}
					{logIN ? (
						<div className='avatar'>
							<div className='md:w-10 w-8 md:ms-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
								<img src='./assets/images/avatar.jpg' />
							</div>
						</div>
					) : (
						<>
							<Link
								href={"./login"}
								className='bg-[#E85854] text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
							>
								Log in
							</Link>
							<Link
								href={"./signup"}
								className='bg-[#E85854] text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
							>
								Sign Up
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default MainNavBar
