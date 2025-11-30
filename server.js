const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT =  3000;

const wordFilePath = path.join(__dirname, 'ele.docx');
const pdfFilePath = path.join(__dirname, 'ele_pdf.pdf');

app.get("/word", (req, res) => {
    if (fs.existsSync(wordFilePath)) {
        res.download(wordFilePath);
    } else {
        res.status(404).send("File not found");
    }
});

app.get("/pdf", (req, res) => {
    if (fs.existsSync(pdfFilePath)) {
        res.download(pdfFilePath);
    } else {
        res.status(404).send("File not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})