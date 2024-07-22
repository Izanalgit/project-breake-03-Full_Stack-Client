import { useState } from "react";

const StudiesComp = ({props}) => {
    const [studies, setStudies] = useState(props);

    if (studies.formation)
        return (
            <div className="studies">
                <h3>Formación</h3>

                    <h4>Bootcamp :</h4>
                    <p> 
                        {studies.formation.bootcamp[0]} :
                        <strong>{studies.formation.bootcamp[1]}</strong>
                    </p>

                    <h4>Ciclo superior :</h4>
                    <p>
                        {studies.formation.postBach[0]} :
                        <strong>{studies.formation.postBach[1]}</strong>
                    </p>
                    
                    <h4>Bachiller :</h4>
                    <p>
                        {studies.formation.bachiller[0]} :
                        <strong>{studies.formation.bachiller[1]}</strong>
                    </p>
                    
                    <h4>ESO :</h4>
                    <p>
                        {studies.formation.ESO[0]} :
                        <strong>{studies.formation.ESO[1]}</strong>
                    </p>

            </div>
        );
    
    if(studies.prevWorks)
        return (
            <div className="studies">
                <h3>Trabajos anteriores</h3>
                {studies.prevWorks.map((work,index)=>(
                    <h4 key={'preWork'+index}>{work[0]} <strong>{work[1]}</strong></h4>
                ))}
            </div>
        );
}

export default StudiesComp;