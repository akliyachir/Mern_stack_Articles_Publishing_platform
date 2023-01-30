import './TextAreaFormTemplate.css';

export default function TextAreaFormTemplate({
  label,
  type,
  name,
  value,
  handleInputOnChange,
}) {
  return (
    <div className='TextAreaFormTemplateContainer'>
      <label htmlFor='article_title'>{label}</label>
      <textarea
        className='textarea'
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleInputOnChange}
      />
    </div>
  );
}
