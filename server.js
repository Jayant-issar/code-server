const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT =  3000;

const wordFilePath = path.join(__dirname, 'ele.docx');
const pdfFilePath = path.join(__dirname, 'ele_pdf.pdf');
const pdfFilePathLV = path.join(__dirname, 'ele_pdf_lv.pdf');
const zipFilePath = path.join(__dirname, 'file.zip');



app.get("/word", (req, res) => {
    if (fs.existsSync(wordFilePath)) {
        res.download(wordFilePath);
    } else {
        res.status(404).send("File not found");
    }
});

app.get("/file", (req, res) => {
    if (fs.existsSync(zipFilePath)) {
        res.download(zipFilePath);
    } else {
        res.status(404).send("File not found");
    }
});

app.get("/pdf", (req, res) => {
    if (fs.existsSync(pdfFilePathLV)) {
        res.download(pdfFilePathLV);
    } else {
        res.status(404).send("File not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})