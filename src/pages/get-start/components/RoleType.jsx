import usePropertyInfo from '../../../hooks/usePropertyInfo'
import { SELECT_ROLE } from '../../../reducers/propertyTypeReduces'

export default function RoleType() {
    const { propertyState, dispatch } = usePropertyInfo()
    const handleClick = (title) => {
        dispatch({ type: SELECT_ROLE, data: title })
    }
    const options = [
        {
            id: 1,
            title: "Landlord",
            description: "Owner of the property",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM21 21l-6-6m0 0l-3 3m3-3l3-3" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Realtor",
            description: "Manage property on behalf on owner",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.656 0 3-1.567 3-3.5S13.656 4 12 4 9 5.567 9 7.5 10.344 11 12 11zm0 2c-2.5 0-6 1.25-6 3.75V19h12v-2.25c0-2.5-3.5-3.75-6-3.75zM17 16l2 2m0 0l2-2m-2 2v-4" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Property management company",
            description: "For management company",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h6M9 12h6M9 16h6M4 21V5a1 1 0 011-1h14a1 1 0 011 1v16" />
                </svg>
            ),
        },
    ];
    return (
          <section className="max-w-6xl mx-auto  py-6">
            <h2 className="text-xl font-semibold text-[#272B35] mb-6">Select your role</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {options.map((item, index) => (
                    <div
                       onClick={()=>handleClick(item.title)}
                        key={index}
                        className={`${propertyState.userRole === item.title && "border border-blue-400 bg-blue-50"} border border-[#E0E0E0] rounded-lg px-5 py-4 hover:border-[#316EED] hover:bg-blue-50 transition cursor-pointer flex items-center space-x-4`}
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
