import StudiesComp from "../components/StudiesComp";

import {studiesData} from "../data/studiesData";

// FALTA EL PDF DEL CV

import '../css/Studies.css';

const Studies = () => {

    const {
        formation,
        prevWorks,
        curriculum
    } = studiesData;

        return (
        <div className="studiesContainer">
            <StudiesComp props={{formation}} />
            <StudiesComp props={{prevWorks}} />
        </div>
        )
};
    
    export default Studies;