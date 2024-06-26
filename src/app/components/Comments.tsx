import React from 'react'
import Image from "next/image";
import { Input } from "shadcn-ui"

const Comments = () => {
    const user = 'https://i.pinimg.com/564x/00/a2/64/00a2641e55f8c68ee0d1eed61aa7000a.jpg'
    return (
        <div>
            {/*write*/}
            <div className={'flex gap-4 items-center'}>
                <Image src={user} alt={''} className={'size-8 object-cover rounded-full overflow-clip'} width={16} height={16}/>
                <Input type="text" placeholder='write a comment...' value={''} className={'p-2 flex-1 bg-slate-100 z-30 outline-none rounded-xl w-full'} />
                <Image src={'/emoji.png'} alt={''} className={'size-4 cursor-pointer object-cover rounded-full overflow-clip'} width={16} height={16}/>
            </div>
            {/*comments*/}
            <div>
                {/*COMMENT*/}
                <div className={'relative'}>
                    {/*AVATAR*/}
                    <div className={'flex items-center p-2 relative gap-4'}>
                        <Image src={user} alt={''} className={'size-10 object-cover rounded-full overflow-clip'} width={40} height={40}/>
                    </div>
                    {/*DESC*/}
                    <div className={'flex flex-col items-start p-2 gap-2'}>
                        <span className={'font-medium text-sm'}>Jude bellingham</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    {/*Icon*/}
                    <Image src={'/more.png'} alt={''} width={16} height={16} className={'flex cursor-pointer size-4 p-2 gap-4'}/>
                </div>
            </div>
        </div>
    )
}
export default Comments
