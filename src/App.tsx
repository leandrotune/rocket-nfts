import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"

import GlobalStyle from "../styles/global"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path=":id" element={<Cart />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )
}

export default App
