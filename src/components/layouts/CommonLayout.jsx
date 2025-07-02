// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Link, useNavigate } from "react-router-dom"
import rentYardLogo from "../../assets/rentYard-log.png"


export default function CommonLayout({ children, renderFooterLastButton, renderTopCornerButton }) {
    const navigate = useNavigate()
    return (
        <div

            className="min-h-screen flex flex-col justify-between bg-white">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-2 border-b border-[#E0E0E0] ">
                <div className="text-xl font-semibold text-blue-600">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <img src={rentYardLogo} alt="RentYard" className=" w-28" />
                    </Link>
                </div>
                {
                    renderTopCornerButton && renderTopCornerButton()
                }
            </header>

            {/* Content (children) */}
            <motion.main
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-grow px-6 py-10">{children}</motion.main>

            {/* Footer */}
            <footer className="flex items-center justify-between px-6 py-4 border-t border-[#E0E0E0]">
                <button className="text-sm text-gray-600 hover:underline" onClick={() => navigate(-1)} >Back</button>
                {
                    renderFooterLastButton && renderFooterLastButton()
                }

            </footer>
        </div>
    )
}
