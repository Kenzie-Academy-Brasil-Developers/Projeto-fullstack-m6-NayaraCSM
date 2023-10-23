import { useContext } from "react"
import { UserContext } from "../providers/UserContext/UserContext"


export const useAuth = () => {
    const authContext = useContext(UserContext)
    return authContext
}