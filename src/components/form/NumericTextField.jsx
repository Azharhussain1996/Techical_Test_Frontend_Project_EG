import { NumericFormat } from "react-number-format";

const NumericTextField = ({ inputRef, onChange, name, ...other }) => {
  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      decimalScale={0}
      fixedDecimalScale
      allowNegative={false}
    />
  );
};

export default NumericTextField;
