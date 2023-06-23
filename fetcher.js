const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

const fetcher = (url, filePath) => {
    request(url, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            fs.writeFile(filePath, body, (err) => {
                if (err) {
                    console.error('Error saving file:', err);
                } else {
                    const fileSize = Buffer.byteLength(body);
                    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
                }
            });
        }
    });
};

fetcher(url, filePath);
