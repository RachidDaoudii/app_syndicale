import { useEffect, useState } from "react";
import {
  useAddAppartementMutation,
  useDeleteAppartementMutation,
  useGetAppartementByIdMutation,
  useUpdateAppartementMutation,
} from "../../redux/service/appartement/appartementApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddAppartementService = () => {
  const navigate = useNavigate();
  const [dataAppartement, setAppartement] = useState({
    number: "",
    price: 0,
    address: "",
    city: "",
    surface: 0,
    rooms: 0,
    bedrooms: 0,
    parking: false,
    garden: false,
  });
  const [addAppartement, { data, error, isLoading, isSuccess, isError }] =
    useAddAppartementMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addAppartement(dataAppartement);
  };

  const handleChange = async (e) => {
    setAppartement({ ...dataAppartement, [e.target.name]: e.target.value });
  };

  const handleChecked = async (e) => {
    setAppartement({ ...dataAppartement, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      if (data.status === 500) {
        return toast.error("All is Required");
      }
      toast.success("Appartement added successfully");
      navigate("/dashboard/appartement");
    }

    if (isError) {
      toast.error("All is Required");
    }
  }, [isSuccess, isError]);

  return {
    handleSubmit,
    handleChange,
    handleChecked,
    dataAppartement,
  };
};

export const deleteAppartement = () => {
  const [deleteAppartement, { isSuccess }] = useDeleteAppartementMutation();
  const handleDelete = async (id) => {
    await deleteAppartement({ id: id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Appartement deleted successfully");
    }
  }, [isSuccess]);

  return {
    handleDelete,
    isSuccess,
  };
};

export const getAppartementById = () => {
  const navigate = useNavigate();

  const [dataAppartementById, setData] = useState({
    id: "",
    name: "",
    price: 0,
    image: "",
    address: "",
    postalCode: "",
    city: "",
    type: "",
    surface: 0,
    rooms: 0,
    bedrooms: 0,
    floor: 0,
    elevator: false,
    parking: false,
    terrace: false,
    garden: false,
    swimmingPool: false,
  });
  const [getAppById, { isSuccess, data }] = useGetAppartementByIdMutation();

  const [
    updateAppartement,
    { isSuccess: isSuccessUpdate, isError: isErrorUpdate, data: dataUpdate },
  ] = useUpdateAppartementMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(data.data);
    }
    if (isSuccessUpdate) {
      toast.success("Appartement updated successfully");
      navigate("/dashboard/appartement");
    }
  }, [isSuccess, isSuccessUpdate]);

  const handleChange = async (e) => {
    setData({ ...dataAppartementById, [e.target.name]: e.target.value });
  };

  const handleChecked = async (e) => {
    setData({
      ...dataAppartementById,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateAppartement(dataAppartementById);
  };

  return {
    getAppById,
    isSuccess,
    dataAppartementById,
    handleChange,
    handleChecked,
    handleSubmit,
  };
};
