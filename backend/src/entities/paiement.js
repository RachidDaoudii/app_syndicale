module.exports.Paiement = class Paiement {
  constructor({ id, appartement, client, datePaiement, montant }) {
    this.id = id;
    this.appartement = appartement;
    this.client = client;
    this.datePaiement = datePaiement;
    this.montant = montant;
  }
};
