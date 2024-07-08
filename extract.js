const fs = require('fs');
const path = require('path');

const directoryPath = 'scripts/';
const outputFilePath = './output.txt';

function extractTextBeforeFunctionMain(fileContent) {
  const match = fileContent.match(/(.*?)function main/s);
  return match ? match[1].trim() : null;
}

fs.readdir(directoryPath, (err, files) => {
if (err) {
    console.error('Unable to scan directory:', err);
    return;
}

const extractedTexts = files.filter(file => path.extname(file) === '.js').map(file => {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return extractTextBeforeFunctionMain(fileContent);
}).filter(text => text !== null);

const outputText = extractedTexts.join('\n\n');

fs.writeFile(outputFilePath, outputText, (err) => {
    if (err) {
    console.error('Error writing to file:', err);
    } else {
    console.log('Extracted');
    }
});
});
