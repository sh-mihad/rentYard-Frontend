
export default function PropertyTypeOption({ props }) {
    const {propertyType,setPropertyType} = props || {}
    
    const options = [
        {
            id: 1,
            title: "Single House Property",
            description: "Single unit house for single family",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-text-[#272B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l9-9 9 9M4 10v10h6v-6h4v6h6V10"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Apartments complex",
            description: "Multiple unit house for families",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-text-[#272B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 21h18M6 21V7h12v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01"
                    />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Condominiums",
            description: "Multiple unit house for families",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-text-[#272B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 21V9a1 1 0 011-1h3V4h8v4h3a1 1 0 011 1v12H4z"
                    />
                </svg>
            ),
        },
    ];
    return (
        <section className="max-w-6xl mx-auto  py-6">
            <h2 className="text-xl font-semibold text-[#272B35] mb-6">Property type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {options.map((item, index) => (
                    <div
                       onClick={()=>setPropertyType(item.title)}
                        key={index}
                        className={`${propertyType === item.title && "border border-blue-400 bg-blue-50"} border border-[#E0E0E0] rounded-lg px-5 py-4 hover:border-[#316EED] hover:bg-blue-50 transition cursor-pointer flex items-center space-x-4`}
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                            <h3 className="font-semibold text-[#272B35]">{item.title}</h3>
                            <p className="text-sm text-[#777980]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
