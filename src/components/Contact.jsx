import { useState } from "react"

const Contact = () => {

    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact(contact => ({...contact, [name]: value}))

    }
    const addHandler = () => {
        console.log(contact)
    }
  return (
    <div>
        <div>
            <input value={contact.name} name="name" type="text" placeholder="Name" onChange={changeHandler} />
            <input value={contact.lastName} name="lastName" type="text" placeholder="LastName" onChange={changeHandler} />
            <input value={contact.email} name="email" type="text" placeholder="Email" onChange={changeHandler} />
            <input value={contact.phone} name="phone" type="text" placeholder="Phone" onChange={changeHandler} />
        </div>
        <div>
            <button onClick={addHandler}>Add Contact</button>
        </div>
    </div>
  )
}

export default Contact