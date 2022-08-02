import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const KlantForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.klant?.id)
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
          name="naam"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Naam
        </Label>

        <TextField
          name="naam"
          defaultValue={props.klant?.naam}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="naam" className="rw-field-error" />

        <Label
          name="adres"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adres
        </Label>

        <TextField
          name="adres"
          defaultValue={props.klant?.adres}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adres" className="rw-field-error" />

        <Label
          name="postcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postcode
        </Label>

        <TextField
          name="postcode"
          defaultValue={props.klant?.postcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="postcode" className="rw-field-error" />

        <Label
          name="woonplaats"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Woonplaats
        </Label>

        <TextField
          name="woonplaats"
          defaultValue={props.klant?.woonplaats}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="woonplaats" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default KlantForm
