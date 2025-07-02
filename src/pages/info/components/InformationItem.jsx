import { useImperativeHandle, useState } from "react";
import Modal from "../../../components/layouts/Modal";

export default function InformationItem({ ref, title, isRequired, OnAction, modalRenderProps, }) {
    const [isShowModal, setShowModal] = useState(false)
    const isShowContent = false;
    useImperativeHandle(ref, () => ({
        close: () => setShowModal(false),
    }));

    return (
        <div className=''>
            <div className="border border-[#E0E0E0]   rounded-xl overflow-hidden bg-white">
                <div className=" px-4 py-3 flex justify-between items-center border-[#E0E0E0]">
                    <div>
                        <p className="text-md font-medium text-gray-600">{title} {isRequired && <span className='text-red-400'>(Required)</span>}</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="cursor-pointer">
                        <span className="text-[#316EED]">+</span>
                        <span className="border-b border-[#316EED] text-[#316EED]">Add</span>
                    </button>
                </div>
                {
                    isShowContent && <div className="p-4 border-t border-[#E0E0E0]">
                        <p className='text-sm'>hello mello koi gello ar aslo na sala mara khailam keno ami kichu buji na</p>
                    </div>
                }
            </div>
            {

                (isShowModal && modalRenderProps) && <Modal
                    onClose={() => setShowModal(false)}
                    title="Property Address"
                    onAction={() => {
                        OnAction(setShowModal);
                    }}
                    actionLabel="Add"
                >
                    {
                        modalRenderProps()
                    }
                </Modal>
            }
        </div>
    )
}
