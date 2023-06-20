import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./Message.scss";
import HeaderButton from "../../components/headerButton";
import { v4 as uuidv4 } from "uuid";

export default function Messages() {
  const [tableRows, setTableRows] = useState([]);

  const addTableRow = () => {
    const newRow = {
      id: generateId(),
      produits: "",
      quantite: "",
      statut: "",
      dateCreation: "",
      dateLimite: "",
    };

    setTableRows((prevRows) => [...prevRows, newRow]);
  };

  const handleSend = () => {
    if (tableRows.some((row) => row.dateCreation > row.dateLimite)) {
      console.log(
        "La date de création ne peut pas être supérieure à la date limite."
      );
      return;
    }

    // Logique pour envoyer la demande de cotation
    console.log("Envoyer la demande de cotation");
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    const rowIndex = parseInt(event.target.dataset.rowIndex);
    const updatedRows = [...tableRows];
    updatedRows[rowIndex] = { ...updatedRows[rowIndex], [name]: value };
    setTableRows(updatedRows);
  }

  function generateId() {
    return uuidv4();
  }

  return (
    <div className="messageContainer">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="demandeCotation">
        <HeaderButton
          title="Demande de Cotation"
          buttonText="+ Ajouter"
          onClick={addTableRow}
        />

        <div className="detailQuote">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produits</th>
                <th>Quantité</th>
                <th>Statut</th>
                <th>Date de création</th>
                <th>Date limite</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rowIndex) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <input
                      type="text"
                      name="produits"
                      placeholder="Orange, anana, ..."
                      value={row.produits}
                      data-row-index={rowIndex}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantite"
                      placeholder="150, 100, ..."
                      value={row.quantite}
                      data-row-index={rowIndex}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <select
                      name="statut"
                      value={row.statut}
                      onChange={handleInputChange}
                      data-row-index={rowIndex}
                    >
                      <option value="En attente">En attente</option>
                      <option value="En cours">En cours</option>
                      <option value="Terminé">Terminé</option>
                      {/* Options de statut */}
                    </select>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dateCreation"
                      value={row.dateCreation}
                      onChange={handleInputChange}
                      data-row-index={rowIndex}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dateLimite"
                      value={row.dateLimite}
                      onChange={handleInputChange}
                      data-row-index={rowIndex}
                    />
                  </td>
                  <td className="sendButtonCell">
                    <button onClick={handleSend}>Envoyer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
