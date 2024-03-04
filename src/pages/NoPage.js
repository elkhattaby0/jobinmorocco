import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate()
    return navigate('/')
}

export default NoPage;