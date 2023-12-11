module.exports.Appartemant = class Appartemant {
  constructor({
    id = null,
    name = null,
    description = null,
    price = null,
    // image = null,
    city = null,
    address = null,
    postalCode = null,
    type = null,
    surface = null,
    rooms = null,
    bedrooms = null,
    floor = null,
    elevator = null,
    parking = null,
    terrace = null,
    garden = null,
    swimmingPool = null,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    // this.image = image;
    this.city = city;
    this.address = address;
    this.postalCode = postalCode;
    this.type = type;
    this.surface = surface;
    this.rooms = rooms;
    this.bedrooms = bedrooms;
    this.floor = floor;
    this.elevator = elevator;
    this.parking = parking;
    this.terrace = terrace;
    this.garden = garden;
    this.swimmingPool = swimmingPool;
  }
};
