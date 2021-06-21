import React from 'react'
import style from './ListeEtudiant.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(cin, code_fac, date, email,id,nom,prenom,pays,tel,type_bac) {
    return { cin, code_fac, date, email,id,nom,prenom,pays,tel,type_bac };
  }
  
  const rows =  [
    createData('ahmed', "59219156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ali', "47849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ahmed', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('morad', "15855156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('ahmed', "23549156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('molka', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('asma', "15849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('morad', "99949156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
    createData('hbib', "88849156", "Localisation", "NumeroduTelephone","City","Quantite","DateRetour","Etat"),
  
  
  ];
const ListeEtudiant = () => {
    const classes = useStyles();
    const [users,setUsers]=React.useState([])
    React.useEffect(()=>{
        axios.post("http://localhost:5010/user/"+"getAllUsers",{}).then(data=>{
            setUsers(data.data.data)

     
    
            
        })
    },[])
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>liste Etudiant </h1>
            </div>
            <div className={style.tableContainer}>
            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">cin</TableCell>
              <TableCell align="left">code_fac</TableCell>
              <TableCell align="left">date</TableCell>
              <TableCell align="left">email</TableCell>
              <TableCell align="left">nom</TableCell>
              <TableCell align="left">prenom</TableCell>
              <TableCell align="left">pays</TableCell>
              <TableCell align="left">tel</TableCell>
              <TableCell align="left">type_bac</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.name}>
  
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.cin}</TableCell>
                <TableCell align="left">{row.code_fac}</TableCell>
                <TableCell align="left">{row.date.slice(0,10)} {row.date.slice(14,19)}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.nom}</TableCell>
                <TableCell align="left">{row.prenom}</TableCell>
                <TableCell align="left">{row.pays}</TableCell>
                <TableCell align="left">{row.tel}</TableCell>
                <TableCell align="left">{row.type_bac}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
        </div>
    )
}

export default ListeEtudiant
