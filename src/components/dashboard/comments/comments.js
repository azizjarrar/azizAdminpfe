import React from 'react'
import style from './comments.module.scss'
import OneComment from './oneComment/Onecomments'
import axios from 'axios'
const Comments = () => {
    const [comments,setComments]=React.useState([])
    const searchComment=(e)=>{
        axios.post("http://localhost:5010/comments/"+"SearchComment",{description:e.target.value}).then(data=>{
            setComments(data.data.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className={style.container}>
                <div className={style.header}>
                    <h1>supprimer les commentaires </h1>
                </div>
                <div className={style.searchComment}>
                    <input onChange={(e)=>searchComment(e)} name="comments" placeholder="cherche une commentaire" />
                </div>
                <div className={style.commentsContainer}>
                {comments.map(e=><OneComment  key={e.id_comment} owner={e.owner} id_comment={e.id_comment} userName={e.firstname  + " " + e.lastname} comment={e.description}></OneComment>)}

                </div>
        </div>
    )
}

export default Comments
