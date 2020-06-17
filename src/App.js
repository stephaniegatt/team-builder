import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from "./Form"

const teamMembers = [
  {
    id: uuid(),
    name: "Stephanie",
    email: "stephanielynngatt@gmail.com",
    role: "Web Developer",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

export default function App() {
  const [teamMembersList, setTeamMembersList] = useState(teamMembers);
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = event => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    }) 
  }
  const onSubmit = event => {
    event.preventDefault()
    if (!formValues.role || !formValues.name || !formValues.email) {
      setError("Please fill out info.")
      return
    }
    const newTeamMember = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    } 
    setTeamMembersList(oldMembers => [newTeamMember, ...oldMembers])
    setFormValues(initialFormValues)
  }

  

  return (
    <div className="App">
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <div>
        <h2>Member List</h2>
        {
          teamMembersList.map(member => {
            return (
              <div>
                <h3>{member.name}</h3>
                <p>{member.email}</p>
                <p><strong>{member.role}</strong></p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}


