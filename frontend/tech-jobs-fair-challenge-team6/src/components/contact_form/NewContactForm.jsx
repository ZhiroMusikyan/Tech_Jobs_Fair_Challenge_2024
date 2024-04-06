import React from "react";
import BasicFields from "./components/BasicFields";
import AdvancedFields from "./components/AdvancedFields";
import { errorMessage, successMessage } from "./constants/messages";
import TabForm from "../tab_form/TabForm";

const NewContactForm = ({ open, onConfirm, onCancel }) => {
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
      title="New contact"
      confirmValue="Add"
      items={items}
      successMsg={successMessage}
      errorMsg={errorMessage}
      onConfirm={onConfirm}
      onCancel={onCancel}
      open={open}
      initialValues={{ prefix: "1" }}
    />
  );
};
export default NewContactForm;
