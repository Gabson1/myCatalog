const db = require('../db')();
const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name');
  process.exit(-1);

} else {
  db.seed.make(fileName)
    .then(
      (mig) => {
        console.log('Seed File Created!\n', mig);
        db.destroy();
      }
    )
    .catch(
      (error) => {
        console.error('Failed to create seed file', error);
        db.destroy();
      }
    )
}


