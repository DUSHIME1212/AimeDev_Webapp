import React from 'react'
import Post from "@/app/components/Post";

const Feed = () => {
    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg -z-20 relative gap-4 justify-between text-sm'}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default Feed
