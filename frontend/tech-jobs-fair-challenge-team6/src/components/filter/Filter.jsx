import React from "react";
import { Checkbox, Typography } from "antd";

const { Title } = Typography;

const datar = {
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

const Filter = ({ handleFilterParamsChange }) => {
  return (
    <div>
      {Object.entries(datar).map(([key, options]) => (
        <div key={key}>
          <Title level={5}>{key}</Title>
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={(checkedValues) =>
              handleFilterParamsChange(checkedValues, key)
            }
            options={options}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
