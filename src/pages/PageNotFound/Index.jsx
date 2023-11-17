import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/all");
  }, []);

  return;
};

export default PageNotFound;
