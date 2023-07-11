import React from 'react';
import "./table.css"

type Props = {};

const ChangelogPage = (props: Props) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>john.doe@example.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>30</td>
            <td>jane.smith@example.com</td>
          </tr>
          <tr>
            <td>David Johnson</td>
            <td>35</td>
            <td>david.johnson@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChangelogPage;