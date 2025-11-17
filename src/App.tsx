
import { RouterProvider } from "react-router-dom"
import { Spin, Flex } from "antd"
import { Suspense } from "react"
import router from "./router"
// import '@ant-design/v5-patch-for-react-19';


function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App;
