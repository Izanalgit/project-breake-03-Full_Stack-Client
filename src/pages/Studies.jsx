import StudiesComp from "../components/StudiesComp";
import PdfDownload from "../components/PdfDownload";

import {studiesData} from "../data/studiesData";

import '../css/Studies.css';

const Studies = () => {

    const { formation, prevWorks } = studiesData;

        return (
        <>
            <div className="studiesContainer">
                <StudiesComp props={{formation}} />
                <StudiesComp props={{prevWorks}} />
            </div>
            <PdfDownload />
        </>
        )
};
    
    export default Studies;