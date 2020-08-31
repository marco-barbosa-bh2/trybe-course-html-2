const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'm169870m',
  database: 'pretty_cats'
});

connection.connect();
let cats;

const conectionQueryPromise = (args) => {
  return new Promise((resolve, reject) => {
    connection.query(args, (error, results, _fields) => {
      if (error) return reject(error)
      resolve(results)
    });
  })
};

const getAll = async () => {
  await conectionQueryPromise('SELECT * FROM cats')
  .then(results => cats = results)
  .catch(error => {
    throw error;
  });

  if(cats) {
    return cats;
  };
}; 

const getCatById = async (id) =>
  {
  await conectionQueryPromise(`SELECT name, age FROM cats WHERE id = ${id}`)
  .then(results => cats = results)
  .catch(error => {
    throw error;
  });
  return cats[0];
};

const add = async (name, age) => {
  await conectionQueryPromise(`INSERT INTO cats(name, age) VALUES ('${name}',${age})`)
  .then(results => cats = results)
  .catch(error => {
    throw error;
  });
  console.log(cats);
};

const isValid = (name, age) =>
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length < 21 &&
  age &&
  age > 0;

module.exports = {
  getAll,
  getCatById,
  add,
  isValid
};
