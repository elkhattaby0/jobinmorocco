import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return null; 
}

export default NoPage;
