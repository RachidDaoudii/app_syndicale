import {
  Card,
  Input,
  Button,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { getAppartementById } from "./appartementService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EditAppartement() {
  const { id } = useParams();

  const getAppartementService = getAppartementById();
  const {
    getAppById,
    dataAppartementById,
    handleChange,
    handleChecked,
    onSubmit,
  } = getAppartementService;

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      dataAppartementById.id = id;
      getAppById(id);
    }
  }, [id]);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {"Edit Appartement"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {"Edit appartement"}
      </Typography>
      <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 flex items-center gap-4 w-full">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Number
            </Typography>
            <Input
              placeholder="number"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="number"
              value={dataAppartementById && dataAppartementById.number}
              {...watch("number", {
                required: true,
                minLength: 4,
              })}
            />
            {errors.number && (
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
              City
            </Typography>
            <Input
              type="text"
              placeholder="city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="city"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.city}
              {...watch("city", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
            {errors.city && (
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
              Price
            </Typography>
            <Input
              type="number"
              placeholder="price"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="price"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.price}
              {...watch("price", {
                required: true,
              })}
            />
            {errors.price && (
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
              address
            </Typography>
            <Input
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="address"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.address}
              {...watch("address", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
            {errors.address && (
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
              surface
            </Typography>
            <Input
              type="number"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="surface"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="surface"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.surface}
              {...watch("surface", {
                required: true,
              })}
            />
            {errors.surface && (
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
              rooms
            </Typography>
            <Input
              type="number"
              placeholder="rooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="rooms"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.rooms}
              {...watch("rooms", {
                required: true,
              })}
            />
            {errors.rooms && (
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
              Bedrooms
            </Typography>
            <Input
              type="number"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="bedrooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="bedrooms"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.bedrooms}
              {...watch("bedrooms", {
                required: true,
              })}
            />
            {errors.bedrooms && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <div className="w-full max-w-[24rem]">
              <List className="flex-row">
                <ListItem
                  ripple="light"
                  className="flex items-center justify-around gap-2"
                >
                  <Typography color="gray">parking</Typography>
                  <Switch
                    color="blue"
                    name="parking"
                    checked={dataAppartementById.parking}
                    onChange={handleChecked}
                  />
                </ListItem>

                <ListItem
                  ripple="light"
                  className="flex items-center justify-around gap-2"
                >
                  <Typography color="gray">garden</Typography>
                  <Switch
                    color="blue"
                    name="garden"
                    checked={dataAppartementById.garden}
                    onChange={handleChecked}
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="mt-6"
            color="lightBlue"
          >
            update
          </Button>
        </div>
      </form>
    </Card>
  );
}
