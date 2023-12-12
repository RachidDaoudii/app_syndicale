import { useEffect, useState } from "react";
import { useAddClientMutation } from "../../redux/service/client/clientApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ClientService = () => {
  const navigate = useNavigate();
  const [instanceClient, setClient] = useState({
    cin: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [
    addClient,
    {
      isLoading: addClientIsLoading,
      isError: addClientIsError,
      isSuccess: addClientIsSuccess,
      error: addClientError,
      data: addClientData,
    },
  ] = useAddClientMutation();

  const handleChange = (e) => {
    setClient({ ...instanceClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addClient(instanceClient);
  };

  useEffect(() => {
    if (addClientIsSuccess) {
      if (addClientData.status === 500 || addClientData.status === 400) {
        return toast.error("All is Required");
      }
      toast.success("Client added successfully");
      navigate("/dashboard/client");
    }

    if (addClientIsError) {
      return toast.error("All is Required");
    }
  }, [addClientIsSuccess, addClientIsError, addClientError, addClientData]);

  return {
    handleChange,
    handleSubmit,
  };
};
