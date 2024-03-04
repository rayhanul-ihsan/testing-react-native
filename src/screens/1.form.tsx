import { Input, InputField } from "@gluestack-ui/themed";
import React from "react";
import { Text, View } from "react-native";

const FormTest = () => {
  return (
    <>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="what happening?" />
      </Input>
    </>
  );
};

export default FormTest;
