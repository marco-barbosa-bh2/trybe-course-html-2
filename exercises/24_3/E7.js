db.movies.find(
  {"ratings": {$gt: 100, $lt:105 }},
  {"title": 1, "ratings": 1}
).pretty();

