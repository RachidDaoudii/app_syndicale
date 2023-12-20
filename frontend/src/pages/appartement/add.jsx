import {
  Card,
  Input,
  Button,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { AddAppartementService } from "./appartementService";
import { useForm } from "react-hook-form";

export default function AddAppartement() {
  const AddService = AddAppartementService();
  const { onSubmit, handleChange, handleChecked, dataAppartement } = AddService;

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {"Add Appartement"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {"Add new appartement"}
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
              maxLength={4}
              placeholder="number"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="number"
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
              maxLength={20}
              placeholder="city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="city"
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
              onChange={handleChange}
              name="price"
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
              maxLength={30}
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="address"
              {...watch("address", {
                required: true,
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
              maxLength={5}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="surface"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="surface"
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
              maxLength={2}
              placeholder="rooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="rooms"
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
              bedrooms
            </Typography>
            <Input
              type="number"
              maxLength={2}
              placeholder="bedrooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="bedrooms"
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
          <div className=" w-full mt-4">
            <div className="w-full max-w-[24rem]">
              <List className="flex-row">
                <ListItem
                  ripple="light"
                  className="flex items-center justify-around gap-2"
                >
                  <Typography color="gray">parking</Typography>
                  <Switch
                    color="blue"
                    onChange={handleChecked}
                    name="parking"
                  />
                </ListItem>

                <ListItem
                  ripple="light"
                  className="flex items-center justify-around gap-2"
                >
                  <Typography color="gray">garden</Typography>
                  <Switch color="blue" onChange={handleChecked} name="garden" />
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
            // onClick={handleSubmit}
          >
            save
          </Button>
        </div>
      </form>
    </Card>
  );
}
