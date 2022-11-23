import React from 'react'
import { Button } from 'react-bootstrap'
const DeleteData = ({ dataList }) => {
    return (
        <div>
            {
                dataList.legnth >= 1 ? (<Button className='mt-5 w-100' variant="danger">Delete All Data</Button>) : null
            }
        </div>
    )
}

export default DeleteData
