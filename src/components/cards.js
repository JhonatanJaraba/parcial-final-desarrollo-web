import React, {useEffect, useState} from "react";
import { UseFecth } from "./usefetch";
import CardsForm from "./cardsform";
import {firebase} from '../firebase';
import { toast } from 'react-toastify';
import Pokemon from "./pokemon";

const Cards = () =>{

    var name = null;

    const [user, setUser] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (Object) =>{
       const db = firebase.firestore()
       if(currentId === ''){
        await db.collection('user').add(Object);
        toast('Se agrego un nuevo usuario', {
            type: 'success'
        });
       }else{
          await db.collection('user').doc(currentId).update(Object);
          toast('Se actualizo un usuario', {
            type: 'info'
        });
        setCurrentId('');
       }
    };

    const getUser = async () => {
        
        const db1 = firebase.firestore()
          db1.collection('user').onSnapshot((querySnapshot) => {
              const docs = [];
            querySnapshot.forEach(element => {
                docs.push({...element.data(), id:element.id});
            });  
            console.log(docs);
            setUser(docs);
        });
    };

    const onDeleteUser = async (id) => {
        
        const db2 = firebase.firestore()
        if(window.confirm('are you sure you want to delete this user?')) {
         await db2.collection('user').doc(id).delete();
         toast('Se elimino un usuario', {
            type: 'error'
        });
        }
    };
   


    useEffect(() => {
      getUser();
    }, []);

    return (
    <div>
        <div className="col-md-5 p-2">
            <CardsForm {...{addOrEdit, currentId, user}}/>
            
        </div>
        <div className="col-md-10 p-2">
            
                <div className="card mb-1">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th scope="col">Nombre</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.map(users => ( 
                            <tr key={users.id}>
                            <td className="d-flex justify-content-evenly">
                                <i className="material-icons text-danger lista" onClick={() => onDeleteUser(users.id)}>
                                    close
                                </i>
                                <i className="material-icons text-warning lista" onClick={() => setCurrentId(users.id)}>
                                    create
                                </i>
                            </td>
                            <td>{users.nombre}</td>
                            <td><Pokemon name={users.nombre}/></td>
                            </tr>
                        ))}
                        </tbody>
                     </table>
                     
                </div>
        </div>
    </div>);
};

export default Cards;