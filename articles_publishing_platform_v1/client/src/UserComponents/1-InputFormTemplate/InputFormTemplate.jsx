import './InputFormTemplate.css';

export default function InputFormTemplate({
  input_or_textarea,
  label,
  type,
  name,
  value,
  handleInputOnChange,
}) {
  return (
    <div className='InputFormTemplateContainer'>
      <label htmlFor='article_title'>{label}</label>
      <{input_or_textarea}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleInputOnChange}
      />
    </div>
  );
}
