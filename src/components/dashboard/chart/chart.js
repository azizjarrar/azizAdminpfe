import React from 'react'
import style from './chart.module.scss'
import { Bar } from 'react-chartjs-2';
import axios from 'axios'
const Chart = () => {
    const [label,setLabel]=React.useState([])
    const [data,setData]=React.useState([])
    React.useEffect(()=>{
        axios.post("http://localhost:5010/user/"+"getUsersByYear",{}).then(data=>{
            console.log(data.data.data)

            if(data!=undefined ||  data.data!=undefined ||  data.data.data!=undefined || data.length==0){
                setLabel(data.data.data.map(e=>e.Year))
                setData(data.data.data.map(e=>e.numberOfInscri))
            }
    
            
        })
    },[])
    React.useEffect(()=>{
    },[label,data])
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>les nombre d'inscription par année</h1>
            </div>
            <div className={style.chartContainer}>
{  label.length>0 && <Bar data={

{
    labels: label,
    datasets: [{
        label: 'user for each year',
        data: data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
            } 	
            options={{ maintainAspectRatio: false }}
             height={400} width={400}/>}
            </div>

        </div>
    )
}

export default Chart
