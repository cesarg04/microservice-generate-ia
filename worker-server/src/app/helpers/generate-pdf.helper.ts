import pdfDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { processString } from './upload-file-to-server';

export const generatePdf = (title: string, content: string, id: string) => {
    return new Promise((resolve, reject) => {
        const doc = new pdfDocument();
        const routePdf = path.join(__dirname, '../../../temp', `${processString(title)}.pdf`);
        
        // Error handler when creating the write stream
        const outputStream = fs.createWriteStream(routePdf);
        outputStream.on('error', (error) => {
            reject(`Error creating write stream: ${error}`);
        });

        // Error handler when finalizing the document
        doc.on('error', (error) => {
            reject(`Error generating PDF: ${error}`);
        });

        doc.fontSize(24)
            .text(title, {
                align: 'center'
            })
            .moveDown(0.5);

        doc.fontSize(18)
            .text(content, {
                align: 'justify',
                indent: 20,
                lineGap: 10
            })
            .moveDown(1);

        doc.pipe(outputStream);
        doc.end();

        outputStream.on('finish', () => {
            resolve(`PDF generated in ${routePdf}`);
        });
    });
};