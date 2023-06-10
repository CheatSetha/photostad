"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FiMoon } from "react-icons/fi"
import { BsSun } from "react-icons/bs"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

const MainNavBar = () => {
	const [logIN, setLogIN] = useState(false)
	// auth
	const { data: session } = useSession()

	// if log in set logIN to true
	useEffect(() => {
		if (session) {
			setLogIN(true)
		}
	}, [session])

	// end of auth config

	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme
	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light")
		} else {
			setTheme("dark")
		}
	}

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
							{session ? (
								<li>
								<a>profile</a>
							</li>
							) : (
								<>
								<li>
									<a>log in</a>
								</li>
								<li>
								<a>Sign up</a>
							</li>
							</>
							)}
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
							<a href="/">Home</a>
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
					<button onClick={toggleTheme}>
						{theme === "dark" ? (
							<BsSun className='text-3xl text-white' />
						) : (
							<FiMoon className='text-3xl' />
						)}
					</button>
					{session ? (
						<div className='dropdown dropdown-end'>
							<label
								tabIndex={0}
								className='btn btn-ghost btn-circle avatar'
							>
								<div className='md:w-10 w-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
									<img src={session.user.image} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
							>
								<li>
									<a className='justify-between'>{session.user.name}</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<button
										className='py-2 bg-red-400'
										onClick={() => signOut()}
									>
										sign out
									</button>
								</li>
							</ul>
						</div>
					) : (
						<>
							<Link
								href={"./login"}
								className='bg-[#E85854] hidden md:block text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
							>
								Log in
							</Link>
							<Link
								href={"./signup"}
								className='bg-[#E85854] hidden md:block text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
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
