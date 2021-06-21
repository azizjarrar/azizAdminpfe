import React from 'react'
import style from './Onecomments.module.scss'
//import {deleteComments} from '../../services/comments'
import axios from 'axios'

const Comments = (props) => {
    const [deletee,setDelete]=React.useState(false)
    const openDelte=()=>{
        setDelete(e=>!e)
    }
    const deleteCommentsFn=()=>{

        axios.post("http://localhost:5010/comments/"+"deleteCommentsAdmin",{id_comment:props.id_comment}).then(data=>{
            window.location.reload()
        }).catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className={style.container}>
            <div className={style.userName}><h3>{props.userName}</h3></div>
            <div className={style.comment}><p>{props.comment}</p></div>
            <div className={style.delete} onClick={()=>{openDelte()}}>&hellip;{deletee&&<div onClick={()=>{deleteCommentsFn()}} className={style.deletecss}><h4>Delete</h4></div>}</div>         
        </div>
    )
}

export default Comments
