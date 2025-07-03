// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
export default function SectionCardLayout({ children, title,isBgRemoveFormHeader = false,isHideCheckbox=false }) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-6xl mx-auto">
            <div className="border border-[#E0E0E0]   rounded-xl overflow-hidden bg-white">
                <div className={`${!isBgRemoveFormHeader ?"bg-gray-100":""} px-4 py-2 border-b border-[#E0E0E0]`}>
                    <p className={` ${isBgRemoveFormHeader ? "text-md" : "text-sm"} font-medium text-gray-600`}>{title}</p>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
            { !isHideCheckbox &&
                <div className="my-5 flex gap-1 items-center">
                <input
                    type="checkbox"
                    id="terms"
                    className="accent-[#E0E0E0]  w-4 h-4 border border-gray-300 rounded-sm checked:bg-transparent checked:border checked:accent-white"
                />
                <label htmlFor="terms" className="flex items-center space-x-2 text-sm">
                    Accept RentYard property adding terms & condition
                </label>
            </div>
            }
        </motion.div>
    );
}
