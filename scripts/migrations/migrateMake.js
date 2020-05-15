const db = require('../db')();
const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name');
  process.exit(-1);

} else {
  db.migrate.make(fileName)
    .then(
      (mig) => {
        console.log('Migration File Created!\n', mig);
        db.destroy();
      }
    )
    .catch(
      (error) => {
        console.error('Failed to create migration file', error);
        db.destroy();
      }
    )
}


