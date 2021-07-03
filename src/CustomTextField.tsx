import { TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField: React.FC<{ name: string }> = ({ name }) => {
  const { control, watch } = useFormContext();
  const textBoxValue = React.useMemo(() => watch(name), [watch, name]);
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
