import React, { useState } from "react";
import { FormBuilder as FormBuilderIo, Formio } from "react-formio";
import { formIoData } from "./consts";
import "./stylesF.css";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
// import "../../../public/style.css"

export default function App() {
  const [formData, setFormData] = useState(formIoData);

  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components,
    }).then((form: any) => {
      console.log(form.component.components);
      form.on("submit", (data: any) => console.log("submit", data));
    });
  };

  return (
  
    <div className="App" style={{padding:"26px"}}>
     
      <div>
        <div>
        <FormBuilderIo 
          form={formIoData}
          onSubmit={(data: any) => {
            console.log(data);
          }}
          saveForm={(data: any) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data: any) => console.log(data)}
        />
        </div>
        <button
          className="green"
          onClick={printResult}
          style={{
            position: "absolute",
            bottom: "3%",
            right: "36%",
          }}
        >
          Save form
        </button>
        <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div>
      </div>
    </div>
  );
}