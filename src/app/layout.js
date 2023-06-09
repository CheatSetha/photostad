"use client"
import MainNavBar from "@/components/MainNavBar"
import "./globals.css"
import { Inter } from "next/font/google"
import MainFooter from "@/components/MainFooter"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SessionProvider >
				
				<ThemeProvider attribute='class'>
					<MainNavBar />
					{children}
					<MainFooter />
				</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
