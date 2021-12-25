import React, { useContext, useState } from 'react'
import {DataGrid} from '@mui/x-data-grid'
import TodoContext from '../Context/TodoContext'
import { IconButton } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from "@mui/material/Typography";
import ADialog from './Dialog';
import DeleteDialog from './DeleteDialog';

export default function TododList() {

    const context = useContext(TodoContext);
    const [openEdit,setOpenEdit] = useState(false);
    const [openDelete,setOpenDelete] = useState(false);
    const [selected, setSelected] = useState(null)

    const columns = [
        {
            headerName:'Subject',
            field:'subject',
            headerAlign:'center',
            width: '267',
            renderCell: value => {
                return [
                    <span
                    style={{
                        fontSize:16,
                        
                        width:'100%',
                        textAlign:'center'
                    }}
                    >{value.value}</span>
                ]
            }
        },
        {
            headerName:'Description',
            field:'description',
            width: '267',
            headerAlign:'center',
            renderCell: value => {
                return [
                    <span
                    style={{
                        fontSize:16,
                        
                        width:'100%',
                        textAlign:'center'
                    }}
                    >{value.value}</span>
                ]
            }
        },
        {
            headerName:'Date & time',
            field:'dateTime',
            headerAlign:'center',
            width: '267',
            renderCell: value => {
                return [
                    <span 
                    style={{
                        fontSize:16,
                        
                        width:'100%',
                        textAlign:'center'
                    }}
                    >{value.value}</span>
                ]
            }
        },
        {
            headerName:'Action',
            field:'',
            headerAlign:'center',
            width: '267',
            renderCell: value => {
                return [
                    <span 
                    style={{
                        fontSize:16,
                        width:'100%',
                        textAlign:'center',
                        display:'flex',
                        justifyContent:'space-evenly'
                    }}
                    >
                        <IconButton>
                            <ModeEditOutlineOutlinedIcon  onClick={()=>DialogEdit(value)} color='info' />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlineOutlinedIcon  onClick={()=>DialogDelete(value)} color='warning' />
                        </IconButton>
                    </span>
                ]
            }
        }
    ]
    const DialogEdit = (value)=>{
        // setSelected(null)
        setOpenEdit(true)
        console.log(value)
        setSelected(value.row)
    }
    const DialogDelete = (value)=>{
        // setSelected(null)
        setOpenDelete(true)
        console.log(value)
        setSelected(value.row)
    }
    return (
        <div style={{ height: 400,display:'flex',justifyContent:'center',margin:'2% auto' }}>
            <div style={{ width: '70%',textAlign:'center'}}>
            <Typography gutterBottom variant="h5">Todo List</Typography>
            <DataGrid
            rows={context.details}
            columns={columns}
            rowHeight={40}
            headerHeight={45}
            hideFooterSelectedRowCount
            rowsPerPageOptions={[5,10,20]}
            pageSize={5}
            />
            </div>
            <ADialog selected={selected} openEdit={openEdit} setOpenEdit={setOpenEdit}/>
            <DeleteDialog selected={selected} openDelete={openDelete} setOpenDelete={setOpenDelete} />
        </div>
    )
}
