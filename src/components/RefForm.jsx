import { useRef } from 'react'
import './RefForm.css'

const RefForm = () => {
  const fullname = useRef(null)
  const address = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (fullname.current.value.length < 4) {
      alert('Name is too short!')
    }
  }

  return (
    <div className="ref-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" ref={fullname} placeholder="Full name" />
        <input type="text" name="address" ref={address} placeholder="Address" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default RefForm