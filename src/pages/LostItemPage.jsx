import { useEffect, useState } from "react";
import axios from "axios"
import LostItemsInsertForm from "../components/lost_items/LostItemsInsertForm";
import LostItemsEditForm from "../components/lost_items/LostItemsEditForm";
import LostItemsTable from "../components/lost_items/LostItemsTable";
import Title from "../components/Title";
function LostItemPage() {

    let url = "http://localhost:9010/lost_items";
    const [found, setFound] = useState("");
    const [lostItems, setLostItems] = useState([]);
    const [toEditLostItem, setToEditLostItem] = useState({
        name: "",
        description: "",
        lostDate: "",
        location: "",
        found: true,
        foundDate: "",
        foundLocation: ""
    });
    const [edit, setEdit] = useState(0);

    const loadLostItems = () => {
        if(found !== ""){
            url +="/" + found;
        }
        axios.get(url)
            .then(response => setLostItems(response.data))
    }

    const addLostItem = (event, newLostItem) => {
        event.preventDefault();
        axios.post(url, newLostItem)
            .then(response => {
                setLostItems([
                    ...lostItems,
                    response.data
                ])
            })
    }

    const editLostItem = (oldLostItem) => {
        setToEditLostItem({
            name: oldLostItem.name,
            description: oldLostItem.description,
            lostDate: oldLostItem.lostDate,
            location: oldLostItem.location,
            found: true,
        })
        setEdit(oldLostItem.id);
    }

    const updateLostItem = (event, editedLostItem) => {
        event.preventDefault();
        const url = 'http://localhost:9010/lost_items/' + edit;
        axios.put(url, editedLostItem)
            .then(response => {
                const lostItemsUpdated = lostItems.map((lostItem) => {
                    if (lostItem.id === edit) {
                        return response.data;
                    }
                    else {
                        return lostItem;
                    }
                })
                setLostItems(lostItemsUpdated);
                setEdit(0);
            });
    }

    const deleteLostItem = (lostItem) => {
        const url = 'http://localhost:9010/lost_items/' + lostItem.id;
        axios.delete(url)
            .then(response => {
                const lostItemsFiltered = lostItems.filter((el) => el.id !== lostItem.id);
                setLostItems(lostItemsFiltered);
            })
    }

    useEffect(() => {
        loadLostItems()
    },
        [found]);

    return (
        <>
            <Title
                labelH1="Oggetti Persi"
            />
            {
                edit ? <LostItemsEditForm onUpdateLostItem={updateLostItem} /> : <LostItemsInsertForm onAddLostItem={addLostItem} />
            }
            <form className="mb-3">
                <label htmlFor="filter"> Filtra per:</label>
                <select className="form-select" id="filter" value={found} onChange={(event) => setFound(event.target.value)}>
                    <option value="">Tutti</option>
                    <option value="0">Non trovato</option>
                    <option value="1">Trovato</option>
                </select>
            </form>

            <LostItemsTable
                data={lostItems}
                onDeleteLostItem={deleteLostItem}
                onEditLostItem={editLostItem}
                found = {found}
            />
        </>
    )
}
export default LostItemPage;