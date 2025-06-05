import { Dialog, DialogTitle, DialogActions, Button, DialogContent, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { FC, useContext, useState } from "react";
import { ProjectContext } from "../ProjectContext";


const FinanceModal: FC<{open: boolean, handleClose: () => void, title: string}> = ({open, handleClose, title}) => {
    const context = useContext(ProjectContext);
    const [kategorie, setKategorie] = useState("");


    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent sx={{width: '50vw'}}>
                <form>
                    <TextField sx={{width: '45vw'}} id='bezeichnung' label='Bezeichnung der Geldeinlage' variant="standard"/>

                    <FormControl fullWidth variant="standard">
                        <InputLabel id='kat-label'>Kategorie</InputLabel>
                        <Select labelId="kat-label" id='kategorie' label="Kategorie" value={kategorie} onChange={(e) => setKategorie(e.target.value)}>
                            <MenuItem value=""><i>Leer</i></MenuItem>
                            {context?.categories.map((c, index) => (
                                <MenuItem key={index} value={c.id}>{c.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <input type="date"/>
                    <TextField sx={{width: '45vw'}} id='geldgeber' label='Geldgeber' variant="standard"/>
                    <TextField sx={{width: '45vw'}} id='betrag' label='Betrag' type="number" variant="standard"/>
                    <TextField sx={{width: '45vw'}} id='notizen' label='Notizen' variant="standard"/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Speichern</Button>
                <Button onClick={handleClose}>Abbrechen</Button>
            </DialogActions>
        </Dialog>
    );
}

export default FinanceModal