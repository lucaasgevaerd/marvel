import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CharacterDetails from "../../pages/CharacterDetails";

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<CharacterDetails />} />
        </Routes>
    )
}
