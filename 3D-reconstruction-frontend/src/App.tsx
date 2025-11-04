import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
  return (
    <>
      <h1>3D-reconstruction-platform</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
