import React from 'react'
import { reduxForm, Field, submit } from 'redux-form'
import { connect } from 'react-redux'
import { submitUserAction } from '../../actions/user/UserAction'

const UserFormFunc = props => {
  const { handleSubmit } = props
  const submit = (data, submitUserAction) => {
    submitUserAction(data)
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(fields => submit(fields, submitUserAction))}>
        <label>Name</label>
        <Field type="text" component="input" name="name" />
        <label>E-mail</label>
        <Field type="text" component="input" name="email" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  )
}

const UserForm = () =>
  reduxForm({
    form: 'formUser'
  })(UserFormFunc)

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { submitUserAction })(UserForm)
