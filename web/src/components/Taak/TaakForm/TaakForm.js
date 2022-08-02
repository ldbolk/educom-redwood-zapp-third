import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const TaakForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.taak?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="taak"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Taak
        </Label>

        <TextField
          name="taak"
          defaultValue={props.taak?.taak}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="taak" className="rw-field-error" />

        <Label
          name="extra"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Extra
        </Label>

        <TextField
          name="extra"
          defaultValue={props.taak?.extra}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="extra" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaakForm
