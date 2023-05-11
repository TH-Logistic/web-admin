import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/use-auth"

export default function ProtectedPage() {

    const { token } = useAuth();

    return token ? <Outlet /> : <Navigate to='/auth' />
}