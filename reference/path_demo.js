const path = require("path");

// Base File Name
console.log(path.basename(__filename));

// Directory Name
console.log(path.dirname(__filename));

// Extension Name
console.log(path.extname(__filename));

// Create Parse Name
console.log(path.parse(__filename));

// Concatenate Path
// ../test/index.html
console.log(path.join(__dirname, "test", "index.html"));
