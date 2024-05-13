import React,{useId} from 'react'
//mrthod 02 of using forward ref
function Select({
  options,
  label,
  className='',
  ...props
},ref) {
  const id=useId();
  return (
    <div className={`w-full`}>
      label && <label className={className} htmlFor={id}></label>
      <select name="" id={id} {...props} ref={ref}
      className={`px-3 py-2 rounded-lg text-black  outline-none focus:bg-gray-50 bg-white duration-200 border border-gray-200 w-full ${className}`} >
       {options && options.map(option=>{
        <option key={option} value={option.value}>
          {option}
        </option>

       })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)

