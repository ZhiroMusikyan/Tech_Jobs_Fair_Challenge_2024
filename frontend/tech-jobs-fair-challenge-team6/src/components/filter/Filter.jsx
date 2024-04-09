import React from "react";
import { Checkbox, Typography } from "antd";
import { FILTER_PARAMS } from "../../constants/constants";

const { Title } = Typography;

const Filter = ({ handleFilterParamsChange }) => {
  return (
    <div>
      {Object.entries(FILTER_PARAMS).map(([key, options]) => (
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
