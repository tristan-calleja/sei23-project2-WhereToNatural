const mongoose = require("mongoose");
require("dotenv").config();


mongoose.Promise = Promise;

mongoose
.connect(process.env.MONGODBLIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => {
  console.log("mongodb is running!");
})
.catch((e) => {
  console.log(e);
});

const District = require("./models/district.model");


const districts = [
  {
    places: [],
    place: [],
    name: "District 01 - Raffles Place, Marina, Cecil",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 02 - Tanjong Pagar, Chinatown",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 03 - Tiong Bahru, Alexandra, Queenstown",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 04 - Mount Faber, Telok Blangah, Harbourfront",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 05 - Buona Vista, Pasir Panjang, Clementi",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 06 - Clarke Quay, City Hall",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 07 - Bugis, Beach Road, Golden Mile",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 08 - Little India, Farrer Park",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 09 - Orchard Road, River Valley",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 10 - Bukit Timah, Holland, Balmoral",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 11 - Novena, Newton, Thomson",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 12 - Toa Payoh, Serangoon, Balestier",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 13 - Macpherson, Braddell",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 14 - Geylang, Paya Lebar, Sims",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 15 - Joo Chiat, Marina Parade, Katong",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 16 - Bedok, Upper East Coast, Siglap",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 17 - Changi, Flora, Loyang",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 18 - Tampines, Pasir Ris",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 19 - Punggol, Sengkang, Serangoon Gardens",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 20 - Ang Mo Kio, Bishan, Thomson",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 21 - Upper Bukit Timah, Ulu Pandan, Clementi Park",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 22 - Boon Lay, Jurong, Tuas",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name:
      "District 23 - Choa Chu Kang, Diary Farm, Hillview, Bukit Panjang, Bukit Batok",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 24 - Kranji, Lim Chu Kang, Tengah",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 25 - Woodlands, Admiralty",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 26 - Upper Thomson, Mandai",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 27 - Sembawang, Yishun, Admiralty",
    __v: 0,
  },
  {
    places: [],
    place: [],
    name: "District 28 - Yio Chu Kang, Seletar",
    __v: 0,
  },
];


District.deleteMany({})
    .then(() => {
        District.create(districts)
            .then(districts => {
                console.log(districts)
            })
            .catch(err => {
                console.log(err)
            })
    })
