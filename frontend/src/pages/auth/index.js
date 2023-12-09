import { useState } from "react";
import {
  useRegisterMutation,
  useLoginMutation,
} from "../../redux/service/auth/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterService = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterMutation();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(data);
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success("Register success");
      navigate("/auth/sign-in");
    }
    if (isRegisterError) {
      toast.error("All is Required");
    }
  }, [isRegisterSuccess, isRegisterError]);
  return {
    data,
    handleSubmit,
    handleChange,
  };
};

export const LoginService = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginMutation();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(data);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("Login success");
      navigate("/dashboard");
    }
    if (isLoginError) {
      toast.error("Email and Password  not correct");
    }
  }, [isLoginSuccess, isLoginError]);
  return {
    data,
    handleSubmit,
    handleChange,
  };
};
