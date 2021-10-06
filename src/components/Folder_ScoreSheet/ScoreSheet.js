import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core';

const ScoreSheet = () => {
    const classList = useSelector((state) => state.classList);
    const [exam, setExam] = useState(
		{
			maths:'',
            english:'',
            bio:''
		}
	)

    function handleScores(evt) {
		const value = evt.target.value;
		setExam({
			...exam,
			[evt.target.name]: value,
		});

	}

    return (
        <div>
             {classList.map((val, index) => (
                        <div className="border border-black" key={index}>
                            <div className="fle">
                                <p>{index + 1}</p>
                                <p>{val.firstName}<br /></p>
                                <p>{val.middleName}<br /></p>
                                <p>{val.lastName}<br /></p>
                                <p>{val.gender.charAt(0)}<br /></p>

                                <p>maths: {val.exams.maths}</p>
                                <p>eng: {val.exams.english}</p>
                                <p>bio: {val.exams.bio}</p>
                                
                                <input className="outline" type="number" value={exam.maths} onChange={handleScores} label="maths"/>
                            </div>

                        </div>
                    ))}
        </div>
    )
}

export default ScoreSheet
