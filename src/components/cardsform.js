import React, {useState, useEffect} from "react";
import {firebase} from '../firebase';

const CardsForm = (props) =>{

   const initialStateValues = {
    nombre: '',
   }

   const [values, setValues] = useState(initialStateValues);

   const handleInputChange = e =>{
       const {name, value} = e.target;
       setValues({...values, [name]: value});
   }

    const handleSubmit = e =>{
        e.preventDefault();
        
        props.addOrEdit(values);
        setValues({...initialStateValues})
    }

    const getLinkById = async (id) => {
        const db = firebase.firestore();
        const doc = await db.collection('user').doc(id).get();
        setValues({...doc.data()})
    }

    useEffect(() => {
        if(props.currentId === ''){
            setValues({...initialStateValues});
        }else{
            getLinkById(props.currentId);
        }
    }, [props.currentId]);

    return (
        <form className="card card-body animate__animated animate__fadeInLeft" onSubmit={handleSubmit}>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">assignment_ind</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="Ingrese nombre pokemon"
                name="nombre"
                onChange={handleInputChange}
                value={values.nombre}/>
            </div>
                <br/>
            
            <br/>
            <button className="btn btn-primary btn-block">
                {props.currentId === '' ? 'Save':'Update'}
            </button>
        </form>
    )
}

export default CardsForm;