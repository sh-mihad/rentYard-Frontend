import { Link } from "react-router-dom"
import rentYardLogo from "../../assets/rentYard-log.png"
export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <img className="w-60" src={rentYardLogo} alt="RentYard Logo" />
        <Link className="bg-[#316eed] text-center text-white block my-3 rounded py-3 px-4" to="/get-start">Get Start with us</Link>
      </div>
    </div>
  )
}
