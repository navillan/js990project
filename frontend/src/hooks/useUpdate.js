import { useState } from "react";
import axiosInstance from "../api/axiosInstance.js";


const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateGuest = async (id, completed) => {
    setLoading(true);
    try {
      await axiosInstance.put(`/${id}`, {
        completed: !completed
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { updateGuest, loading, error };
};

export default useUpdate;