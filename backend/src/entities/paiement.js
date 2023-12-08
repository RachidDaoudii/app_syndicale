module.exports.Paiement = class Paiement {
  constructor({ idAppartement, idPaiement, datePaiement, montantPaiement }) {
    this.idAppartement = idAppartement;
    this.idPaiement = idPaiement;
    this.datePaiement = datePaiement;
    this.montantPaiement = montantPaiement;
  }
};
