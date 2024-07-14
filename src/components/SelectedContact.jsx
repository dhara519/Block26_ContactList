import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [SingleContact, setSingleContact] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setSingleContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, [selectedContactId]);

  if (!SingleContact) {
    return <div>Loading...</div>; // Show a loading message while fetching
  }

  const { name, email, phone } = SingleContact;

  return (
    <div>
      <h1>Name: {name} </h1>
      <h1>Phone: {phone} </h1>
      <h1>Email: {email} </h1>
      <button onClick={() => {}}>Back to Contact List</button>
    </div>
  );
}
