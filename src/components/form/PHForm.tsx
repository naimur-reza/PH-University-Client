import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const PHForm = ({
  onSubmit,
  children,
}: {
  onSubmit: any;
  children: ReactNode;
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
