// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { onRequest } = require("firebase-functions/v2/https");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

const notFound = {
  title: "Page not found!",
  desc: "The page you were looking for was not found!",
  tags: []
};

exports.getIndex = onRequest({ cors: true }, async (req, res) => {
  const readRes = await getFirestore()
    .collection("system")
    .doc("blogIndex")
    .get();
  if (readRes.exists) {
    return res.json(readRes.data());
  } else {
    const writeResult = await getFirestore()
      .collection("system")
      .doc("blogIndex")
      .set({
        value: 0,
      });
    console.log(`Message with ID: ${writeResult.id} added.`);
    return res.json({ value: 0 });
  }
});

exports.readBlog = onRequest({ cors: true }, async (req, res) => {
  // id
  const id = req.query.id;
  if (!id) return res.status(400).send({ error: "bad request" });
  const readRes = await getFirestore()
    .collection("blogs")
    .doc(id.toString())
    .get();

  if (readRes.exists) {
    return res.json(readRes.data());
  } else {
    return res.json(notFound);
  }
});

exports.addcontact = onRequest({ cors: true }, async (req, res) => {
  // name email phone zipcode
  const name = req.query.name;
  if (!name) return res.status(400).send({ error: "bad request" });
  const email = req.query.email;
  if (!validateEmail(email))
    return res.status(400).send({ error: "bad request" });
  const phone = req.query.phone;
  if (!/^\d+$/.test(phone))
    return res.status(400).send({ error: "bad request" });
  const zipcode = req.query.zipcode;
  if (!/^\d+$/.test(zipcode))
    return res.status(400).send({ error: "bad request" });
  const writeResult = await getFirestore()
    .collection("contactus")
    .add({ name, email, phone, zipcode });
  console.log(`Message with ID: ${writeResult.id} added.`);
  res.json({ result: `ok` });
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
