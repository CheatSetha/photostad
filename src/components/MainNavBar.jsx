"use client"
import Link from "next/link"
import React from "react"

const MainNavBar = () => {
	const [logIN, setLogIN] = React.useState(true)
	return (
		<div className='bg-base-100 dark:bg-[#1e1e1e] '>
			<div className='navbar h-[80px] w-[90%] xl:w-[1290px] mx-auto'>
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
							className='w-[131px]'
							src='./assets/images/logo.png'
							alt='logo img'
						/>
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
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
					<a className=''> moon </a>
					{logIN ? (
						<div className='avatar'>
							<div className='w-12 md:ms-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
								<img src='./assets/images/avatar.jpg' />
							</div>
						</div>
					) : (
						<>
							<Link
								href={"#"}
								className='bg-[#E85854] text-white font-[35px] text-center py-2  rounded-[16px] w-[88px]  text-[17px]'
							>
								Log in
							</Link>
							<Link
								href={"#"}
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
