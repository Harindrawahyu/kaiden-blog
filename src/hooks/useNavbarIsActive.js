import { useLocation } from "react-router";


export default function useNavbarIsActive(path) {
    const location = useLocation();
    return location.pathname === path;
}