import React from "react"
import { BsFacebook, BsTelegram, BsFillTelephoneFill } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { GiRotaryPhone } from "react-icons/gi"
import { MdEmail } from "react-icons/md"
import {FaRegCopyright} from "react-icons/fa"

const MainFooter = () => {
	return (
		<div className='bg-white dark:bg-[#1e1e1e]'>
			<footer className='footer dark:bg-[#1e1e1e] dark:text-white place-items-center md:flex md:justify-between md:items-start text-center md:text-start py-10 bg-white text-base-content w-[90%]  xl:w-[1290px] mx-auto '>
				<div className="place-items-center md:place-items-start">
					<p className='font-bold text-3xl '>PhotoStad</p>
					<img
						className='w-[131px] text-center'
						src='./assets/images/logo.png'
						alt=' '
					/>

					<p className='w-[253px]'>
						Here you can use for custom image and generate certificate.
					</p>
				</div>
				<div  className="place-items-center md:place-items-start" >
					<div className='font-bold text-black dark:text-white'>PRODUCTS</div>
					<a className='link link-hover '>Home</a>
					<a className='link link-hover ' >Setting</a>
					<a className='link link-hover'>Contact Us</a>
					<a className='link link-hover'>About Us</a>
				</div>
				<div  className="place-items-center md:place-items-start" >
					<span className='font-bold text-black dark:text-white'>USEFUL LINKS</span>
					<a className='link link-hover'>Certificate</a>
					<a className='link link-hover'>Watermark</a>
					<a className='link link-hover'>Account</a>
				</div>
				<div   className="place-items-center md:place-items-start " >
					<span className='font-bold text-black dark:text-white'>CONTACT US</span>
					<a className='link link-hover'>
						{" "}
						<AiFillHome className='inline me-2' /> Phnom Penh
					</a>
					<a className='link link-hover'>
						{" "}
						<MdEmail className='inline me-2' /> istad@gmail.com
					</a>
					<a className='link link-hover'>
						{" "}
						<BsFillTelephoneFill className='inline me-2' /> +885 812661909
					</a>
					<a className='link link-hover'>
						{" "}
						<GiRotaryPhone className='inline me-2' />
						+885 9954245
					</a>
				</div>
			</footer>{" "}
		
			<hr />
			<div className='flex flex-wrap justify-center  md:justify-between w-[90%] xl:w-[1290px] mx-auto mt-1 dark:text-white font-bold'>
				<p> <FaRegCopyright className="inline" /> 2023 PhotSTAD | All Rights Reserved</p>
				<div className='flex space-x-3 text-[30px]'>
					<BsFacebook /> <FaInstagramSquare /> <BsTelegram />
				</div>
			</div>
		</div>
	)
}

export default MainFooter
