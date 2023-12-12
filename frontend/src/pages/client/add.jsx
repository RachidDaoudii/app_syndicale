import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ClientService } from "./clientService";

export default function AddClient() {
  const clientService = ClientService();

  const { handleChange, handleSubmit } = clientService;
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
              CIN
            </Typography>
            <Input
              maxLength={5}
              placeholder="cin"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="cin"
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
              onChange={handleChange}
              name="image"
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
              First Name
            </Typography>
            <Input
              maxLength={5}
              type="text"
              placeholder="first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="first_name"
            />
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
              maxLength={4}
              type="text"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="last_name"
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
              Email
            </Typography>
            <Input
              type="email"
              maxLength={5}
              placeholder="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="email"
            />
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
              maxLength={4}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="phone"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="phone"
            />
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
