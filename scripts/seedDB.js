const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/devslist"
);

const cardSeed = [{
    "id": 1,
    "name": "Tommy Pickles",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/nickelodeon/images/8/8c/Tommy_Pickles_in_Newer_Years.png/revision/latest?cb=20190206172923",
  },
  {
    "id": 2,
    "name": "Helga G. Pataki",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/heyarnold/images/f/f2/Tumblr_oqrtdqxfH91tr6wqbo1_1280.png/revision/latest?cb=20170617031605",
  },
  {
    "id": 3,
    "name": "Angelika Pickles",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/rugrats/images/1/19/Angelica_Pickles.png/revision/latest?cb=20130515182442",
  },
  {
    "id": 4,
    "name": "Oblina",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/aaahhrealmonsters/images/b/bc/Oblina_Shrugging.png/revision/latest?cb=20171017163339",
  },
  {
    "id": 5,
    "name": "Eliza Thornberry",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/wildthornberrys/images/b/bd/Eliza_Thornberry.gif/revision/latest?cb=20180504144842",
  },
  {
    "id": 6,
    "name": "Susie Carmichael",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/rugrats/images/f/f1/Susie_Carmichael.png/revision/latest?cb=20130515193955",
  },
  {
    "id": 7,
    "name": "Donnie Thornberry",
    "skills": "front end, back end, design, data storing,",
    "image": "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/41965/1534785051-14599-1816/Donnie_Thornberry.png",
  },
  {
    "id": 8,
    "name": "Gary The Snail",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221",
  },
  {
    "id": 9,
    "name": "Phil DeVille",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/rugrats/images/b/b4/Phil_DeVille.png/revision/latest?cb=20130515193923",
  },
  {
    "id": 10,
    "name": "Lillian DeVille",
    "skills": "front end, back end, design, data storing,",
    "image": "https://pre00.deviantart.net/162f/th/pre/f/2015/310/3/8/untitled_drawing_by_mrsonic777-d9fpb98.png",
  },
  {
    "id": 11,
    "name": "Cat and Dog",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/p__/images/f/fe/CatDog-Episode-1--Dog-Gone.jpg.gif/revision/latest?cb=20120406185426&path-prefix=protagonist",
  },
  {
    "id": 12,
    "name": "Squidward",
    "skills": "front end, back end, design, data storing,",
    "image": "https://cdn-images-1.medium.com/max/1200/1*DCo5LIbgIWrFIOfl3UAMpA.png",
  },
  {
    "id": 13,
    "name": "Spongebob",
    "skills": "front end, back end, design, data storing,",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png",
  },
  {
    "id": 14,
    "name": "Doug Funnie",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/doug/images/a/a5/Doug_Funnie2.png/revision/latest?cb=20180531191407",
  },
  {
    "id": 15,
    "name": "Sandy Cheeks",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/spongebob/images/8/84/Sandy_stock_art.png/revision/latest?cb=20181202012358",
  },
  {
    "id": 16,
    "name": "Patty Mayonaise",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/nickelodeon/images/1/1e/Patti_Mayonnaise.png/revision/latest?cb=20161009032853",
  },
  {
    "id": 17,
    "name": "Arnold Shortman",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/nickelodeon/images/6/67/Arnold_Shortman-2018.png/revision/latest?cb=20181225170445",
  },
  {
    "id": 18,
    "name": "Chuckie Finster",
    "skills": "front end, back end, design, data storing,",
    "image": "https://vignette.wikia.nocookie.net/nickelodeon/images/a/ad/Chuckie_Finster.png/revision/latest?cb=20150411032458",
  }
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });