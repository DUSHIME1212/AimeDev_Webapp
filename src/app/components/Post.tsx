import React from 'react'
import Image from "next/image";

const Post = () => {
    const user = 'https://i.pinimg.com/736x/39/6d/39/396d392645180a426186aec7b7defaee.jpg'
    const user2 = 'https://i.pinimg.com/564x/07/8b/61/078b61479e560ec713e3d42e0e4808c1.jpg'
    return (
        <div className={'flex flex-col gap-4'}>
            {/*user*/}
            <div className={'flex flex-row items-center justify-between'}>
                <div className={'flex items-center justify-between gap-4'}>
                    <Image src={user} alt={''} className={'rounded-full size-12 object-cover'} width={40} height={40}/>
                    <span className={'font-medium'}>Vini jr</span>
                </div>
                <Image src={'/more.png'} alt={''}  width={16} height={16}/>
            </div>
            {/*desc*/}
            <div className={'flex flex-col gap-4'}>
                <div className={'w-full min-h-96 relative'}>
                    <Image src={user2} alt={''} className={'object-cover object-top rounded-md '}  fill/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            {/*interaction*/}
            <div className={'flex items-start my-4 w-full justify-between text-sm'}>
                {/*left*/}
                <div className={'flex gap-2 md:gap-4 scale-90'}>
                    <div className={'flex items-center p-2 gap-4 bg-slate-50 rounded-lg relative cursor-pointer'}>
                        <Image src={'/like.png'} alt={''} className={'object-cover cursor-pointer'} width={24}
                               height={24}/>
                        <span className={'text-black'}>|</span>
                        <span className={'text-black flex gap-2'}>78 <span
                            className={'hidden md:block'}>Likes</span></span>
                    </div>
                    <div className={'flex items-center p-2 gap-4 bg-slate-50 rounded-lg relative cursor-pointer'}>
                        <Image src={'/comment.png'} alt={''} className={'object-contain size-6 cursor-pointer'}
                               width={24}
                               height={24}/>
                        <span className={'text-black'}>|</span>
                        <span className={'text-black flex gap-2'}>27 <span
                            className={'hidden md:block'}>Comments</span></span>
                    </div>
                    <div className={'flex items-center p-2 gap-4 bg-slate-50 rounded-lg relative cursor-pointer'}>
                        <Image src={'/share.png'} alt={''} className={'object-contain size-6 cursor-pointer'} width={24}
                               height={24}/>
                        <span className={'text-black'}>|</span>
                        <span className={'text-black flex gap-2'}>7 <span
                            className={'hidden md:block'}>Shares</span></span>
                    </div>
                </div>
                {/*right*/}
                <div></div>
            </div>
        </div>
    )
}
export default Post
