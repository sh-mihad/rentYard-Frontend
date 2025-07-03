// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Modal({ onClose, title, children, onAction, actionLabel = "Submit" }) {

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-[#00000073]">
      <motion.div
        initial={{ opacity: 0, scale: 0.90 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white w-full max-w-3xl mx-4 md:mx-0 rounded-lg shadow-lg">
        <div className="bg-[#f0efef] flex rounded-t-lg items-center justify-between px-6 py-4 border-b border-[#E0E0E0]">
          <h2 className="text-sm text-[#6F6C6A] font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 overflow-y-auto max-h-[70vh]">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-[#E0E0E0]">
          <button
            onClick={onAction}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {actionLabel}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
