import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import {GoLocation} from "react-icons/go"
import {GiTie} from "react-icons/gi"

const Sidebar = () => {
  return (
    <div>
        <img  src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/457061046_509399578163753_2633819666159008395_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=QSXbKooIywkQ7kNvgEIAQZE&_nc_ht=scontent-los2-1.xx&_nc_gid=AU36Mz3IXPsKBvahA19zC_U&oh=00_AYD2mGzSOwvGEm3OQd7_KGh-EbocnNyKDVa4Chdn7PEOOg&oe=66ED357D"  alt="user avatar" className="w-32 h-32 mx-auto rounded-full"/>
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
            <span className="text-green">Fab</span>
            Azeez
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full"> Web Developer</p>

        <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="name" ><GiTie className="w-6 h-6"/> Download Resume</a>

        {/*// social icons */}
        
        <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500  md:w-full">
          <a href="">
            <AiFillYoutube className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="">
            <AiFillGithub className="w-8 h-8 cursor-pointer"/>
          </a>
          <a href="">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
          </a>
        </div>

          {/*address*/}
          <div className="py-4 my-5 bg-gray-200 style=({marginLeft: '-1rem', marginRight: '-1rem'})">
            <div className="flex items-center justify-center space-x-2">
                <GoLocation/>
                <span>Lagos, Nigeria</span>
            </div>
            
            <p className="my-2">faborode22@gmail.com</p>
            <p className="my-2">08132721483/0810674533</p>
        </div>

        <button className=" bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 onClick={()=>window.open('faborode22@gmail.com')">Email Me</button>

        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full  bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
    </div>
  )
}

export default Sidebar