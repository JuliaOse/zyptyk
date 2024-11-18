// precomputeMap.js
const fs = require("fs");
const { getMapJSON } = require("dotted-map");

const mapJsonString = getMapJSON({ height: 60, grid: "diagonal" });

// Write the JSON string to a file
fs.writeFileSync("./myMap.json", mapJsonString);
console.log("Map JSON precomputed and saved to public/myMap.json");
