import { Fragment, ReactNode, useId } from "react";

interface InputContent {
  label?: ReactNode;
  input: ReactNode;
}

interface Props {
  content: InputContent;
}

const FormInputInterface = ({ content }: Props) => {
  return (
    <>
      {content.label || null}
      {content.input}
    </>
  );
};

interface ListProps {
  content: InputContent[];
}

const List = ({ content }: ListProps) => {
  const keyId = useId();

  return (
    <>
      {content.map((inputContent) => (
        <Fragment key={keyId}>
          {inputContent.label}
          {inputContent.input}
        </Fragment>
      ))}
    </>
  );
};

FormInputInterface.List = List;

export default FormInputInterface;
