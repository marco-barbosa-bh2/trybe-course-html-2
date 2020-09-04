const anos = 86400000 * 365.25;
db.clientes.aggregate([
  {$addFields: {"idadeInteira":{$subtract: [new Date(), "$dataNascimento"]}}},
  {$project: {"nome": 1, "dataNascimento": 1, "idade": {$floor: {$divide: ["$idadeInteira", anos]}}}}
]).pretty();
