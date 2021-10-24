export const DatalistSelect = ({ items, label, id, datalistId, ...props }) => {

  function onInputInterceptor(event) {
    const lookup = items.find(item => item.name === event.target.value);

    if (props.onInput) {
      props.onInput(event, lookup);
    }
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} list={datalistId} onInput={onInputInterceptor} />
      <datalist id={datalistId}>
        {items.map((item, index) => <option key={index} value={item.name} />)}
      </datalist>
    </div>
  )
}

DatalistSelect.defaultProps = {
  type: 'text'
}
