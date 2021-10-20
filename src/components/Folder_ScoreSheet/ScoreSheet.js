import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ScoreSheet = () => {
    const classList = useSelector((state) => state.classList);

    return (
        <div>
            {classList.map((val, index) => (
                <div
                    className="border border-black" key={index}>
                    <div className="fle">
                        <p>{index + 1}</p>
                        <p>{val.firstName}<br /></p>
                        <p>{val.middleName}<br /></p>
                        <p>{val.lastName}<br /></p>
                        <p>{val.gender.charAt(0)}<br /></p>

                        <p>maths: {val.exams.maths}</p>
                        <p>eng: {val.exams.english}</p>
                        <p>bio: {val.exams.bio}</p>
                        <NavLink
                            to={{
                                pathname: `/exams/results/${val.firstName} ${val.lastName}`,
                                state: { classList: val }
                            }}>
                            View Results
                        </NavLink>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default ScoreSheet
