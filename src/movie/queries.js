const getMovies = 'SELECT * FROM movies ORDER BY id ASC'
const getMovieById = 'SELECT * FROM movies WHERE id = $1'
const checkTitleExists = 'SELECT m FROM movies m WHERE m.title = $1'
const addMovie =
  'INSERT INTO movies (title, genre, release_year, director, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *'
const updateMovie =
  'UPDATE movies SET title = $1, genre = $2, release_year = $3, director = $4, rating = $5 WHERE id = $6'

module.exports = {
  getMovies,
  getMovieById,
  checkTitleExists,
  addMovie,
  updateMovie,
}
