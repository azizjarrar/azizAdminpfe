import React, { Component } from 'react'
import SpecialiteService from '../../services/SpecialiteService';
import MyToast from '../MyToast';
import Select from 'react-select';
import axios from 'axios'

  




class CreateSpecialiteComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // step 2
            id: this.props.match.params.id,
            nom: '',
            description: '',
            image: '',
            options:[{value:"aziz",label:"gzg"}]
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateSpecialite = this.saveOrUpdateSpecialite.bind(this);
    }

    // step 3
    componentDidMount(){
        axios.post("http://localhost:5010/universities/"+"getmetiers",{}).then(data=>{
                this.setState({...this.state,options:data.data.data.map(e=>{return {value:e.id,label:e.nom} })})
        }).catch(e=>{
            console.log(e)
        })
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            SpecialiteService.getSpecialiteById(this.state.id).then( (res) =>{
                let specialite = res.data;
                this.setState({nom: specialite.nom,
                    description: specialite.description,
                    image : specialite.image
                });
            });
        }        
    }
    saveOrUpdateSpecialite = (e) => {
        e.preventDefault();
        let specialite = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('specialite => ' + JSON.stringify(specialite));
        // step 5
        if(this.state.id === '_add'){
            this.setState({"show":true});

            SpecialiteService.createSpecialite(specialite).then(res =>{
                this.props.history.push('/specialites');

            });
        }else{
            SpecialiteService.updateSpecialite(specialite, this.state.id).then( res => {
                this.props.history.push('/specialites');
            });
        }
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    cancel(){
        this.props.history.push('/specialites');
    }
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };


    render() {
        const { selectedOption } = this.state;

        return (
            <div className="container">
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children ={{show:this.show, message:"Specialit?? supprim?? avec succ??s"}}/>
                </div>
          <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                      <div className="col-sm-6">
                      <h2>Ajout<b>Specialite</b></h2>
                      </div>
                    </div>


                  </div>
                  
             <form>
                    <div className = "form-group">
                        
                        <input placeholder="Nom Specialite" name="nom specialite" className="form-control" 
                            value={this.state.nom} onChange={this.changeNomHandler}/>
                    </div>
                    <div className = "form-group">
                        
                        <input placeholder="Description" name="description" className="form-control" 
                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </div>
                    <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                    />
                    </div>
                        <hr></hr>
                    <button className="btn btn-outline-success" onClick={this.saveOrUpdateSpecialite}>Enregistrer</button>
                    <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
            </form>
        
              </div>
        
     


</div>
        )
    }
}

export default CreateSpecialiteComponent
