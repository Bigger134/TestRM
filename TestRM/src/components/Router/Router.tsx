import { Route, Routes } from "react-router-dom"
import Main from "../CharactersList/CharactersList"
import CharacterProfile from "../CharacterProfile/CharacterProfile"

const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route index path="/character/:id" element={<CharacterProfile />} />
        </Routes>
    )
}

export default Router