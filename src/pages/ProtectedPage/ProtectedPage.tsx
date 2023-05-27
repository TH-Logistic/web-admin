import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/use-auth"
import { ROUTES } from "../../utils/routes";

export default function ProtectedPage() {

    const { token } = useAuth();

    return token ? <Outlet /> : <Navigate to={ROUTES.AUTH} />
}