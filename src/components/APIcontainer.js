import React, { useState, useEffect, useMemo } from "react";
import API from "../utils/API";
import Table from "../components/Table";

function APIcontainer() {

  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    API.search()
      .then((res) => {
        if (res.data.length === 0) throw new Error("No results found.");
        if (res.data.status === "error") throw new Error(res.data.message);

        setEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  
  const columns = useMemo(
    () => [
        {
          Header: 'Employee Information (click header name to sort)',
          columns: [
              {
                  Header: 'First Name',
                  accessor: 'name.first'
              },
              {
                  Header: 'Last Name',
                  accessor: 'name.last'
              },
              {
                  Header: 'City',
                  accessor: 'location.city'
              },
              {
                  Header: 'Country',
                  accessor: 'location.country'
              },
              {
                  Header: 'Username',
                  accessor: 'login.username'
              },
              {
                  Header: 'Email',
                  accessor: 'email'
              },
          ],
        },
      ],
      []       
    );
      
    return (
      <div className="APIcontainer">
        < Table columns={columns} data={employees} />
    </div>
    )

  // return (
  //   <div>
      
  //     <h1>Employee list:</h1>
  //       <table class="table table-bordered table-hover">
  //         <thead class="thead-dark">
  //           <tr>
  //             <th>Photo</th>
  //             <th>Name</th>
  //             <th>City</th>
  //             <th>Country</th>
  //             <th>Phone</th>
  //             <th>Username</th>
  //             <th>Email</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {employees.map((employee) => (
  //             <tr key={employee.phone}>
  //               <td>
  //                 <img
  //                   alt='employee portrait'
  //                   src={employee.picture.large}
  //                   style={{ maxWidth: "500px", borderRadius: "1px" }}
  //                 />
  //               </td>
  //               <td>
  //                 <p>
  //                   {employee.name.first} {employee.name.last}
  //                 </p>
  //               </td>
  //               <td>
  //                 <p >{employee.location.city}</p>
  //               </td>
  //               <td>
  //                 <p >{employee.location.country}</p>
  //               </td>
  //               <td>
  //                 <p >{employee.phone}</p>
  //               </td>
  //               <td>
  //                 <p >{employee.login.username}</p>
  //               </td>
  //               <td>
  //                 <p ><a href={employee.email}>{employee.email}</a></p>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
    
  }

export default APIcontainer;