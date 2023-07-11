import React from 'react';
import "../Inbox/inbox_table.css"

type Props = {};

const Inbox = (props: Props) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>john.doe@example.com</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate saepe veniam cumque fuga v</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>30</td>
            <td>jane.smith@example.com</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate saepe veniam cumque fuga v</td>
          
          </tr>
          <tr>
            <td>David Johnson</td>
            <td>35</td>
            <td>david.johnson@example.com</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate saepe veniam cumque fuga v</td>
          
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inbox;