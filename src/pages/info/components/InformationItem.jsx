import { useImperativeHandle, useState } from "react";
import { TbEdit } from "react-icons/tb";
import Modal from "../../../components/layouts/Modal";
import useInformation from "../../../hooks/useInformation";


export default function InformationItem({
    ref,
    title,
    isRequired,
    OnAction,
    optionalMsg = "",
    propertiesName,
    modalRenderProps,
    respectiveDataRenderProps
}) {
    const [isShowModal, setShowModal] = useState(false)
    const { informationState } = useInformation()
    useImperativeHandle(ref, () => ({
        close: () => setShowModal(false),
    }));
    let readableData = null;
    if (Array.isArray(informationState[propertiesName]) && informationState[propertiesName].length > 0) {
        readableData = informationState[propertiesName]
    }else if (!Array.isArray(informationState[propertiesName])) {
        readableData = informationState[propertiesName]
    }else{
     readableData = null;   
    }

    return (
        <div className=''>
            <div className="border border-[#E0E0E0]   rounded-xl overflow-hidden bg-white">
                <div className=" px-4 py-3 flex justify-between items-center border-[#E0E0E0]">
                    <div>
                        <p className="text-md font-medium text-gray-600">{title} {isRequired ? <span className='text-red-400'>(Required)</span> : <span className='text-gray-400 font-normal'>{`(Optional${optionalMsg && " "+ optionalMsg})`}</span>}</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="cursor-pointer">
                        {(readableData &&!Array.isArray(readableData )) ? <TbEdit className="inline text-[#316EED]" /> : <span className="text-[#316EED]">+</span>}
                        <span className="border-b border-[#316EED] text-[#316EED]">{(readableData&&!Array.isArray(readableData ))? "Edit" : "Add"}</span>
                    </button>
                </div>

                {
                    readableData && <div className="p-4 border-t border-[#E0E0E0]">
                        {
                            respectiveDataRenderProps && respectiveDataRenderProps()
                        }

                    </div>
                }
            </div>
            {

                (isShowModal && modalRenderProps) && <Modal
                    onClose={() => setShowModal(false)}
                    title={title}
                    onAction={() => {
                        OnAction(setShowModal);
                    }}
                    actionLabel={(readableData && !Array.isArray(readableData )) ? "Update" : "Add"}
                >
                    {
                        modalRenderProps()
                    }
                </Modal>
            }
        </div>
    )
}
