import React from 'react'
import { TextField, CssBaseline } from '@material-ui/core';

const ExamScores = ({ exams, handleAddInput, handleRemoveInput, handleScore, usedStyle, }) => {
    
    return (
        <div>
            <CssBaseline />

            {exams.map((list, i) => {
				return (
					<div key={i} className="mt-20 flex gap-4">
						<TextField value={list.subject} onChange={e => handleScore(e, i)}
							variant="outlined" label="Subject" name="subject" fullWidth className={usedStyle} />
						<TextField value={list.score} onChange={e => handleScore(e, i)}
							variant="outlined" label="Score" name="score" fullWidth className={usedStyle} />

						{exams.length - 1 === i && <input type="button" value="add" onClick={handleAddInput} />}
						{exams.length !== 1 && <input type="button" value="remove" onClick={handleRemoveInput} />}

					</div>
				)
			})}
        </div>
    )
}

export default ExamScores
