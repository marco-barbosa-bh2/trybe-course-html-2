db.movies.find(
  {"ratings": {$gt: 103}},
  {"title": 1, "ratings": 1}
).pretty();

