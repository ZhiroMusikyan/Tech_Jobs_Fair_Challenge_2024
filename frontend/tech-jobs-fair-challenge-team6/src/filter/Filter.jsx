import React, { useState } from "react";
import { Checkbox, Typography } from "antd";

const { Title } = Typography;

const data = {
  department: [
    { label: "IT", value: 0 },
    { label: "HR", value: 1 },
    { label: "Finance", value: 2 },
    { label: "Suport", value: 3 },
  ],
  contactType: [
    { label: "Internal", value: 0 },
    { label: "External", value: 1 },
    { label: "Partner", value: 2 },
    { label: "Created by me ", value: 3 },
  ],
};

const Filter = () => {
  const [filterParams, setFilterParams] = useState({});

  const handleOnChange = (checkedValues, t) => {
    setFilterParams((prevState) => ({ ...prevState, [t]: checkedValues }));
  };

  console.log("gggggg", filterParams);

  return (
    <div>
      {Object.entries(data).map(([key, options]) => (
        <div key={key}>
          <Title level={5}>{key}</Title>
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(checkedValues) => handleOnChange(checkedValues, key)}
            options={options}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
