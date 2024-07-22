import StudiesComp from "../components/StudiesComp";

import {studiesData} from "../data/studiesData";

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