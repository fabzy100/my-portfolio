
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
      <div className="col-span-3 p-4 text-center bg-white ">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 bg-white  lg:col-span-3 rounded-2xl">
        <Navbar/>
      <Component {...pageProps} />
      
      </div>
    </div>
)
}

export default App