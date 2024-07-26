import React from "react";

const PdfDownload = () => {

    const onButtonClick = () => {
        const pdfUrl = '/project-breake-03-Full_Stack-Client/Curriculumvitae.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_IAR.pdf";
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