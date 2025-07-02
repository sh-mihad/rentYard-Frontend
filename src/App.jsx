import { RouterProvider } from "react-router-dom"
import PropertyContextProvider from "./contextProvider/PropertyContextProvider"
import { route } from "./route/route"

function App() {

  return (
  <PropertyContextProvider>
    <RouterProvider router={route} />
  </PropertyContextProvider>
  )
}

export default App
