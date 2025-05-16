function LostItemsTable(props) {
    return (
        <table className="table table-primary table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrizione</th>
                    <th scope="col">Data dello smarrimento</th>
                    <th scope="col">Luogo dello smarrimento</th>
                    <th scope="col">Ritrovato</th>
                    <th scope="col">Data del ritrovo</th>
                    <th scope="col">Luogo del ritrovo</th>
                    <th scope="col">Modifica</th>
                    <th scope="col">Cancella</th>

                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((lostItem, index) => {
                        return (
                            <tr key={lostItem.id} value={lostItem.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{lostItem.name}</td>
                                <td>{lostItem.description}</td>
                                <td>{lostItem.lostDate}</td>
                                <td>{lostItem.location}</td>
                                <td>{lostItem.found ? 'Si' : 'No'}</td>
                                <td>{lostItem.foundDate}</td>
                                <td>{lostItem.foundLocation}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => props.onEditLostItem(lostItem)}>Modifica</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => props.onDeleteLostItem(lostItem)}>Elimina</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}
export default LostItemsTable;