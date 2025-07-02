import { Children } from "react"

export default function Filed({ children,label,isRequiredFlag=false }) {
    const {props} = Children.only(children)
    return (
        <div>
            <label htmlFor={props.id || props.name} className="block text-xs font-medium text-gray-700 mb-1">
                {label}{isRequiredFlag&&"*"}
            </label>
            {
                children
            }
        </div>
    )
}
