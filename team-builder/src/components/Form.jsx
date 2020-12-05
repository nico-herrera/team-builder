import React, { useState } from "react";

const Form = () => {
  const [newMembersFormState, setNewMembersFormState] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [teamMemberListState, setTeamMemberListState] = useState([
    {
      name: "nico",
      email: "inbox@gmail.com",
      role: "UX Engineer",
    },
    {
      name: "joey",
      email: "inbox@gmail.com",
      role: "Software Engineer",
    },
    {
      name: "jon",
      email: "inbox@gmail.com",
      role: "Monkey",
    },
  ]);

  const addNewMember = (teamMember) => {
    const newMember = {
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };
    setTeamMemberListState([...teamMemberListState, newMember]);
  };

  const handleChange = (event) => {
    setNewMembersFormState({
      ...newMembersFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMember(newMembersFormState);
  };

  return (
    <div>
      <h1>Team Building Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={newMembersFormState.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="email">Name</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={newMembersFormState.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Enter Role"
          value={newMembersFormState.role}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="team-member-container">
        <div>
          {teamMemberListState.map((item) => {
            return (
              <div>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
