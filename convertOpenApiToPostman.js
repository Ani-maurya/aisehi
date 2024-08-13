const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Path to the converted Postman collection
const collectionPath = path.join(__dirname, 'postman-collection.json');

// Read the collection file
const collectionData = fs.readFileSync(collectionPath, 'utf8');

// Replace with your Postman API key
const postmanApiKey = 'your-postman-api-key';

// Define the request to import the collection
const options = {
    method: 'POST',
    url: 'https://api.getpostman.com/collections',
    headers: {
        'X-Api-Key': postmanApiKey,
        'Content-Type': 'application/json'
    },
    data: JSON.stringify({
        collection: JSON.parse(collectionData)
    })
};

// Make the request to import the collection
axios(options)
    .then(response => {
        console.log('Collection successfully imported to Postman:', response.data);
    })
    .catch(error => {
        console.error('Error importing collection:', error.response.data);
    });