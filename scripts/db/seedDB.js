const db = require('../db')();

db.seed.run()
  .then(() => {
    console.log('Done seeding DB')
    db.destroy();
  })
  .catch((error) => {
    console.log('Error in seeding DB', error);
    db.destroy();
  })
