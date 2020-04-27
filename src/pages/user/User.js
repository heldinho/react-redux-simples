import React, { useState } from 'react'
import List from '../../List'

export default function User(props) {
  const [values, setValues] = useState({})
  const changeValues = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value
    })
  }
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{values.name}</p>
      <p>{values.lastname}</p>
      <p>{values.age}</p>
      <p>{values.city}</p>
      <form>
        <table>
          <tr>
            <td>First Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={e => changeValues(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input
                type="text"
                name="lastname"
                value={values.lastname}
                onChange={e => changeValues(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              <input
                type="tel"
                name="age"
                value={values.age}
                onChange={e => changeValues(e)}
              />
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={e => changeValues(e)}
              />
            </td>
          </tr>
        </table>
      </form>
      <List />
    </React.Fragment>
  )
}
