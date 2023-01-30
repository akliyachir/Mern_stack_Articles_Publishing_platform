export default function TextAreaFormTemplate({
  label,
  type,
  name,
  value,
  handleInputOnChange,
}) {
  return (
    <div className='InputFormTemplateContainer'>
      <label htmlFor='article_title'>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleInputOnChange}
      />
    </div>
  );
}
