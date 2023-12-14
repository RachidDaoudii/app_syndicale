import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  Spinner,
} from "@material-tailwind/react";
import { useClientQuery } from "../../redux/service/client/clientApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteClient } from "./clientService";

const TABLE_HEAD = [
  "Image",
  "CIN",
  "First_Name",
  "Last_Name",
  "Email",
  "Phone",
  "Actions",
];

const TABLE_ROWS = [];

export default function Client() {
  const deleteclient = deleteClient();

  const { handleDelete, deleteClientIsSuccess } = deleteclient;
  const { data, error, isLoading, refetch } = useClientQuery();

  const [dataClient, setAppartement] = useState([]);

  useEffect(() => {
    if (data) {
      setAppartement(data.data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [deleteClientIsSuccess]);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Client
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                List of all Client
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72 flex justify-end ">
                <div className="flex justify-between">
                  <Link to={"/dashboard/client/add"}>
                    <Button className="flex items-center gap-3" size="sm">
                      Add Client
                    </Button>
                  </Link>
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
                  <td colSpan={9}>
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <Spinner color="blue" />
                      <Typography color="gray">Loading...</Typography>
                    </div>
                  </td>
                </tr>
              )}
              {dataClient.length === 0 && (
                <tr>
                  <td colSpan={9}>
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <Typography color="gray">No data found</Typography>
                    </div>
                  </td>
                </tr>
              )}
              {dataClient.map(
                (
                  { _id, image, cin, first_name, last_name, email, phone },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50 text-center";

                  return (
                    <tr key={first_name}>
                      <td className={classes}>
                        <div className="flex items-center justify-center gap-3">
                          <Avatar
                            src={image}
                            alt={first_name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        </div>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {cin}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {first_name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {last_name}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {phone}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
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
                            onClick={() => handleDelete(_id)}
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
    </>
  );
}
