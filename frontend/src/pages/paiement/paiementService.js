import { useEffect, useState } from "react";
import { useClientQuery } from "../../redux/service/client/clientApi";
import { useAppartementByStatusQuery } from "../../redux/service/appartement/appartementApi";
import { useAddPaiementMutation } from "../../redux/service/paiement/paiementApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
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

  const { data: clientData, isSuccess: clientIsSuccess } = useClientQuery();

  const { data: appartementData, isSuccess: appartementIsSuccess } =
    useAppartementByStatusQuery();

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

    const formattedData = Object.entries(objectData)
      .map(([key, value]) => `${key} : ${value}`)
      .join(
        "\n\n__________________________________________________________________________\n\n"
      );

    pdf.text(formattedData, 10, 20);

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
