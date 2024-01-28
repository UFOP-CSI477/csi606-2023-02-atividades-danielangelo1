// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";

// const PersonSelect = ({ onPersonSelect }) => {
//   const [persons, setPersons] = useState([]);
//   const [selectedPersonId, setSelectedPersonId] = useState("");

//   useEffect(() => {
//     const API_URL = "http://localhost:3000/persons";

//     const getAllPersons = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setPersons(response.data);
//       } catch (error) {
//         console.error("Error na requisição", error);
//       }
//     };

//     getAllPersons();
//   }, []);

//   const handlePersonChange = (event) => {
//     const personId = event.target.value;
//     setSelectedPersonId(personId);
//     onPersonSelect(personId);
//   };

//   return (
//     <TextField
//       id="select"
//       label="Nome do doador"
//       select
//       required
//       fullWidth
//       value={selectedPersonId}
//       onChange={handlePersonChange}
//     >
//       {persons.map((person) => (
//         <MenuItem key={person.person_id} value={person.person_id}>
//           {person.name}
//         </MenuItem>
//       ))}
//     </TextField>
//   );
// };

export default {};
