import Phonebook from 'components/phonebook/phonebook';
import { useState } from 'react';
import { getRandomId } from 'components/random-id'


const AddContactForm = ({ addContact }) => {
    const nameInputId = getRandomId();
    const numerInputId = getRandomId();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeInput = evt => {
        const { name, value } = evt.target;
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    }

    const onAddToContacts = e => {
        e.preventDefault();
        addContact(name, number);
        setName('');
        setNumber('');
    }

    return (
        <Phonebook
            nameInputId={nameInputId}
            numerInputId={numerInputId}
            handleAddContact={onAddToContacts}
            handleChange={onChangeInput}
            name={name}
            number={number}
        />
    )
}

export default AddContactForm;