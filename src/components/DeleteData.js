import React from 'react'
import { Button } from 'react-bootstrap'

const DeleteData = ({ dataList }) => {
    const DeleteAllData = () => {
        console.log(`delete length ${dataList.length}`)
        dataList.splice(0, dataList.length)
    }
    return (
        <div>
            {DeleteAllData()}
            {
                dataList.length >= 1 ? (<Button className='mt-5 w-100' variant="danger">Delete All Data</Button>) : null
            }
        </div>
    )
}

export default DeleteData
