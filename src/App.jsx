import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { CiBank, CiMedicalCase } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { GrTag } from "react-icons/gr";

import Card from "./Card";

function App() {
  return (
    <div>
      <header className="flex sticky top-0 bg-white py-2">
        <img className=" ml-3 mt-3 xl:ml-10" src="/Zoom_logo.svg" alt="Zoom logo" />
        <nav className="flex-1">
          <ul className="flex float-right mt-3 font-semibold">
            <li className=" text-nav-blue pr-5 md:hidden">Join</li>
            <li className=" text-nav-blue pr-5 md:hidden">Host</li>

          </ul>

          <ul className="hidden xl:flex font-semibold mt-3 ml-10">
            <li className=" text-light-gray">Products</li>
            <li className=" text-light-gray ml-10">Solutions</li>
            <li className=" text-light-gray ml-10">Resources</li>
            <li className=" text-light-gray ml-10">Plans & Pricing</li>

          </ul>

        </nav>

        <button className=" border rounded-full text-zoom-blue mr-2 hover:bg-lighter-blue py-2 px-6 hidden md:block">Contact Sales</button>
        <button className=" border rounded-full text-zoom-blue mr-2 hover:bg-lighter-blue py-2 px-6 hidden md:block">Sign Up Free</button>

        <RxHamburgerMenu className=" text-light-blue text-2xl mt-3 mr-3 xl:hidden" />

      </header>

      <div className="md:flex md:w-full">
        <div className="md:w-1/2">
          <h1 className=" text-4xl ml-5 font-semibold mt-20 font-sans xl:text-7xl md:ml-10">
            One platform
            <br />
            to <span className=" text-zoom-blue">connect</span>
          </h1>
          <p className="mt-5 ml-5 font-medium font-sans leading-5 md:ml-10 xl:text-xl">
            Bring teams together, reimagine workspaces, engage new audiences, and delight your customers —
            all on the Zoom platform you know and love.</p>

          <div className="">
            <button className="ml-5 bg-zoom-blue rounded-full text-white mt-10 hover:bg-dark-blue py-2 px-6 md:ml-10">Plans & Pricing</button>
            <button className="ml-5 text-zoom-blue text-lg md:ml-10">Sign up, it's free</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="gallery-view.png" className="" alt="Image of a Zoom call on a computer" />
        </div>

      </div>

      <div className=" bg-darker-blue md:flex md:h-80 md:mt-5">
        <img className="" src="/zm-product-wheel.png" alt="Zooms productwheel" />
        <div className="md:flex-col md:mt-20">
          <h2 className=" text-lighter-blue ml-5 text-3xl font-semibold xl:text-5xl">Make work less work</h2>
          <p className="text-lighter-blue ml-5 mt-3 mr-20 xl:text-xl">
            Securely connect and collaborate so you can  work better together.
            Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
          <div className="mt-3 pb-5">
            <a href="" className="text-lighter-blue ml-5 hover:text-white font-semibold xl:text-xl">Discover the possibilites</a>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-full md:py-32">

        <div className="md:w-1/2">
          <h2 className="text-gray ml-5 text-2xl font-semibold mt-5 md:ml-10 xl:text-4xl">Powering organizations across
            industries and geographies</h2>
          <p className="ml-5 mt-3 text-gray md:ml-10 xl:text-xl">Zoom helps consolidate communications, connect people,
            and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
          <button className="ml-5 bg-turqoise rounded-full mt-4 text-darker-blue py-2 px-6 md:ml-10">Explore Industry Solutions</button>

        </div>

        <div className="mt-5 mr-5 text-darker-blue md:w-1/2">
          <Card icon={<FaGraduationCap />} title={"EDUCATION"} />
          <Card icon={<SlWallet />} title={"Financial Services"} />
          <Card icon={<CiBank />} title={"Government"} />
          <Card icon={<CiMedicalCase />} title={"Healthcare"} />
          <Card icon={<BsBoxSeam />} title={"Manufacturing"} />
          <Card icon={<GrTag />} title={"Retail"} />

        </div>
      </div>
    </div>
  );
}

export default App;