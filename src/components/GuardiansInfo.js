import React from 'react'
// import Form from './Form'

const GuardiansInfo = ({ onClick, relationship, setRelationship }) => {
    

    return (
        <form>
            Guradians Info
            <div className="form-control">
                    <label>guard relationship</label>
                    <input type="text" placeholder="Name of student"
                        value={relationship} onChange={(e) => setRelationship(e.target.value)}
                    />
                </div>
            <button className="text-2xl text-red-500 mb-50" onClick={onClick}>Back</button>
            
            {/* <Form /> */}
        </form>
    )
}

export default GuardiansInfo
