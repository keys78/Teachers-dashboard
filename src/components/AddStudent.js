import React, { useState, useMemo } from 'react'
import Button from './Button'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import GuardiansInfo from './GuardiansInfo'


const AddStudent = ({ onAdd, toggleAddModal, }) => {
    const [GI_relationship, setRelationship] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [addrtype, setAddrtype] = useState(["Select Gender", "Male", "Female", "Cis", "Trans"])

    const [picture, setPicture] = useState('https://toppng.com/uploads/preview/trans-11551057317i6gw79kwfr.png');

    const Add = addrtype.map(Add => Add)
    const handleAddrTypeChange = (e) => {
        setGender(addrtype[e.target.value]
        )
        if (gender !== "Male") {
            setPicture('https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png')
        }
        if (gender !== "Female") {
            setPicture('https://image.flaticon.com/icons/png/512/194/194938.png')
        }

    }

    // const [value, setValue] = useState('')
    // const options = useMemo(() => countryList().getData(), [])

    // const changeHandler = value => {
    //     setValue(value)
    // }

    const [swap, setSwap] = useState(true);

    const swapPage = () => {
        setSwap(!swap)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name && !age && !gender) {
            alert('form fill incorrect')
            return
        }

        onAdd({ name, age, gender, picture, GI_relationship })

        setName('')
        setAge('')
        setGender('')
        setPicture('')
    }

    return (
        <div className="bg-gray-500 absolute top-10 right-0 h-screen w-10/12">
            <form onSubmit={onSubmit}>

                <div onClick={toggleAddModal} className="cursor-pointer">Close</div>

                {swap && <div>
                    <div className="form-control">
                        <label>First name</label>
                        <input type="text" placeholder="Name of student"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Middle name</label>
                        <input type="text" placeholder="Name of student"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Last Name</label>
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
                    <div onClick={swapPage}>FORWARD</div>
                </div>}

                {/* <Select options={options} value={value.label} onChange={changeHandler} /> */}

                {/* <input type="submit" value="Save"/> */}

                {!swap && <GuardiansInfo relationship={GI_relationship} setRelationship={setRelationship} onClick={swapPage} />}
                <Button text={'SAVE'} />

            </form>

        </div>
    )

}

export default AddStudent
