export const formIoData = {
  display: "form",
  components: [
    // {
    //   label: "Checkbox",
    //   tableView: false,
    //   key: "checkbox",
    //   type: "checkbox",
    //   input: true
    // },
    {
      label: "First Name",
      tableView: true,
      validate: {
        // pattern: "/^([A-Z][a-z .'-]*)*$/",
        customMessage: "Test error",
        // "custom": "valid = (input !== 'Joe')",
        minLength: 3,
        maxLength: 10
      },
      errorLabel: "Please fill in only letters.",
      key: "FirstName",
      type: "textfield",
      input: true
    },
    {
      label: "Last Name",
      tableView: true,
      validate: {
        // pattern: "/^([A-Z][a-z .'-]*)*$/",
        customMessage: "Test error",
        // "custom": "valid = (input !== 'Joe')",
        minLength: 3,
        maxLength: 10
      },
      errorLabel: "Please fill in only letters.",
      key: "LastName",
      type: "textfield",
      input: true
    },
    {
      label: "Text Field",
      tableView: true,
      validate: {
        // pattern: "/^([A-Z][a-z .'-]*)*$/",
        customMessage: "Test error",
        // "custom": "valid = (input !== 'Joe')",
        minLength: 3,
        maxLength: 10
      },
      errorLabel: "Please fill in only letters.",
      key: "textField",
      type: "textfield",
      input: true
    },
    {
      type: "button",
      label: "Submit",
      key: "submit",
      disableOnInvalid: true,
      input: true,
      tableView: false
    }
  ]
};
