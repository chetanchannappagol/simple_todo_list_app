import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    // const useStyle = {
    //     header:{
        
    //     }
    // }
    return (
        <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between', padding:'0px 15px' ,backgroundColor:'#ccc'}}>
            <div>
                <p style={{fontWeight:'bolder'}}>
                    <i className='fa fa-tasks'/>{' '}
                    Todo App
                    </p>
            </div>
            <div>
                <ul style={{display:'flex',flexDirection:'row',listStyleType:'none'}}>
                    <li style={{padding:'0px 10px'}}>
                        <Link style={{textDecoration:'none',color:'black',fontWeight:'normal'}} to='/'>Add Todo</Link>
                    </li>
                    <li style={{padding:'0px 10px'}}>
                        <Link style={{textDecoration:'none',color:'black',fontWeight:'normal'}} to='/todolist'>Todo List</Link>
                    </li>
                    {/* <li style={{padding:'0px 10px'}}>
                        <a style={{textDecoration:'none',color:'black',fontWeight:'normal'}} href=''>About</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
