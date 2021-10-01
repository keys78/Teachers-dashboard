import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

import GuardiansInfo from './GuardiansInfo'


const AddStudent = ({ onAdd, toggleAddModal, }) => {
    const [GI_relationship, setRelationship] = useState('')
    const [GI_title, setGITitle] = useState('')
    const [GI_name, setGIName] = useState('')
    const [GI_phoneNumber, setGIPhoneNumber] = useState('')
    const [GI_email, setGIEmail] = useState('')
    const [GI_address, setGIAddress] = useState('')
    const [GI_occupation, setGIOccupation] = useState('')
    const [GI_workMobileNumber, setGIWorkMobileNumber] = useState('')
    const [GI_workAddress, setWorkAddress] = useState('')

    const [name, setName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    // const [name, setName] = useState('')
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

        onAdd({
            name, age, gender, picture, GI_relationship,
            GI_title, GI_name, GI_phoneNumber, GI_email,
            GI_address, GI_occupation, GI_workMobileNumber, GI_workAddress,
        })

        setName('')
        setAge('')
        setGender('')
        setPicture('')
        toggleAddModal();
    }

    let placeholder = '...'
    let type = 'text'

    return (
        <AnimatePresence>
            <AddModal
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}>
                <form onSubmit={onSubmit}>
                    <p onClick={toggleAddModal}>X</p>

                    <AnimatePresence>
                        {swap && <motion.div

                        >
                            <div>
                                <Upload></Upload>
                            </div>

                            <Basic_Info>Basic Info</Basic_Info>

                            <InputsContainer>
                                <div>
                                    <Label htmlFor="name">First name</Label>
                                    <Input type={type} placeholder={placeholder} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>


                                <div>
                                    <Label htmlFor="middle-name">Middle name</Label>
                                    <Input type={type} placeholder={placeholder} value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                                </div>

                                <div>
                                    <Label htmlFor="middle-name">Last name</Label>
                                    <Input type={type} placeholder={placeholder} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>

                                <div>
                                    <Label htmlFor="last-name">Age</Label>
                                    <Input type={type} placeholder={placeholder} value={age} onChange={(e) => setAge(e.currentTarget.value)} />
                                </div>

                                <div>
                                    <Label htmlFor="role">Gender select</Label>
                                    <Select onChange={e => handleAddrTypeChange(e)}>
                                        {Add.map((address, key) =>
                                            <option key={key} value={key}>{address} </option>)
                                        }
                                    </Select >
                                </div>

                                <ForwardIcon onClick={swapPage}
                                    whileHover={{ scale: 0.9 }} transiton={{ type: 'spring', stifness: 300 }} >
                                    <img src="../assets/Group 55.png" alt="arrow-forward" />
                                </ForwardIcon>

                            </InputsContainer>
                        </motion.div>}
                    </AnimatePresence>


                    {/* <Select options={options} value={value.label} onChange={changeHandler} /> */}
                    {/* <input type="submit" value="Save"/> */}

                    {
                        !swap && <GuardiansInfo
                            GI_relationship={GI_relationship} setGIRelationship={setRelationship}
                            GI_title={GI_title} setGITitle={setGITitle}
                            GI_name={GI_name} setGIName={setGIName}
                            GI_phoneNumber={GI_phoneNumber} setGIPhoneNumber={setGIPhoneNumber}
                            GI_email={GI_email} setGIEmail={setGIEmail}
                            GI_address={GI_address} setGIAddress={setGIAddress}
                            GI_occupation={GI_occupation} setGIOccupation={setGIOccupation}
                            GI_workMobileNumber={GI_workMobileNumber} setGIWorkMobileNumber={setGIWorkMobileNumber}
                            GI_workAddress={GI_workAddress} setWorkAddress={setWorkAddress}
                            onClick={swapPage}
                        />
                    }

                    <SaveButton>
                        <Button text={'SAVE'} />
                    </SaveButton>

                </form>

            </AddModal>
        </AnimatePresence>
    )

}

const AddModal = styled(motion.section)`
    background:var(--tertiary);
    position: absolute;
    top:64px;
    right:0;
    width: calc(100vw - 220px);
    height: calc(100vh - 64px);
    padding-left: 33px;
    padding-right: 136px;
`

const Input = styled.input`
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #B5AAAA;
    border-radius: 4px;
    opacity: 1;
    padding:8px 0px 8px 21px;

    &:focus{
        outline: none;
    }
    &::placeholder {
        letter-spacing: 10px;
    }
`
const Select = styled.select`
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #B5AAAA;
    border-radius: 4px;
    opacity: 1;
    padding:8px 0px 8px 21px;

    &:focus{
        outline: none;
    }
    &::placeholder {
        letter-spacing: 10px;
    }
`
const Label = styled.label`
    display: block;
    font-size: var(--fontSize-s);
    font-family: var(--montserrat);
    margin-bottom: 7px;
`
const Upload = styled.div`
    height: 100px;
    width: 100px;
    background-color: var(--neutral-b);
    border-radius: 9999px;
    margin-top: 90px;
`

const Basic_Info = styled.h1`
    font-size: var(--fontSize-xl);
    font-family: var(--montserrat) ;
    font-weight: var(--bold);
    padding-top: 45px;
`
const InputsContainer = styled.div`
    margin-top: 24px;
    padding:0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 24px;
`
const ForwardIcon = styled(motion.div)`
    position: absolute;
    bottom: 40px;
    right:144px;
    cursor: pointer;
`
const SaveButton = styled.div`
    position: absolute;
    bottom: 40px;
    left:33px;
`
export default AddStudent
