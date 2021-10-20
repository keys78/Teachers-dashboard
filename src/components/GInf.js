import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const GuardiansInfo = ({ onClick,
    GI_relationship, setGIRelationship,
    GI_title, setGITitle,
    GI_name, setGIName,
    GI_phoneNumber, setGIPhoneNumber,
    GI_email, setGIEmail,
    GI_address, setGIAddress,
    GI_occupation, setGIOccupation,
    GI_workMobileNumber, setGIWorkMobileNumber,
    GI_workAddress, setWorkAddress,
}) => {

    let placeholder = '...'
    let type = 'text'

    return (
        <AnimatePresence>
            <motion.section
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
            >
                <Guardian_Info>Guardian Info</Guardian_Info>
                <InputsContainer>
                    <div className="order-1">
                        <Label htmlFor="name">Relationship</Label>
                        <Input type={type} placeholder={placeholder}
                            value={GI_relationship} onChange={(e) => setGIRelationship(e.target.value)} />
                    </div>

                    <div className="order-2">
                        <Label htmlFor="name">Guardian's Title</Label>
                        <Input type={type} placeholder={placeholder} value={GI_title} onChange={(e) => setGITitle(e.target.value)} />
                    </div>

                    <div className="order-3">
                        <Label htmlFor="name">Guardian's name</Label>
                        <Input type={type} placeholder={placeholder} value={GI_name} onChange={(e) => setGIName(e.target.value)} />
                    </div>

                    <div className="order-4">
                        <Label htmlFor="name">Phone number</Label>
                        <Input type={type} placeholder={placeholder} value={GI_phoneNumber} onChange={(e) => setGIPhoneNumber(e.target.value)} />
                    </div>

                    <div className="order-5">
                        <Label htmlFor="name">Email</Label>
                        <Input type={type} placeholder={placeholder} value={GI_email} onChange={(e) => setGIEmail(e.target.value)} />
                    </div>

                    <div className="order-6">
                        <Label htmlFor="name">Residence Address</Label>
                        <Input type={type} placeholder={placeholder} value={GI_address} onChange={(e) => setGIAddress(e.target.value)} />
                    </div>

                    <div className="order-7">
                        <Label htmlFor="name">Occupation</Label>
                        <Input type={type} placeholder={placeholder} value={GI_occupation} onChange={(e) => setGIOccupation(e.target.value)} />
                    </div>

                    <div className="order-8">
                        <Label htmlFor="name">Work Mobile Phone</Label>
                        <Input type={type} placeholder={placeholder} value={GI_workMobileNumber} onChange={(e) => setGIWorkMobileNumber(e.target.value)} />
                    </div>

                    <div className="order-9">
                        <Label htmlFor="name">Work Address</Label>
                        <Input type={type} placeholder={placeholder} value={GI_workAddress} onChange={(e) => setWorkAddress(e.target.value)} />
                    </div>


                </InputsContainer>

                <BackIcon onClick={onClick}
                    whileHover={{ scale: 0.9 }} transiton={{ type: 'spring', stifness: 300 }}>
                    <img src="../assets/Group 57.png" alt="arrow-back" />
                </BackIcon>
            </motion.section>
        </AnimatePresence>
    )
}

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
const Label = styled.label`
    display: block;
    font-size: var(--fontSize-s);
    font-family: var(--montserrat);
    margin-bottom: 7px;
`
const InputsContainer = styled.div`
    margin-top: 24px;
    padding:0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 24px;
`
const BackIcon = styled(motion.div)`
    position: absolute;
    bottom: 40px;
    right:144px;
    cursor: pointer;
`
const Guardian_Info = styled.h1`
    font-size: var(--fontSize-xl);
    font-family: var(--montserrat) ;
    font-weight: var(--bold);
    padding-top: 60px;
`
export default GuardiansInfo
