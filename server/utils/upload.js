const multer = require('multer');

// Set up multer to handle file uploads
const upload = multer({ dest: 'uploads/' }); // Destination directory for temporary file storage

module.exports = upload;