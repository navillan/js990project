import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance.js";

const UseGuests = () => {

  const [guests, setGuests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  const getGuests = async () => {
    setLoading(true);
    try {
    const response = await axiosInstance.get("/");
    
    
    setGuests(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getGuests();
  }, []);

  return { guests, error, loading, refetch: getGuests };
};


export default UseGuests;