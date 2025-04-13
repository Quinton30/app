const { get } = require('express/lib/response')
const pool = require('../../db')
const queries = require('./queries')

const getMovies = (req, res) => {
  pool.query(queries.getMovies, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

// In your moviesController.js (or similar)
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getMovieById, [id], (error, results) => {
    if (error) throw error

    if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    // Send the first (and only) movie object
    res.status(200).json(results.rows[0])
  })
}

const addMovie = (req, res) => {
    // Destructure and validate input types
    const { title, genre, release_year, director, rating } = req.body;
    
    // Validate required fields with type checking
    if (!title || !genre || !release_year || !rating) {
        return res.status(400).json({ error: 'All fields except director are required' });
    }

    // Convert and validate numeric fields
    const year = parseInt(release_year, 10);
    const numericRating = parseFloat(rating);
    
    if (isNaN(year) || year < 1888 || year > new Date().getFullYear()) {
        return res.status(400).json({ error: 'Invalid release year' });
    }

    if (isNaN(numericRating) || numericRating < 1 || numericRating > 9.9) {
        return res.status(400).json({ error: 'Rating must be between 1 and 9.9' });
    }

    // Validate string fields
    if (typeof title !== 'string' || title.trim().length < 2) {
        return res.status(400).json({ error: 'Title must be at least 2 characters' });
    }

    if (typeof genre !== 'string' || genre.trim().length < 2) {
        return res.status(400).json({ error: 'Genre must be at least 2 characters' });
    }

    // Process director (optional field)
    const processedDirector = director && typeof director === 'string' 
        ? director.trim() 
        : null;

    // Check for existing title
    pool.query(queries.checkTitleExists, [title.trim()], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Database operation failed' });
        }

        if (results.rows.length > 0) {
            return res.status(409).json({ error: 'Movie title already exists' });
        }

        // Insert new movie
        pool.query(
            queries.addMovie,
            [
                title.trim(),
                genre.trim(),
                year,
                processedDirector,
                numericRating.toFixed(1) // Store with 1 decimal place
            ],
            (error, results) => {
                if (error) {
                    console.error('Insert error:', error);
                    return res.status(500).json({ error: 'Failed to create movie record' });
                }
                
                res.status(201).json({
                    message: 'Movie added successfully',
                    movie: results.rows[0]
                });
            }
        );
    });
};

const updateMovie = (req, res) => {
  const id = parseInt(req.params.id)
  const { title, genre, release_year, director, rating } = req.body // Extract all fields

  pool.query(queries.getMovieById, [id], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rows.length === 0) {
      res.status(404).send('The movie does not exist in the database')
      return
    }
    // Update all fields in the query
    pool.query(
      queries.updateMovie,
      [title, genre, release_year, director, rating, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json({ message: 'Movie updated successfully' })
      }
    )
  })
}

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
}
