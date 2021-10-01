import { createSlice } from "@reduxjs/toolkit";

const classListSlice = createSlice({
    name: "classList",
    initialState: [
        {
            id: (Date.now()),
            firstName: 'Tochukwu',
            middleName: 'Emmanuel',
            lastName: 'Onyeyaforo',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            age: '30',
            gender: 'Male',
            country: 'Nigeria',
            guardianInfo: {
                relationship: "Father",
                title: "MR",
                name: "Onobikoko Lobato",
                phoneNumber: "213456435687",
                email: 'lel@gmail.com',
                residence: '12 nano, by lofawe ire bustop',
                occupation: 'Lawyer',
                workMobile: '8947r29070',
                worKAddress: '1 Milo OSIBAjkdshu dhusdlsd h'
            },
        },

    ],
    reducers: {
        addStudent: (state, action) => {
            let newStudent = action.payload
            state.push(newStudent);
        },

    },
});
export const { addStudent } = classListSlice.actions;

export default classListSlice.reducer;