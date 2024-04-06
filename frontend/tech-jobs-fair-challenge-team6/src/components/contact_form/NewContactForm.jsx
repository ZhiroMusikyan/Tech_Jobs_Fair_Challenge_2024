import React from "react";
import BasicFields from "./components/BasicFields";
import AdvancedFields from "./components/AdvancedFields";
import FormLayout from "./components/FormLayout";

const successMessage = "The contact was added successfully!";
const errorMessage =
  "Ups! Something went wrong, try to check the values entered.";

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
    <FormLayout
      title="New contact"
      confirmValue="Add"
      items={items}
      successMessage={successMessage}
      errorMessage={errorMessage}
      onConfirm={onConfirm}
      onCancel={onCancel}
      open={open}
    />
  );
};
export default NewContactForm;
