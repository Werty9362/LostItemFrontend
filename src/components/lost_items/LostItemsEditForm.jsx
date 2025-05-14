import { useState } from "react";

function LostitemsEditForm(props) {
    const [editedLostItem, setEditedLostItem] = useState({
        name: "",
        description: "",
        lostDate: "",
        location: "",
        found: false,
        foundDate: "",
        foundLocation: ""
    });

    const changeFoundDate = (event) => {
        setEditedLostItem({
            ...editedLostItem,
            foundDate: event.target.value
        })
    }
    const changeFoundLocation = (event) => {
        setEditedLostItem({
            ...editedLostItem,
            foundLocation: event.target.value
        })
    }
    return (
        <form onSubmit={(event) => props.onUpdateLostItem(event, editedLostItem)}>

            <div className="mb-3">
                <label htmlFor="found_date" className="form-label">Data del ritrovamento</label>
                <input
                    type="date"
                    className="form-control"
                    id="found_date"
                    value={editedLostItem.foundDate}
                    onChange={changeFoundDate}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="foundLocation" className="form-label">Luogo del ritrovamento</label>
                <input
                    type="text"
                    className="form-control"
                    id="foundLocation"
                    value={editedLostItem.foundLocation}
                    onChange={changeFoundLocation}
                />
            </div>
            <button type="submit" className="btn btn-primary">Modifica</button>
        </form>
    )
}
export default LostitemsEditForm;