import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const fonte = Righteous({
    subsets: ['latin'],
    weight: "400",
})

const Logo = () => {
    return (
        <Link href="/" className={` ${fonte.className} flex items-center gap-2 `}>
            <Image src='/logo.svg' width={50} height={50} alt='Logo' />
            <h1 className=" flex flex-col items-center text-lg leading-5 ">
                <div>CONVIT<span className='text-blue-500'>3</span></div>
                <div>DIGITAL</div>
            </h1>
        </Link>
    )
}

export default Logo