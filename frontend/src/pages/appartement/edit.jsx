import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
} from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import { getAppartementById } from "./appartementService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditAppartement() {
  const { id } = useParams();

  const getAppartementService = getAppartementById();
  const {
    getAppById,
    dataAppartementById,
    handleChange,
    handleChecked,
    handleSubmit,
  } = getAppartementService;

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
      <form className="mt-8 mb-2 w-full">
        <div className="my-4 flex items-center gap-4 w-full">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Name
            </Typography>
            <Input
              placeholder="name"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="name"
              value={dataAppartementById && dataAppartementById.name}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Image
            </Typography>
            <Input
              type="file"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="image"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="image"
              onChange={handleChange}
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
              type="number"
              placeholder="price"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="price"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.price}
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
              postalCode
            </Typography>
            <Input
              type="number"
              placeholder="postalCode"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="postalCode"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.postalCode}
            />
          </div>
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
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              floor
            </Typography>
            <Input
              type="number"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="floor"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="floor"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.floor}
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
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Type
            </Typography>
            <Input
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="type"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="type"
              onChange={handleChange}
              value={dataAppartementById && dataAppartementById.type}
            />
          </div>
        </div>
        <div className="mt-4">
          <Card className="w-full max-w-[24rem]">
            <List className="flex-row">
              <ListItem
                ripple="light"
                className="flex items-center justify-around gap-2"
              >
                <Typography color="gray">elevator</Typography>
                <Switch
                  color="blue"
                  name="elevator"
                  checked={dataAppartementById.elevator}
                  onChange={handleChecked}
                />
              </ListItem>
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
                <Typography color="gray">terrace</Typography>
                <Switch
                  color="blue"
                  name="terrace"
                  checked={dataAppartementById.terrace}
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
              <ListItem
                ripple="light"
                className="flex items-center justify-around gap-2"
              >
                <Typography color="gray">swimmingPool</Typography>
                <Switch
                  color="blue"
                  name="swimmingPool"
                  checked={dataAppartementById.swimmingPool}
                  onChange={handleChecked}
                />
              </ListItem>
            </List>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="mt-6"
            color="lightBlue"
            onClick={handleSubmit}
          >
            update
          </Button>
        </div>
      </form>
    </Card>
  );
}
