import { useState } from "react";
import axiosInstance from "../api/axiosInstance.js";


const useDeleteGuest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteGuest = async (id) => {
    setLoading(true);
    try {
      await axiosInstance.delete(`/${id}`);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { deleteGuest, loading, error };
};

export default useDeleteGuest;