import React, { useContext } from 'react'
import {DataGrid} from '@mui/x-data-grid'
import TodoContext from '../Context/TodoContext'
import { IconButton } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from "@mui/material/Typography";

export default function TododList() {
    const context = useContext(TodoContext);
    console.log(context.details)
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
                            <ModeEditOutlineOutlinedIcon color='info' />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlineOutlinedIcon color='warning' />
                        </IconButton>
                    </span>
                ]
            }
        }
    ]
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
        </div>
    )
}
