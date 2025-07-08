import { useState } from "react";
import axiosInstance from "../api/axiosInstance.js";


const useCreateGuest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createGuest = async (guest) => {
    setLoading(true);
    try {
      await axiosInstance.post(`/`, {
        selectedDate: guest.selectedDate,
        selectedTime: guest.selectedTime,
        selectedGuest: guest.selectedGuest,
        selectedName: guest.selectedName,
        selectedEmail: guest.selectedEmail,
        selectedPhone: guest.selectedPhone,
        completed: false,
        "completed": false,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { createGuest, loading, error };
};

export default useCreateGuest;