import React from 'react'
import Image from "next/image";

const Addpost = () => {
    return (
        <div className={'p-4 flex bg-white shadow-md' +
            ' rounded-lg -z-20 relative gap-4 justify-between text-sm'}>
            <Image src={'https://etherealechoesart.com/wp-content/uploads/2024/04/1.png'} alt={''} className={'size-12 object-cover rounded-full'} width={48} height={48} />
            <div className={' flex-1'}>
                <div className={'flex gap-4'}>
                    <textarea name="" id="" className={'p-2 flex-1 outline-none resize-none bg-sky-50 rounded-lg'} placeholder={'whats on your mind...'}>

                    </textarea>
                    <Image src={'/emoji.png'} alt={''} className={'size-5 cursor-pointer self-end object-cover rounded-full'} width={20} height={20} />
                </div>
                <div className={'flex items-center flex-wrap text-gray-500 gap-4 mt-4'}>
                    <div className={'relative flex items-center gap-2'}>
                        <Image src={'/addImage.png'} alt={''} width={16} height={16}/>
                        Home
                    </div>
                    <div className={'relative flex items-center gap-2'}>
                        <Image src={'/addVideo.png'} alt={''} width={16} height={16}/>
                        Video
                    </div>
                    <div className={'relative flex items-center gap-2'}>
                        <Image src={'/poll.png'} alt={''} width={16} height={16}/>
                        Poll
                    </div>
                    <div className={'relative flex items-center gap-2'}>
                        <Image src={'/addEvent.png'} alt={''} width={16} height={16}/>
                        Event
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Addpost
