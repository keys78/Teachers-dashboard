import React, { useState } from 'react'

const AddStudent = ({ onAdd, toggleAddModal }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [addrtype, setAddrtype] = useState(["Select Gender", "Male", "Female", "Cis", "Trans"])

    const Add = addrtype.map(Add => Add)

    const handleAddrTypeChange = (e) => {
        setGender(addrtype[e.target.value])
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name && !age && !gender) {
            alert('form fill incorrect')
            return
        }

        onAdd({ name, age, gender })

        setName('')
        setAge('')
        setGender('')
    }

    return (
        <form className="bg-gray-500 absolute top-0 left-10 w-9/12" onSubmit={onSubmit}>

            <div onClick={toggleAddModal} className="cursor-pointer">Close</div>


            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Name of student"
                    value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Age</label>
                <input type="text" placeholder="Age"
                    value={age} onChange={(e) => setAge(e.currentTarget.value)}
                />
            </div>

            <label for="role">Select Gender:</label>
            < select onChange={e => handleAddrTypeChange(e)} >
                {Add.map((address, key) =>
                    <option key={key} value={key}>{address} </option>)
                }
            </select >

            <input type="submit" value="Save"
            />
        </form>
    )

}

export default AddStudent
