import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ServiceEditClient } from "./clientService";
import { useGetClientByIdQuery } from "../../redux/service/client/clientApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditClient() {
  const clientservice = ServiceEditClient();
  const { instanceClient, setInstanceClient, handleChange, onSubmit } =
    clientservice;
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetClientByIdQuery(id);
  const [client, setClient] = useState(data);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setClient(data?.data);
      setInstanceClient(data?.data);
    }
  }, [isSuccess]);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {"Edit Appartement"}
      </Typography>
      <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 flex items-center gap-4 w-full">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              CIN
            </Typography>
            <Input
              placeholder="cin"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="cin"
              value={instanceClient?.cin}
              {...watch("cin", {
                required: true,
              })}
            />

            {errors.cin && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="my-4 flex items-center gap-4 w-full mt-4">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              First Name
            </Typography>
            <Input
              type="text"
              placeholder="first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="first_name"
              value={instanceClient?.first_name}
              {...watch("first_name", {
                required: true,
              })}
            />
            {errors.first_name && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Last Name
            </Typography>
            <Input
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="last_name"
              value={instanceClient?.last_name}
              {...watch("last_name", {
                required: true,
              })}
            />
            {errors.last_name && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="my-4 flex items-center gap-4 w-full mt-4">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Email
            </Typography>
            <Input
              type="email"
              placeholder="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="email"
              value={instanceClient?.email}
              {...watch("email", {
                required: true,
              })}
            />
            {errors.email && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Phone
            </Typography>
            <Input
              type="number"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="phone"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="phone"
              value={instanceClient?.phone}
              {...watch("phone", {
                required: true,
              })}
            />
            {errors.phone && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="mt-6" color="lightBlue">
            edit
          </Button>
        </div>
      </form>
    </Card>
  );
}
