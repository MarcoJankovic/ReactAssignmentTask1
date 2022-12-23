import React,  { useState } from 'react';

const DataTable = () => {

    const [studentList] = useState([
        {id: 1, firstName: "Alexis", lastName: "Gonzalo", age: 33, birthDate: "1953", country: "France", city: "Paris"},
        {id: 2, firstName: "Jaime", lastName: "Johnsson", age: 45, birthDate: "1969", country: "Spain", city: "Madrid"},
        {id: 3, firstName: "Helio", lastName: "Heliosson", age: 30, birthDate: "1985", country: "Germany", city: "Berlin"},
        {id: 4, firstName: "Marco", lastName: "Jankovic", age: 25, birthDate: "1994", country: "Belgium", city: "Bryssel"},
    ]);

    const [show, setShow] = useState(false);
    const DefaultData = { id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: "" }
    const [student, setStudent] = useState(DefaultData);

    const TableHeader = () => {
        return (           
            <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Birthdate</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    };
   
    const TableRow = () => {
        
        return (          
            <tbody>            
                {studentList.map(sObj=> ( 
                <tr 
                id={sObj.id} 
                key={sObj.id}>
                    <td>{sObj.id}</td>
                    <td>{sObj.firstName}</td>
                    <td>{sObj.lastName}</td>
                    <td>{sObj.age}</td>
                    <td>{sObj.birthDate}</td>
                    <td>{sObj.country}</td>
                    <td>{sObj.city}</td>
                    <TableAction student={sObj} />             
                </tr>) )}              
            </tbody>
        );
    }  

    const TableAction = ({ student }) => {
        const displayData = () => {
            setShow(true);
            setStudent(student);
        };
        return (
          <td>
          <button type="button" className="btn btn-primary" onClick={displayData} >Details</button>
          </td>
        );
    }

    const ShowStudent = () => {       
        const { id, firstName, lastName, age, birthDate, country, city,} = student;
        return (
            <>
                {show ? (
                    <div className="card" style={{ width: '600px' }} >
                        <div className="card-header bg-dark text-danger">
                            Details
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-title">Id: {id}</p>
                            <p className="card-text">Firstname: {firstName}</p>
                            <p className="card-text">LastName: {lastName}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Birthdate: {birthDate}</p>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">City: {city}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger" onClick={() => { setShow(false); setStudent(DefaultData) }}>Close</button>
                        </div>
                    </div >
                ) : null}
            </>
        )
    }
 
        return (   
            <>  
            <table className="table">
                <TableHeader />               
                <TableRow />
            </table>  
            <ShowStudent /> 
            </>       
        );     
};

export default DataTable;





