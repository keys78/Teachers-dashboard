import React, { useState } from 'react'

const AddStudent = ({ onAdd, toggleAddModal }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [addrtype, setAddrtype] = useState(["Select Gender", "Male", "Female", "Cis", "Trans"])

    const [picture, setPicture] = useState('https://toppng.com/uploads/preview/trans-11551057317i6gw79kwfr.png');

    const Add = addrtype.map(Add => Add)
    const handleAddrTypeChange = (e) => {
        setGender(addrtype[e.target.value]
        )
        if (gender != "Male" ) {
            setPicture('https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png')
        } 
        if(gender != "Female" ){
            setPicture('https://image.flaticon.com/icons/png/512/194/194938.png')
        } 
     
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name && !age && !gender) {
            alert('form fill incorrect')
            return
        }

        onAdd({ name, age, gender, picture })

        setName('')
        setAge('')
        setGender('')
        setPicture('')
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
            < select onChange={e => handleAddrTypeChange(e)} 
            >
                {Add.map((address, key) =>
                    <option key={key} value={key}>{address} </option>)
                }
            </select >

            {/* <div className="register_profile_image">
                <input id="profilePic" type="file" onChange={onChangePicture} />
            </div> */}
            {/* <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={imgData} />
              </div> */}

            <input type="submit" value="Save"
            />
        </form>
    )

}

export default AddStudent
