import { useState } from "react";

function LostItemsInsertForm(props) {
    const [newLostItem, setNewLostItem] = useState({
        name: "",
        description: "",
        lostDate: "",
        location: "",
        found: false,
        foundDate: "",
        foundLocation: ""
    });
    const resetForm = () => {
        setNewLostItem({
            name: "",
            description: "",
            lostDate: "",
            location: ""
        })
        //props.setEdit(0);
    }
    const changeName = (event) => {
        setNewLostItem({
            ...newLostItem,
            name: event.target.value
        })
    }
    const changeDescription = (event) => {
        setNewLostItem({
            ...newLostItem,
            description: event.target.value
        })
    }
    const changeLostDate = (event) => {
        setNewLostItem({
            ...newLostItem,
            lostDate: event.target.value
        })
    }
    const changeLocation = (event) => {
        setNewLostItem({
            ...newLostItem,
            location: event.target.value
        })
    }
    return (
        <form onSubmit={(event) => props.onAddLostItem(event, newLostItem)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome oggetto</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={newLostItem.name}
                    onChange={changeName}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descrizione oggetto</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={newLostItem.description}
                    onChange={changeDescription}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lost_date" className="form-label">Data dello smarrimento</label>
                <input
                    type="date"
                    className="form-control"
                    id="lost_date"
                    value={newLostItem.lostDate}
                    onChange={changeLostDate}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Luogo dello smarrimento</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={newLostItem.location}
                    onChange={changeLocation}
                />
            </div>
            <button type="submit" className="mx-1 mb-1 btn btn-primary">Inserisci</button>
            <button type="button" className="mx-1 mb-1 btn btn-info" onClick={resetForm}>Reset</button>
        </form>
    )
}
export default LostItemsInsertForm