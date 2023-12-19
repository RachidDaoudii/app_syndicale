import { useEffect, useState } from "react";
import { useClientByStatusQuery } from "../../redux/service/client/clientApi";
import { useAppartementByStatusQuery } from "../../redux/service/appartement/appartementApi";
import {
  useAddPaiementMutation,
  useDeletePaiementMutation,
  usePaiementQuery,
} from "../../redux/service/paiement/paiementApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";

export const PaiementService = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

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
  }, [
    clientIsSuccess,
    appartementIsSuccess,
    paiementIsSuccess,
    paiementIsError,
    clientIsLoading,
    paiementIsLoading,
  ]);

  const handleChange = (e) => {
    setPaiement({ ...instancePaiement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    instancePaiement.user = auth._id;
    await addPaiement(instancePaiement);
  };

  const handleSelectedClient = (value) => {
    setPaiement({ ...instancePaiement, client: value });
  };

  const handleSelectedAppartement = (value) => {
    setPaiement({ ...instancePaiement, appartement: value });
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
    handleSubmit,
    handleSelectedClient,
    handleSelectedAppartement,
    handlePrint,
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
