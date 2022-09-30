import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white">
            <div className="flex items-center justify-between ">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <h2 className="md:cursor-pointer text-2xl font-bold">
                        Logo
                    </h2>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        <FaBars name={`${open ? "close" : "menu"}`} />
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8">
                    <li>
                        <Link to="/"></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
