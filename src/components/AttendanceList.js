import React from 'react'
import Button from './Button'
import { rollCall } from './data'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import {MenuItem, FormControl, Select} from '@mui/material';

import { monthList } from '../GlobalData'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAttendance } from '../redux/classListSlice';



const AttendanceList = () => {

    const [month, setMonth] = React.useState('January');
    const activeMonth = (event) => {
        setMonth(event.target.value);
    };

    const [value, setValue] = React.useState('January');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classList = useSelector((state) => state.classList);

	// const fA = useSelector((state) =>
	// 	state.classList.filter((filtered) => filtered.months.map((month) =>(month.name === "January" && month.week4 === true))),
        
	// )

    // const handleCheckboxClick = () => {
	// 	// dispatch(toggleAttendance({ id, months.week1.monday: !months.week1.monday }));
    //     !months.week1.monday
	// };

    // const handleCheckbox = () => {

    // }



    return (
        <section>
            {/* <div className="flex justify-between items-center">
                <Search setSearchTerm={setSearchTerm}/>
                <Button onClick={toggleAddModal} text={"Add New Student"}/>
            </div> */}

            <FormControl>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    onChange={activeMonth}
                >
                    {monthList.map((month, i) => (
                        <MenuItem key={i} value={month.label}>{month.label}</MenuItem>
                    ))}

                </Select>
            </FormControl>


            <Box sx={{ width: '100vw', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {monthList.map((myMonths, i) => (
                                <Tab key={i} label={myMonths.label} value={myMonths.label} />
                            ))}

                        </TabList>
                    </Box>
                    {classList.map((val, index) => (
                        <div className="border border-black" key={index}>
                            <div className="fle">
                                <p>{index + 1}</p>
                                <p>{val.firstName}<br /></p>
                                <p>{val.middleName}<br /></p>
                                <p>{val.lastName}<br /></p>
                                <p>{val.gender.charAt(0)}<br /></p>

                                {val.months.map((month, i) => (
                                    month.name === value && (
                                        <TabPanel value={month.name}>
                                            <div key={i}>
                                                <input type="checkbox" checked={month.week1.monday} />
                                                <input type="checkbox" checked={month.week1.tuesday} />
                                                <input type="checkbox" checked={month.week1.wednesday} />
                                                <input type="checkbox" checked={month.week1.thursday} />
                                                <input type="checkbox" checked={month.week1.friday} />
                                                &nbsp; &nbsp;
                                                <input type="checkbox" checked={month.week2.monday} />
                                                <input type="checkbox" checked={month.week2.tuesday} />
                                                <input type="checkbox" checked={month.week2.wednesday} />
                                                <input type="checkbox" checked={month.week2.thursday} />
                                                <input type="checkbox" checked={month.week2.friday} />
                                                &nbsp; &nbsp;
                                                <input type="checkbox" checked={month.week3.monday} />
                                                <input type="checkbox" checked={month.week3.tuesday} />
                                                <input type="checkbox" checked={month.week3.wednesday} />
                                                <input type="checkbox" checked={month.week3.thursday} />
                                                <input type="checkbox" checked={month.week3.friday} />
                                                &nbsp; &nbsp;
                                                <input type="checkbox" checked={month.week4.monday} />
                                                <input type="checkbox" checked={month.week4.tuesday} />
                                                <input type="checkbox" checked={month.week4.wednesday} />
                                                <input type="checkbox" checked={month.week4.thursday} />
                                                <input type="checkbox" checked={month.week4.friday} />
                                            </div>
                                           
                                        </TabPanel>
                                    )
                                ))}

                            </div>

                        </div>
                    ))}

                </TabContext>
            </Box>


            <div className="roll-container">
                {rollCall.map((roll, i) => (
                    (roll.category === 'heading' &&
                        <div className="heading-container" key={i}>
                            <div className="g-1">{roll.numTag}</div>
                            <div className="g-2">{roll.name}</div>
                            <div className="g-3">{roll.gender}</div>
                            <div className="g-4">{roll.week1}</div>
                            <div className="g-5">{roll.week2}</div>
                            <div className="g-6">{roll.week3}</div>
                            <div className="g-7">{roll.week4}</div>

                        </div>
                    )
                ))}
            </div>

        </section>
    )
}

export default AttendanceList;
