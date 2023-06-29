import { useState } from "react";

import { Document, DocumentProps, Page, PageProps, pdfjs } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};
const PDFReader = ({ DocumentProps, PageProps }: { DocumentProps: DocumentProps, PageProps?: PageProps }) => {
    const [numPages, setNumPages] = useState(0);
    
    const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => setNumPages(numPages);
    return (
        <main className="PDFReader-container">
            <Document
                {...DocumentProps}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
            > 
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        {...PageProps}
                    />
                ))}
            </Document>
        </main>
    );
}

export default PDFReader;