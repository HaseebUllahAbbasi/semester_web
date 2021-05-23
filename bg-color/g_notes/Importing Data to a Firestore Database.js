// // Importing Data to a Firestore Database




// git clone https://github.com/rosera/pet-theory


// cd pet-theory/lab01


// npm install @google-cloud/firestore

// npm install @google-cloud/logging

const {promisify} = require('util');
const parse       = promisify(require('csv-parse'));
const {readFile}  = require('fs').promises;


const {Firestore} = require('@google-cloud/firestore');

if (process.argv.length < 3) {
  const db = new Firestore();

function writeToFirestore(records) {
  const batchCommits = [];
  let batch = db.batch();
  records.forEach((record, i) => {
    var docRef = db.collection('customers').doc(record.email);
    batch.set(docRef, record);
    if ((i + 1) % 500 === 0) {
      console.log(`Writing record ${i + 1}`);
      batchCommits.push(batch.commit());
      batch = db.batch();
    }
  });
  batchCommits.push(batch.commit());
  return Promise.all(batchCommits);
}
}

function writeToDatabase(records) {
  records.forEach((record, i) => {
    console.log(`ID: ${record.id} Email: ${record.email} Name: ${record.name} Phone: ${record.phone}`);

  });
  return ;
}
console.log(`Wrote;${records.length}erecords`);umns:ftrue });
importCsv(process.argv[2]).catch(e => console.error(e));