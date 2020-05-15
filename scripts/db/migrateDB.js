const db = require('../db')();

db.migrate.latest()
  .then(() => {
    console.log('Done migrating DB')
    db.destroy();
  })
  .catch((error) => {
    console.log('Error in migrating DB', error);
    db.destroy();
  })
