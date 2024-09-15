const Input = ({ label, onChange, value }) => (
  <div>
    <label>{label}</label>
    <input type="number" onChange={onChange} value={value} />
  </div>
);
