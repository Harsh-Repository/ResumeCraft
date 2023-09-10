import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import './AllResume.css';

function AllResumes() {
  const [data, setData] = useState("");

  useEffect(function () {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function deleteResume(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this resume?");
    
    if (confirmDelete) {
      fetch(`/api/${id}`, {
        method: 'DELETE',
      }).then(() => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      });
    }
  }

  return (
    <div>
      <Table responsive="sm" variant="primary">
        <thead>
          <tr className='text-center'>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr className='text-center' key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>
                  <button className='button'><Link to={`/viewResume/${item.id}`}>View</Link></button>
                </td>
                <td><button><Link to={`/updateResume/${item.id}`}>Update</Link></button></td>
                <td>
                  <button onClick={() => deleteResume(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllResumes;
