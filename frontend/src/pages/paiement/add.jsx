import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { PaiementService } from "./paiementService";

export default function AddPaiement() {
  const paiementService = PaiementService();
  const {
    AllClient,
    AllAppartement,
    handleChange,
    handleSubmit,
    handleSelectedClient,
    handleSelectedAppartement,
  } = paiementService;

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {"Add Paiement"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {"Add new Paiement"}
      </Typography>
      <form className="mt-8 mb-2 w-full">
        <div className="my-4 flex items-center gap-4 w-full">
          <div className="w-full">
            <Select
              size="lg"
              label="Select Client"
              name="client"
              onChange={handleSelectedClient}
            >
              {AllClient.map(({ _id, first_name, last_name, image }) => (
                <Option
                  key={first_name}
                  value={_id}
                  name="client"
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={image}
                      alt={first_name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {first_name + " " + last_name}
                  </div>
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full">
            <Select
              size="lg"
              label="Select Appartement"
              name="appartement"
              onChange={handleSelectedAppartement}
            >
              {AllAppartement.map(({ _id, number, image, status }) => (
                <Option
                  key={_id}
                  value={_id}
                  name="appartement"
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={image}
                      alt={number}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {number}
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="my-4 flex items-center gap-4 w-full mt-4">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Montant
            </Typography>
            <Input
              maxLength={5}
              type="number"
              placeholder="montant"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="montant"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Date Paiement
            </Typography>
            <Input
              maxLength={4}
              type="date"
              containerProps={{ className: "min-w-[72px]" }}
              placeholder="date Paiement"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              name="datePaiement"
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
