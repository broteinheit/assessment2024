import { useContext, useState } from "react";
import { ProjectContext } from "../ProjectContext";
import { IconButton, Tooltip } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import { OpenInNew } from "@mui/icons-material";

interface Geldeinlage {
    bezeichnung: string,
    kategorie: string,
    datum: Date,
    geldgeber: string,
    betrag: number,
    notizen: string
}

const FinanceMask = () => {
    const context = useContext(ProjectContext);
    const [geldeinlagen, setGeldeinalgen] = useState<Geldeinlage[]>([{bezeichnung: "test", kategorie: '65b66262cf9ba9b44faf496a', datum: new Date('2025-06-05'), geldgeber: 'test', betrag: 1000, notizen: '1234'}]);
    
    console.log(context?.categories);

    return (
        <div>
            <div>
                <button>Neue Geldeinlage erfassen</button>
            </div>
            <div>
                <h3>Erfasste Geldeinlagen</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Datum</th>
                            <th>Bezeichnung</th>
                            <th>Kategorie</th>
                            <th>Betrag</th>
                            <th>Geldgeber</th>
                            <th>Notizen</th>
                            <th>Öffnen</th>
                        </tr>
                    </thead>
                        <tbody>
                        {geldeinlagen?.map((g, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{g.datum.getDate().toString().padStart(2, '0')}.{(g.datum.getMonth() + 1).toString().padStart(2, '0')}.{g.datum.getFullYear()}</td>
                                <td>{g.bezeichnung}</td>
                                <td>{context?.categories.find(c => c.id === g.kategorie)?.name ?? ''}</td>
                                <td>{g.betrag}</td>
                                <td>{g.geldgeber}</td>
                                <td><Tooltip title={g.notizen}><MessageIcon/></Tooltip></td>
                                <td><IconButton><OpenInNew/></IconButton></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FinanceMask;