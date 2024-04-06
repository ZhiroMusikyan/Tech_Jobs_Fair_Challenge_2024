import React, { useEffect } from "react";
import BasicFields from "./components/BasicFields";
import AdvancedFields from "./components/AdvancedFields";
import { errorMessage, successMessage } from "./constants/messages";
import TabForm from "../tab_form/TabForm";

const EditContactForm = ({ data, onConfirm, onCancel }) => {
  const items = [
    {
      key: "1",
      label: "Basic info",
      children: <BasicFields></BasicFields>,
    },
    {
      key: "2",
      label: "More info",
      children: <AdvancedFields></AdvancedFields>,
    },
  ];

  return (
    <TabForm
      title="Edit contact"
      confirmValue="Edit"
      items={items}
      successMsg={successMessage}
      errorMsg={errorMessage}
      onConfirm={onConfirm}
      onCancel={onCancel}
      open={data !== undefined}
      initialValues={data}
    />
  );
};
export default EditContactForm;
