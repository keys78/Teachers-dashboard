import React from 'react'
import Button from './Button'
import { rollCall } from './data'
// import Search from './Search'
import StudentsList from './StudentsList'

const AttendanceList = ({
    // toggleAddModal,
    //  searchTerm,
    //   setSearchTerm,
    //    showAddModal
}) => {
    return (
        <section>
            {/* <div className="flex justify-between items-center">
                <Search setSearchTerm={setSearchTerm}/>
                <Button onClick={toggleAddModal} text={"Add New Student"}/>
            </div> */}



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

                {rollCall.map((roll, i) => (
                    (roll.category !== 'heading' &&
                        <div className="lists-container" key={i}>
                            <div className="g-1">{i + 1}</div>
                            <div className="g-2">{roll.name}</div>
                            <div className="g-3">{roll.gender.charAt(0)}</div>

                        

                        </div>
                    )
                ))}


             <details>
                   <summary>Select Month</summary>
                   <div className="border border-black ">
                   <p>January</p>
                   <p>February</p>
                   <p>March</p>
                   </div>
             </details>
            </div>

        </section>
    )
}

export default AttendanceList;
