import React, { useState } from "react";
import "./Form.scss";
import { FaTrashCan } from "react-icons/fa6";
import doImage from "../images/do.jpg";

function Form() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let trimmedName = name.trim();
    if (trimmedName === "") {
      return;
    }
    let newList = {
      id: `user-${new Date().getTime()}`,
      name,
    };
    setData((p) => [...p, newList]);
    setName("");
  };
  const handleDelete = (id) => {
    let filteredData = data?.filter((item) => item.id !== id);
    setData(filteredData);
  };
  let cards = data?.map((item) => (
    <div className="lists" key={item.id}>
      <div className="list">
        <h2>{item.name}</h2>
        <button onClick={() => handleDelete(item.id)}>
          <FaTrashCan />
        </button>
      </div>
      <hr />
    </div>
  ));
  return (
    <div className="container">
      <div className="form">
        <h1>TO DO LIST</h1>
        <form onSubmit={handleSubmit} action="">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="What We Do"
          />
          <button className="btn" type="sumbit">
            Add
          </button>
          <button></button>
        </form>
        <div className="wrapper">
          {cards}
          {data.length === 0 ? (
            <img className="img" src={doImage} alt="No data" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
