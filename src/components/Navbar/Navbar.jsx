import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white p-6 shadow-md">
            <div className="flex items-center justify-between p=6 ">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <h2 className="md:cursor-pointer text-2xl font-bold">
                        Logo
                    </h2>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        <FaBars name={`${open ? "close" : "menu"}`} />
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                </ul>

                {/* MObile screen */}
                <ul
                    className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <li>
                        <Link to="/" className="py-4 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-4 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-4 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="py-4 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
