import React from 'react';
import { PieChart, Pie,LineChart, Line, XAxis, CartesianGrid, Tooltip  } from 'recharts';

type Props = {};

const AdminPage = (props: Props) => {
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  const Linedata = [
    {
      name: "2019",
      submitted: 4000,
      approved: 2400,
      Rejected: 2400,
    },
    {
      name: "2020",
      submitted: 3000,
      approved: 1398,
      Rejected: 2210,
    },
    {
      name: "2021",
      submitted: 2000,
      approved: 9800,
      Rejected: 2290,
    },
    {
      name: "2022",
      submitted: 2780,
      approved: 3908,
      Rejected: 2000,
    },
    {
      name: "2023",
      submitted: 1890,
      approved: 4800,
      Rejected: 2181,
    },
    {
      name: "2024",
      submitted: 1890,
      approved: 4800,
      Rejected: 2181,
    },
    {
      name: "2025",
      submitted: 1890,
      approved: 4800,
      Rejected: 2181,
    },
    {
      name: "2026",
      submitted: 1890,
      approved: 4800,
      Rejected: 2181,
    },
    
  ];
  


return (
  <div >
    <h1 style={{width:"100%", backgroundColor:"lightgray",background: "lightgray",
    padding: "12px",
    borderRadius: "12px",
    color:" #495057",}}>ADMIN DASHBOARD</h1>
    <div style={{display:"flex",justifyContent:"space-around"}}>
  <PieChart width={400} height={400} style={{
          marginTop:"40px"
        }}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />
</PieChart>
<LineChart
        width={400}
        height={400}
        data={Linedata}
        margin={{ top: 118, right: 20, left: 10, bottom: 5 }}
        
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="submitted" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="approved" stroke="#387908" yAxisId={1} />
        <Line type="monotone" dataKey="Rejected" stroke="red" yAxisId={2}/>
      </LineChart>
</div>
</div>
);
};

export default AdminPage;