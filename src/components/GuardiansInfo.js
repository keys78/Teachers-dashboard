import React from 'react'

const GuardiansInfo = ({ onClick, relationship, setRelationship }) => {


    return (
        <form>
            <div className="form-control">
                <label>guard relationship</label>
                <input type="text" placeholder='...'
                    value={relationship} onChange={(e) => setRelationship(e.target.value)}
                />
            </div>
            <button className="text-2xl text-red-500 mb-50" onClick={onClick}>Back</button>
        </form>
    )
}

export default GuardiansInfo
