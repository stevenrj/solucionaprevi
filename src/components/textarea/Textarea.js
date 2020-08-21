import React from 'react'

export default function Textarea({children, rows, id, onChange}) {
const handleChange = (event) => {
  onChange(event.target.value)
}
  return (
    <div>
      <div className="form-group col-lg-15">
          <label htmlFor={id}>{children}</label>
          <textarea
            className="form-control"
            id={id}
            rows={rows}      
            onChange={handleChange}      
          ></textarea>
        </div>
    </div>
  )
}
