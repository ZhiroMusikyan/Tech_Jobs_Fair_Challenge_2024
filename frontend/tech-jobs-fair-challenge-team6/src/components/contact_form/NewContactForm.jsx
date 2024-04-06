import React from "react";
import BasicFields from "./components/BasicFields";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdvancedFields from "./components/AdvancedFields";
import { errorMessage, successMessage } from "./constants/messages";
import TabForm from "../tab_form/TabForm";
import { createContact } from "../../api/contacts";

const NewContactForm = ({ open, onConfirm, onCancel }) => {
  const queryClient = useQueryClient();

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

  const { mutate } = useMutation({
    mutationFn: (e) => createContact(e),
    onSuccess: () => {
      console.log("onSuccess");
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getContactsList"] });
    },
  });
  const handleConfirm = (value) => {
    onConfirm();
    mutate({ ...value });
  };

  return (
    <TabForm
      title="New contact"
      confirmValue="Add"
      items={items}
      successMsg={successMessage}
      errorMsg={errorMessage}
      onConfirm={handleConfirm}
      onCancel={onCancel}
      open={open}
      initialValues={{ prefix: "1" }}
    />
  );
};
export default NewContactForm;
