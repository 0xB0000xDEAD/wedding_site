import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import Form from 'components/form'
import Input from 'components/input'
import { request, serialize } from 'utils'
import Button from 'components/button'
import H1 from 'components/h1'

//original... in case you want to take a look at the original app script
// const GOOGLE_SHEETS_DB = 'https://script.google.com/macros/s/AKfycbxQgr4Z8YUiGbYwkSBTzC1ZC548Hmkl6jkRUfS9SdHGuYCYYrko/exec'

const GOOGLE_SHEETS_DB =
  'https://script.google.com/macros/s/AKfycby-123gteGEYwMlfU-tFrFK2oh2HP9OO-RJwF5N4BfF5qDpvoZy/exec'

/**
 * Process described here https://gist.github.com/willpatera/ee41ae374d3c9839c2d6
 * view demo results here: https://docs.google.com/spreadsheets/d/1jSKirsg20c9LosNP1KLhoo6TKnoyLXm5GyHWkSwamyw/edit?usp=sharing
 */

const initialState = {
  isLoading: false,
  isFormSuccess: false,
  isFormError: false,
  errorMessage: undefined,
}

class InvitePage extends React.Component {
  _delayStateTimeout

  constructor(props) {
    super(props)

    this.state = initialState
  }

  componentWillUnmount() {
    clearTimeout(this._delayStateTimeout)
  }

  _handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    this.setState({ isLoading: true }, () => this._postForm(ev))
  }

  _postForm = ev => {
    const form = ev.target
    const name = form.elements['name'].value
    const data = serialize(form)
    request(`${GOOGLE_SHEETS_DB}?${data}`)
      .then(response => {
        if (response.result === 'success') {
          const successMessage =
            name &&
            typeof name === 'string' &&
            `${name} has been added to the list`
          this.setState({
            successMessage,
            isFormSuccess: true,
            isLoading: false,
          })
          // TODO: reset some state values
          ev.target.reset()
        }
      })
      .catch(error => {
        const { message } = error
        this.setState({
          errorMessage: message,
          isFormError: true,
          isLoading: false,
        })
      })
  }

  _resetState = () => this.setState(initialState)

  render() {
    const {
      isFormSuccess,
      successMessage,
      isFormError,
      errorMessage,
    } = this.state
    return (
      <Layout header={false}>
        <SEO title="Invite" />
        <SiteTitle />
        <Content>
          {isFormError
            ? this._renderError(errorMessage)
            : isFormSuccess
            ? this._renderSuccess(successMessage)
            : this._renderForm(this.state)}
        </Content>
      </Layout>
    )
  }

  _renderError = message => {
    return (
      <div style={{ textAlign: 'center' }}>
        <H1>Oops! There was an issue saving your form.</H1>
        <p>{message}</p>
        <Button
          onClick={this._resetState}
          text="Try again"
          style={{ margin: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  _renderSuccess = message => {
    return (
      <div style={{ textAlign: 'center' }}>
        <H1>Thank you</H1>
        <p>{message || 'Saved!'}</p>
        <Button
          onClick={this._resetState}
          text="Add another"
          style={{ margin: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  _renderForm = state => {
    const sharedProps = {
      disabled: state.isLoading,
    }
    return (
      <Form name="Invite" onSubmit={this._handleSubmit}>
        <H1>Request an invitation</H1>
        <Input label="Name" type="text" name="name" required {...sharedProps} />
        <Input
          label="Street Address"
          type="text"
          name="street_1"
          required
          {...sharedProps}
        />
        <Input
          label="Street Address 2"
          type="text"
          name="street_2"
          {...sharedProps}
        />
        <div style={{ display: 'flex' }}>
          <Input
            label="City"
            type="text"
            name="city"
            required
            style={{ width: '100%' }}
            {...sharedProps}
          />
          <Input
            label="State"
            type="text"
            name="state"
            required
            style={{ marginLeft: '8px' }}
            {...sharedProps}
          />
          <Input
            label="Zip"
            type="text"
            name="zip"
            required
            style={{ marginLeft: '8px', width: '100%' }}
            {...sharedProps}
          />
        </div>
        <Button
          type="submit"
          text="Submit"
          style={{ margin: 'auto', display: 'block' }}
          {...sharedProps}
        />
      </Form>
    )
  }
}

export default InvitePage
