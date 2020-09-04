db.clientes.aggregate([
  {$addFields: {"idadeInteira":{$subtract: [new Date(), "$dataNascimento"]}}},
  {$addFields: {"idade": {$floor: {$divide: ["$idadeInteira", anos]}}}},
  {$match: {"idade": {$gte: 18, $lte: 25}}},
  {$count: "idade"}
]).pretty();

