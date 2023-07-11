import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { CSSTransition } from "react-transition-group";
import { Form } from "react-formio";
import "./stylesF.css";
import data from "./data.json";

type Props = {};

const ExistingForm = (props: Props) => {
  const dataF = [
    {
      id: 1,
      formName: "Form 1",
      date: "2023-07-01",
      // Add more properties as needed
    },
    {
      id: 2,
      formName: "Form 2",
      date: "2023-07-02",
      // Add more properties as needed
    },
  ];
  const form = {
    display: "form",
    components: data,
  };

  // const [name, setName] = useState('');
  // const [showCompanyField, setShowCompanyField] = useState(false);

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  //   setShowCompanyField(e.target.value === 'akash');
  // };
  const [openform, setopenform] = useState(false);
  const [editform, setEditform] = useState(false);
  function openformFun(){
    setopenform(true)
  }
  function closeform(){
    setopenform(false)
  }
  function EditformFun(){
    setEditform(true)
    setopenform(false)


  }
  return (
    <>
      {/* ---------------------Form---------------------------------------------- */}
     {
      openform &&
      <>
      <Form form={form} />
      <div onClick={()=>{closeform()}}>back</div>
      </>
     }
     {
      !openform &&
      <div  style={{ display: "flex", flexDirection: "column" }}>
        
        <div>
          {/* ---------------------Form---------------------------------------------- */}
          <h2 style={{ fontSize: "28px" }}> FORMS </h2>
          <hr></hr>
          <div className="list-container">
            {dataF.map((item) => (
              <div
                className="card"
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2>{item.formName}</h2>
                  <p>Date: {item.date}</p>
                </div>
                <div onClick={()=>{openformFun()}}>C</div>
                <div onClick={()=>{EditformFun()}}>E</div>
              </div>
            ))}
          </div>
        </div>
      </div>
     }
     
      
    </>
  );
};

export default ExistingForm;
