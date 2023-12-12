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

export default function AddAppartement() {
  const AddService = AddAppartementService();
  const { handleSubmit, handleChange, handleChecked, dataAppartement } =
    AddService;

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {"Add Appartement"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {"Add new appartement"}
      </Typography>
      <form className="mt-8 mb-2 w-full">
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
              maxLength={5}
              placeholder="number"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="number"
            />
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
              maxLength={5}
              placeholder="city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="city"
            />
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
              maxLength={5}
              type="number"
              placeholder="price"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="price"
            />
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
              maxLength={4}
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="address"
            />
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
              maxLength={4}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="surface"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="surface"
            />
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
              maxLength={5}
              placeholder="rooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="rooms"
            />
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
              maxLength={5}
              placeholder="bedrooms"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="bedrooms"
            />
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
            onClick={handleSubmit}
          >
            save
          </Button>
        </div>
      </form>
    </Card>
  );
}
