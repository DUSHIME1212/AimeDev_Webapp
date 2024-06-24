import Leftmenu from "@/app/components/Leftmenu";
import Rightmenu from "@/app/components/Rightmenu";
import Userstories from "@/app/components/Userstories";
import Feed from "@/app/components/Feed";
import Addpost from "@/app/components/Addpost";

const Homepage = () => {
  return (
      <div className='flex gap-6 pt-8'>
        <div className={'hidden xl:block w-[20%]'}>
            <Leftmenu/>
        </div>
        <div className={'w-full lg:w-[70%] xl:w-[50%] '}>
            <div className={'flex flex-col gap-6'}>
                <Userstories/>
                <Addpost/>
                <Feed/>
            </div>
        </div>
        <div className={'hidden lg:block w-[30%]'}>
            <Rightmenu/>
        </div>
      </div>
  )
}

export default Homepage