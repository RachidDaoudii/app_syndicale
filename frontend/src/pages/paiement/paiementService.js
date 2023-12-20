import { useEffect, useState } from "react";
import { useClientByStatusQuery } from "../../redux/service/client/clientApi";
import { useAppartementByStatusQuery } from "../../redux/service/appartement/appartementApi";
import {
  useAddPaiementMutation,
  useDeletePaiementMutation,
  usePaiementQuery,
  useUpdatePaimentMutation,
} from "../../redux/service/paiement/paiementApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const PaiementService = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const { id } = useParams();

  const [AllClient, setClient] = useState([]);
  const [AllAppartement, setAppartement] = useState([]);

  const [instancePaiement, setPaiement] = useState({
    client: "",
    appartement: "",
    montant: "",
    datePaiement: "",
    user: "",
  });

  const {
    data: clientData,
    isSuccess: clientIsSuccess,
    isError: clientIsError,
    error: clientError,
    isLoading: clientIsLoading,
    refetch: clientRefetch,
  } = useClientByStatusQuery();

  const {
    data: appartementData,
    isSuccess: appartementIsSuccess,
    isError: appartementIsError,
    error: appartementError,
    isLoading: appartementIsLoading,
    refetch: appartementRefetch,
  } = useAppartementByStatusQuery();

  const [
    addPaiement,
    {
      isSuccess: paiementIsSuccess,
      isError: paiementIsError,
      error: paiementError,
      isLoading: paiementIsLoading,
    },
  ] = useAddPaiementMutation();

  useEffect(() => {
    clientRefetch();
    appartementRefetch();
  }, []);

  const [
    updatePaiement,
    {
      isLoading: updatePaiementIsLoading,
      isError: updatePaiementIsError,
      isSuccess: updatePaiementIsSuccess,
      error: updatePaiementError,
      data: updatePaiementData,
    },
  ] = useUpdatePaimentMutation();

  useEffect(() => {
    if (clientIsSuccess) {
      setClient(clientData.data);
    }

    if (appartementIsSuccess) {
      setAppartement(appartementData.data);
    }

    if (paiementIsSuccess) {
      toast.success("Paiement added successfully");
      navigate("/dashboard/paiement");
    }

    if (paiementIsError) {
      toast.error("All is Required");
    }

    if (updatePaiementIsSuccess) {
      toast.success("Paiement updated successfully");
      navigate("/dashboard/paiement");
    }
  }, [
    clientIsSuccess,
    appartementIsSuccess,
    paiementIsSuccess,
    paiementIsError,
    clientIsLoading,
    paiementIsLoading,
    updatePaiementIsSuccess,
  ]);

  const handleChange = (e) => {
    setPaiement({ ...instancePaiement, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    instancePaiement.user = auth._id;
    await addPaiement(instancePaiement);
  };

  const handleSelectedClient = (value) => {
    setPaiement({ ...instancePaiement, client: value });
  };

  const handleSelectedAppartement = (value) => {
    setPaiement({ ...instancePaiement, appartement: value });
  };

  const handleUpdate = async (e) => {
    // e.preventDefault();
    instancePaiement._id = id;
    instancePaiement.user = auth._id;
    await updatePaiement(instancePaiement);
  };

  const handlePrint = (e) => {
    const objectData = {
      client: e.client,
      appartement: e.appartement,
      montant: e.montant,
      datePaiement: e.datePaiement,
    };

    const pdf = new jsPDF();

    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.text("Receipt Payment Details", 10, 10);

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");

    pdf.autoTable({
      head: [["N° Appartemant", "Price", "Client", "Date"]],
      body: [
        [
          objectData.appartement,
          objectData.montant,
          objectData.client,
          new Date(objectData.datePaiement).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        ],
      ],
    });

    pdf.save(`${e.client}.pdf`);
  };

  return {
    AllClient,
    AllAppartement,
    handleChange,
    onSubmit,
    handleSelectedClient,
    handleSelectedAppartement,
    handlePrint,
    handleUpdate,
  };
};

export const deletePaiement = () => {
  const [
    deletePaiement,
    {
      isLoading: deletePaiementIsLoading,
      isError: deletePaiementIsError,
      isSuccess: deletePaiementIsSuccess,
      error: deletePaiementError,
      data: deletePaiementData,
    },
  ] = useDeletePaiementMutation();
  const handleDelete = async (obj) => {
    const { id, appartement, client } = obj;
    await deletePaiement(obj);
  };

  useEffect(() => {
    if (deletePaiementIsSuccess) {
      toast.success("Client deleted successfully");
    }
  }, [deletePaiementIsSuccess]);

  return {
    handleDelete,
    deletePaiementIsSuccess,
  };
};

export const printAppartemant = () => {
  const [AllAppartement, setAppartement] = useState([]);
  const { data, isSuccess } = usePaiementQuery();

  useEffect(() => {
    if (isSuccess) {
      setAppartement(data.data);
    }
  }, [isSuccess]);

  const handlePrintFalse = (e) => {
    const pdf = new jsPDF();

    pdf.text("Table Appartemant ", 10, 10);

    pdf.autoTable({
      head: [["N° Appartemant", "Price", "Status", "Client", "Date"]],
      body: AllAppartement.map((paiement) => [
        paiement?.appartement?.number,
        paiement?.montant,
        {
          content: paiement?.appartement?.status ? "Paid" : "Not Paid",
          // styles: {
          //   halign: "center",
          // },
        },
        paiement?.client?.first_name + " " + paiement?.client?.last_name,
        new Date(paiement?.datePaiement).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      ]),
    });

    pdf.save(`${e.number}.pdf`);
  };

  return {
    handlePrintFalse,
  };
};

export const updatePaiement = () => {
  const [
    updatePaiement,
    {
      isLoading: updatePaiementIsLoading,
      isError: updatePaiementIsError,
      isSuccess: updatePaiementIsSuccess,
      error: updatePaiementError,
      data: updatePaiementData,
    },
  ] = useUpdatePaimentMutation();
  const handleUpdate = async (obj) => {
    const { id, appartement, client } = obj;
    await updatePaiement(obj);
  };

  useEffect(() => {
    if (updatePaiementIsSuccess) {
      toast.success("Client update successfully");
    }
  }, [updatePaiementIsSuccess]);

  const handleSelectedClient = (value) => {
    setPaiement({ ...instancePaiement, client: value });
  };

  const handleSelectedAppartement = (value) => {
    setPaiement({ ...instancePaiement, appartement: value });
  };

  return {
    handleUpdate,
    updatePaiementIsSuccess,
    handleSelectedClient,
    handleSelectedAppartement,
  };
};
