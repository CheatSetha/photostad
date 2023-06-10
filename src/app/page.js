"use client"
import Image from "next/image"

import AOS from "aos"
import "aos/dist/aos.js"
import { useEffect, useState } from "react"
import ButtonComponent from "@/components/button/ButtonComponent"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
const imageBanner = "/assets/images/home/home-banner.png"
const imageWatermark = "/assets/images/home/watermark-photo.png"
const imagecertificate = "/assets/images/home/certificate-photo.png"

//color bg
const darkBACKGROUND = " dark:bg-slate-950 "
const lightBackground = " bg-white "

export default function Home() {
	useEffect(() => {
		AOS.init({
			// Configuration options (optional)
		})
		// Refresh AOS whenever your content changes dynamically
	}, [])

	const [flib, setFlip] = useState(false)
	const flipHanler = () => {
		setFlip(!flib)
	}
	return (
		<main
			className={
				darkBACKGROUND + lightBackground + "flex flex-col items-center"
			}
		>
			<section
				className={
					lightBackground +
					darkBACKGROUND +
					"xl:w-[1290px] w-[90%] lg:w-[1000px] flex flex-wrap md:flex-nowrap justify-between pb-16 pt-14 max-sm:px-5 max-sm:pt-7"
				}
			>
				<div className='pt-16 max-sm:pt-0'>
					<h3 className='font-bold leading-relaxed tracking-wider  text-[#222] dark:text-[#ffff] pb-5 max-sm:text-[8px] max-sm:pb-0'>
						GET YOUR DESIGNS NOW
					</h3>
					<h1 style={{lineHeight: "normal"}} className='font-extrabold w-full md:w-[400px] xl:w-[550px] lg:text-4xl xl:text-[40px]  leading-normal text-[#222] dark:text-[#ffff] max-sm:text-[20px] max-sm:pb-5'>
						Better Solution For Your Designs Watermark And Generate Certificate
					</h1>
					<p className='py-5 text-[#222] dark:text-[#fff] max-sm:hidden'>
						Level up your content with customizeable watermarks and create
						stunning certificates effortlessly on our website.
					</p>
					<ButtonComponent 
						name='Get Start'
						goto='#'
						type='button'
					/>
				</div>
				<Image
					src={imageBanner}
					width={586}
					height={484}
          alt="banner"
					className='top-5 w-[300px] md:w-[300px] lg:w-[480px] max-sm:h-[200px]'
				/>
			</section>
			<section
				class={lightBackground + darkBACKGROUND + "xl:w-[1290px]  max-sm:px-5"}
			>
				<div className='p-5 max-sm:p-0'>
					<h1 className='text-center pb-14 text-5xl font-bold dark:text-slate-300 text-slate-950 max-sm:text-[24px] max-sm:pb-[40px]'>
						Our Service
					</h1>
					<div className='flex flex-wrap justify-between max-sm:flex-col'>
						<div className='w-[49%] watermark p-10 flex max-sm:w-full max-sm:p-4 mb-[18px]'>
							<div className=''>
								<h2 className='text-3xl text-[#222] font-bold max-sm:text-[20px] '>
									Watermark
								</h2>
								<p className='text-cyan-50 py-10 max-sm:text-[12px] max-sm:py-0 max-sm:pb-[15px]'>
									A watermark is a faint or translucent image or text that is
									overlaid on a digital document, photograph, or video to
									indicate ownership or provide copyright protection.
								</p>
								<ButtonComponent
									name='Edit Watermark'
									goto='#'
									type='button'
									isBold={true}
								/>
							</div>
							<Image
								src={imageWatermark}
								width={200}
								height={200}
                 alt="watermark"
								className='max-sm:w-[150px] max-sm:h-[150px]'
							/>
						</div>

						<div className='w-[49%]  certificate p-10 flex max-sm:w-full max-sm:p-4 '>
							<div className=''>
								<h2 className='text-3xl text-[#222] font-bold  max-sm:text-[20px]'>
									Certificate
								</h2>
								<p className='text-cyan-50 py-10 max-sm:text-[12px] max-sm:py-0 max-sm:pb-[15px]'>
									A watermark is a faint or translucent image or text that is
									overlaid on a digital document, photograph, or video to
									indicate ownership or provide copyright protection.
								</p>
								<ButtonComponent
									name='Edit Certificate'
									goto='#'
									type='button'
									isBold={true}
								/>
							</div>
							<Image
              alt="certificate"
								src={imagecertificate}
								width={200}
								height={200}
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				class={
					lightBackground +
					darkBACKGROUND +
					"xl:w-[1290px] w-[90%] lg:w-[1000px]  max-sm:px-5 max-sm:pt-[64px]"
				}
			>
				<h1 className='text-center pb-14 text-5xl font-bold  text-slate-950 dark:text-[#fff] max-sm:text-[24px] max-sm:pb-[40px]'>
					Tutorials
				</h1>
				<div className='flex gap-3 pb-3 justify-between  max-sm:flex-col'>
					<div className='w-1/2 max-sm:w-full'>
						<iframe
							className='rounded-[16px] max-sm:mb-[18px]'
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/GYkq9Rgoj8E'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
					<div className='w-1/2 p-10 bg-[#e9e8e8] rounded-[16px] max-sm:w-full max-sm:p-4'>
						<h2 className='text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]'>
							Add Custom Watermark to Photos in 4 minute
						</h2>
						<p className='py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[12px] max-sm:pb-[20px] '>
							Watermark photos right in your browser. Add custom ​​watermarks
							with your logo and text. Make multi-part watermarks. Add
							transparent and opaque watermarks. Resize photos before publishing
							online. Import photos from your computer, Google Drive or Dropbox.
							Instant uploads and downloads. Watermark pictures without waiting
							in line. Use it for free with optional paid options.
						</p>
						<ButtonComponent
							name='Read More...'
							goto='#'
							type='button'
							isBold='true'
						/>
					</div>
				</div>
				<div className='flex gap-3 justify-between max-sm:flex-col-reverse'>
					<div className='w-1/2 p-10 bg-[#e9e8e8]  rounded-[16px] max-sm:w-full max-sm:p-4'>
						<h2 className='text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]'>
							Generate Certificate in 7 minutes
						</h2>
						<p className='py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[12px] max-sm:pb-[20px]'>
							Start by designing a certificate template that includes relevant
							information such as the recipient's name, the title of the
							certificate, the issuing organization's name and logo, a
							description of the achievement, and any additional details you
							want to include. This template can be created using graphic design
							software or online certificate design tools.
						</p>
						<ButtonComponent
							name='Read More...'
							goto='#'
							type='button'
							isBold='true'
						/>
					</div>
					<div className='w-1/2 max-sm:w-full'>
						<iframe
							className='rounded-[16px] max-sm:mb-[18px]'
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/ux6zXguiqxM'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</section>
			<section class={lightBackground + darkBACKGROUND + "xl:w-[1290px]  "}>
				<h1 className='text-center max-sm:text-[24px] py-7 text-5xl font-bold dark:text-slate-300 text-slate-950'>
					FAQ
				</h1>
				{/* quustion section */}
				<div className="w-[90%] mx-auto">
        <div
					tabIndex={0}
					className='collapse w-full mb-3 collapse-arrow bg-base-200'
				>
					<div className='collapse-title  font-medium'>
						<p>CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?</p>
					</div>
					<div className='collapse-content'>
						<p>
							Yes, You can upload and use your own custom image or logo as a
							watermark on our website.
						</p>
					</div>
				</div>
				{/* end of 1 question */}
				{/* quustion section */}
				<div
					tabIndex={0}
					className='collapse w-full mb-3 collapse-arrow  bg-base-200'
				>
					<div className='collapse-title  font-medium'>
						<p>CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?</p>
					</div>
					<div className='collapse-content'>
						<p>
							Yes, You can upload and use your own custom image or logo as a
							watermark on our website.
						</p>
					</div>
				</div>
				{/* end of 1 question */}
				{/* quustion section */}
				<div
					tabIndex={0}
					className='collapse w-full mb-3 collapse-arrow  bg-base-200'
				>
					<div className='collapse-title  font-medium'>
						<p>CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?</p>
					</div>
					<div className='collapse-content'>
						<p>
							Yes, You can upload and use your own custom image or logo as a
							watermark on our website.
						</p>
					</div>
				</div>
				{/* end of 1 question */}
				{/* quustion section */}
				<div
					tabIndex={0}
					className='collapse w-full mb-3 collapse-arrow  bg-base-200'
				>
					<div className='collapse-title  font-medium'>
						<p>CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?</p>
					</div>
					<div className='collapse-content'>
						<p>
							Yes, You can upload and use your own custom image or logo as a
							watermark on our website.
						</p>
					</div>
				</div>
				{/* end of 1 question */}
				{/* quustion section */}
				<div
					onClick={flipHanler}
					tabIndex={0}
					className='collapse collapse-arrow  w-full mb-3  bg-base-200'
				>
					<div className='collapse-title  font-medium'>
						<p>
							{" "}
							<MdOutlineKeyboardArrowDown
								className={flib ? "inline" : "inline rotate-180"}
							/>{" "}
							CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
						</p>
					</div>
					<div className='collapse-content'>
						<p>
							Yes, You can upload and use your own custom image or logo as a
							watermark on our website.
						</p>
					</div>
				</div>
        </div>
				{/* end of 1 question */}
			</section>
			{/* tutuorial req */}
			<section>
				<h1 className='text-center max-sm:text-[24px] py-7 text-5xl font-bold dark:text-slate-300 text-slate-950'>
					Tutorials Request
				</h1>
				<div class='mb-6'>
					<label
						for='email'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Your email
					</label>
					<input
						type='email'
						id='email'
						class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
						placeholder='name@photostad.com'
					/>
				</div>
				<div class='mb-6'>
					<label
						for='email'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Message
					</label>
					<input
						type='text'
						id='message'
						class='shadow-sm rounded-[16px] w-full lg:w-[800px] xl:w-[1069px] h-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
				
					/>
				</div>
        <div className="w-full flex justify-end lg:w-[800px] xl:w-[1069px]">
        <button className="bg-red-500 p-2.5 w-full md:w-fit text-white rounded-[16px] px-7">Send</button>


        </div>
			</section>
		</main>
	)
}
