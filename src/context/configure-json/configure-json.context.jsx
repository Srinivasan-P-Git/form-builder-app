import { createContext, useState } from "react";

export const INITIAL_FORM_DATA = {
  jsonTemplate: [
    {
      id: "firstName",
      name: "First Name",
      type: "text",
      required: true,
    },
    {
      id: "lastName",
      name: "Last Name",
      type: "text",
      required: true,
    },
    {
      id: "age",
      name: "Age",
      type: "number",
      required: true,
    },
    {
      id: "gender",
      name: "Gender",
      type: "select",
      required: true,
      options: ["Male", "Female", "Trans-Gender"],
    },
    {
      id: "skills",
      name: "Skills",
      type: "checkbox",
      required: false,
      options: ["Fore Hand", "Back Hand", "Serve", "Volley"],
    },
    {
      id: "playStyle",
      name: "Playing Style",
      type: "select",
      required: false,
      options: ["Aggressive", "Defensive"],
    },
  ],
  jsonData: {
    firstName: "Roger",
    age: 41,
  },
};

export const ConfigureJsonContext = createContext({
  jsonTemplate: INITIAL_FORM_DATA.jsonTemplate,
  jsonData: INITIAL_FORM_DATA.jsonData,
  setJsonTemplate: () => {},
  setJsonData: () => {},
});

export const ConfigureJsonContextProvider = ({ children }) => {
  const [jsonTemplate, setJsonTemplate] = useState(
    INITIAL_FORM_DATA.jsonTemplate
  );
  const [jsonData, setJsonData] = useState(INITIAL_FORM_DATA.jsonData);

  return (
    <ConfigureJsonContext.Provider
      value={{ jsonTemplate, jsonData, setJsonTemplate, setJsonData }}
    >
      {children}
    </ConfigureJsonContext.Provider>
  );
};
