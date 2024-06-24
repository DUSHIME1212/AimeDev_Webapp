'use client';
import React from 'react'
import Link from "next/link";
import Mobilemenu from "@/app/components/Mobilemenu";
import Image from "next/image";
import {ClerkLoading, ClerkLoaded, SignedOut, SignedIn, UserButton} from '@clerk/nextjs'
const Navbar = () => {
    return (
        <header className={'w-full bg-white'}>
            <nav className={'flex h-16 relative items-center justify-between'}>
                {/*left*/}
                <div className={'md:hidden lg:block lg:w-[20%]'}>
                    <Link className={'text-2xl uppercase tracking-tighter font-bold'} href="/">Aime dev</Link>
                </div>
                {/*center*/}
                <div className={'hidden md:flex gap-2 w-[50%]'}>
                    <div className={'flex justify-between text-sm gap-6'}>
                        <Link href={'/'} className={'flex items-center gap-2'}>
                            <Image src={'/home.png'} className={'object-contain'} alt={''} width={18} height={18}/>
                            <span>Homepage</span>
                        </Link>
                        <Link href={'/'} className={'flex items-center gap-2'}>
                            <Image src={'/friends.png'} className={'object-contain'} alt={''} width={18} height={18}/>
                            <span>Friends</span>
                        </Link>
                        <Link href={'/'} className={'flex items-center gap-2'}>
                            <Image src={'/stories.png'} className={'object-contain'} alt={''} width={18} height={18}/>
                            <span>Stories</span>
                        </Link>
                    </div>
                    <div className={'hidden xl:flex rounded-xl items-center bg-slate-100 relative text-sm'}>
                        <input type="text" name="" className={'p-2 bg-transparent outline-none'} placeholder={'search...'} id=""/>
                        <Image src={'/search.png'} className={'absolute right-[8px]'} alt={''} width={18} height={18}/>
                    </div>
                </div>
                {/*right*/}
                <div className={'w-full md:w-[30%] flex items-center gap-4 xl:gap-8 justify-end'}>
                    <ClerkLoading>
                        <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                            <div className={'cursor-pointer relative'}>
                                <Image src={'/people.png'} className={'size-4'} alt={''} width={18} height={18}/>
                            </div>
                            <div className={'cursor-pointer relative'}>
                                <Image src={'/messages.png'} className={'size-4'} alt={''} width={18} height={18}/>
                            </div>
                            <div className={'cursor-pointer relative'}>
                                <Image src={'/notifications.png'} className={'size-4'} alt={''} width={18} height={18}/>
                            </div>
                        </SignedIn>
                        <UserButton/>
                        <SignedOut>
                            <div className={'relative flex text-sm items-center gap-2'}>
                                <Image src={'/img.png'} alt={''} width={18} height={18}/>
                                <Link href={'/sign-up'} className={'capitalize'}>Log in/register</Link>
                            </div>
                        </SignedOut>
                    </ClerkLoaded>
                    <Mobilemenu/>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
