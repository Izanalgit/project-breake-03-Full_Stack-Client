import StudiesComp from "../components/StudiesComp";

import {studiesData} from "../data/studiesData";

// FALTA EL PDF DEL CV

const Studies = () => {

    const {
        formation,
        prevWorks,
        curriculum
    } = studiesData;

        return (
        <>
            <StudiesComp props={{formation}} />
            <StudiesComp props={{prevWorks}} />
        </>
        )
};
    
    export default Studies;