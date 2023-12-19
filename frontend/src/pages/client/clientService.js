import { useEffect, useState } from "react";
import {
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
} from "../../redux/service/client/clientApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const ClientService = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [instanceClient, setInstanceClient] = useState({
    cin: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    user: "",
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
    setInstanceClient({ ...instanceClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    instanceClient.user = auth._id;
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

export const deleteClient = () => {
  const [
    deleteClient,
    {
      isLoading: deleteClientIsLoading,
      isError: deleteClientIsError,
      isSuccess: deleteClientIsSuccess,
      error: deleteClientError,
      data: deleteClientData,
    },
  ] = useDeleteClientMutation();
  const handleDelete = async (id) => {
    await deleteClient({ id: id });
  };

  useEffect(() => {
    if (deleteClientIsSuccess) {
      toast.success("Client deleted successfully");
    }
  }, [deleteClientIsSuccess]);

  return {
    handleDelete,
    deleteClientIsSuccess,
  };
};

export const ServiceEditClient = () => {
  const navigate = useNavigate();

  const [instanceClient, setInstanceClient] = useState({
    cin: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    user: "",
  });

  const [
    updateClient,
    {
      isLoading: updateClientIsLoading,
      isError: updateClientIsError,
      isSuccess: updateClientIsSuccess,
      error: updateClientError,
      data: updateClientData,
    },
  ] = useUpdateClientMutation();

  const handleChange = (e) => {
    setInstanceClient({ ...instanceClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateClient(instanceClient);
  };

  useEffect(() => {
    if (updateClientIsSuccess) {
      toast.success("Client updated successfully");
      navigate("/dashboard/client");
    }
  }, [updateClientIsSuccess]);

  return {
    instanceClient,
    setInstanceClient,
    handleChange,
    handleSubmit,
  };
};
