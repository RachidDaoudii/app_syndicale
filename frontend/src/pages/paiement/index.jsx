import { PencilIcon, TrashIcon, PrinterIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Input,
  IconButton,
  Tooltip,
  Spinner,
  Chip,
} from "@material-tailwind/react";
import { usePaiementQuery } from "../../redux/service/paiement/paiementApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PaiementService } from "./paiementService";

const TABLE_HEAD = [
  "Client",
  "Appartement",
  "montant",
  "datePaiement",
  "Actions",
];

const TABLE_ROWS = [];

export default function Paiement() {
  const { data, error, isLoading, refetch } = usePaiementQuery();

  const paiementService = PaiementService();
  const { handlePrint } = paiementService;

  const [dataClient, setAppartement] = useState([]);

  useEffect(() => {
    if (data) {
      setAppartement(data.data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Paiement
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                List of all paiement
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <Link to={"/dashboard/paiement/add"}>
                <Button className="flex items-center gap-3" size="sm">
                  Add Paiement
                </Button>
              </Link>
              <div className="w-full md:w-72 flex justify-end gab-4">
                <div
                  className=" w-4/5 flex justify-between gap-4 items-center"
                  style={{ width: 800 }}
                >
                  <div className="md:w-72 w-full">
                    <Input
                      label="Search"
                      // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                  </div>
                  <Button className="flex items-center gap-3" size="sm">
                    <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-center"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={5}>
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <Spinner color="blue" />
                      <Typography color="gray">Loading...</Typography>
                    </div>
                  </td>
                </tr>
              )}
              {dataClient.map(
                (
                  { _id, appartement, client, datePaiement, montant },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50 text-center";

                  return (
                    <tr key={index}>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {client?.first_name + " " + client?.last_name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={appartement?.number}
                          color={
                            appartement?.status === true
                              ? "green"
                              : "paid" === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {montant}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <div className="flex items-center justify-center gap-3 ">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {new Date(datePaiement).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <Tooltip content=" Imprimer Paiement">
                          <IconButton
                            id={_id}
                            variant="text"
                            onClick={() =>
                              handlePrint({
                                client:
                                  client?.first_name + " " + client?.last_name,
                                appartement: appartement?.name,
                                montant: montant,
                                datePaiement: datePaiement,
                              })
                            }
                          >
                            <PrinterIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit Client">
                          <Link to={`/dashboard/client/edit/${_id}`}>
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Delete Client">
                          <IconButton
                            id={_id}
                            variant="text"
                            //   onClick={() => handleDelete(_id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
