import { useState } from "react";
import FinanceMask from "./masks/FinanceMask";
import PlanningMask from "./masks/PlanningMask";

enum Masks {Finance, Planning}

const ProjectMask = () => {
    const availableMasks = [Masks.Finance, Masks.Planning];
    const [selectedMask, setSelectedMask] = useState(Masks.Finance);
    
    const renderMask = () => {
        switch (selectedMask) {
            case Masks.Finance: return <FinanceMask/>;
            case Masks.Planning: return <PlanningMask/>;
            default: return <></>;
        }
    };

    return (
        <div style={{marginLeft: '1rem', marginRight: '1rem'}}>
            <div style={{marginBottom: '1rem'}}>
                <strong>Mask:</strong> &nbsp;
                {availableMasks.map(m => <button key={m} onClick={() => setSelectedMask(m)} style={{marginRight: '1rem'}}>{Masks[m]}</button>)}
            </div>
            {renderMask()}
        </div>
    );
};

export default ProjectMask;