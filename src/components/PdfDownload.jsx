import React from "react";

const PdfDownload = () => {

    const onButtonClick = () => {
        const pdfUrl = 'Curriculumvitae.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculumvitae.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={onButtonClick}>
            Descargar PDF
        </button>
    );

}

export default PdfDownload;