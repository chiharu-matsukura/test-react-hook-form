import { TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";

const CustomTextField: React.FC<{ name: string }> = ({ name }) => {
  const { control } = useFormContext();
  const textBoxValue = useWatch({
    control,
    name, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "default" // default value before the render
  });
  useEffect(() => {
    console.log(textBoxValue);
  }, [textBoxValue]);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={"test"}
      rules={{ required: true }}
      render={({ field }) => <TextField {...field} />}
    />
  );
};

export default React.memo<{ name: string }>(CustomTextField);
