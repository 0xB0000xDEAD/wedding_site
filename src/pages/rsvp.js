import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import Form from 'components/form'
import Input from 'components/input'
import { request, serialize } from 'utils'
import AjaxButton from 'components/ajaxButton'
import Checkbox from 'components/checkbox'
import H1 from 'components/h1'
import { FormattedMessage } from 'react-intl'

//original... in case you want to take a look at the original app script
// const GOOGLE_SHEETS_DB = 'https://script.google.com/macros/s/AKfycbxQgr4Z8YUiGbYwkSBTzC1ZC548Hmkl6jkRUfS9SdHGuYCYYrko/exec'

const GOOGLE_SHEETS_DB =
  'https://script.google.com/macros/s/AKfycby-123gteGEYwMlfU-tFrFK2oh2HP9OO-RJwF5N4BfF5qDpvoZy/exec'

/**
 * Process described here https://gist.github.com/willpatera/ee41ae374d3c9839c2d6
 * view demo results here: https://docs.google.com/spreadsheets/d/1jSKirsg20c9LosNP1KLhoo6TKnoyLXm5GyHWkSwamyw/edit?usp=sharing
 */

class RsvpPage extends React.Component {
  _delayStateTimeout

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      isFormSuccess: false,
      isFormError: false,
      formError: undefined,
      rsvpValue: true,
      veggieValue: false,
      countValue: 0,
    }
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
    const data = serialize(ev.target)
    request(`${GOOGLE_SHEETS_DB}?${data}`)
      .then(response => {
        if (response.result === 'success') {
          this.setState(
            {
              isFormSuccess: true,
              isLoading: false,
            },
            () =>
              this._delaySetState({
                isFormSuccess: false,
              })
          )
          // TODO: reset some state values
          ev.target.reset()
        }
      })
      .catch(error => {
        const { message } = error
        this.setState(
          {
            formError: message,
            isFormError: true,
            isLoading: false,
          },
          () =>
            this._delaySetState({
              isFormError: false,
            })
        )
      })
  }

  _delaySetState = newState => {
    this._delayStateTimeout = setTimeout(() => this.setState(newState), 2000)
  }

  render() {
    const { isLoading, isFormSuccess, formError } = this.state

    return (
      <Layout>
        <SEO title="RSVP" />
        <SiteTitle />
        <Content>
          <Form name="rsvp" onSubmit={this._handleSubmit}>
            <H1>
              <FormattedMessage id="rsvp" />
            </H1>
            <Input
              label={<FormattedMessage id="form_first_name" />}
              type="text"
              name="first_name"
              required
            />
            <Input
              label={<FormattedMessage id="form_last_name" />}
              name="last_name"
              required
            />
            <Input
              label={<FormattedMessage id="form_email" />}
              type="email"
              name="email"
            />
            {/* <Input
              label="Street Address"
              type="text"
              name="street_1"
              required
            /> */}
            {/* <Input
              label="Street Address 2"
              type="text"
              name="street_2"
            /> */}
            {/* <div style={{ display: 'flex' }}>
              <Input
                label="City"
                type="text"
                name="city"
                required
                style={{ width: '100%' }}
              />
              <Input
                label="State"
                type="text"
                name="state"
                required
                style={{ marginLeft: '8px' }}
              />
              <Input
                label="Zip"
                type="text"
                name="zip"
                required
                style={{ marginLeft: '8px', width: '100%' }}
              />
            </div> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                label={<FormattedMessage id="form_coming" />}
                name="rsvp"
                style={{ width: '15em', marginTop: '25.6px' }}
                onChange={this._handleRsvpCheckbox}
                checked={this.state.rsvpValue}
                value={this.state.rsvpValue ? 'yes' : 'no'}
              />
              <Input
                label={<FormattedMessage id="form_coming_with" />}
                type="number"
                name="count"
                style={{ width: '100%' }}
                onChange={this._handleChangeCount}
                value={this.state.countValue}
                disabled={!this.state.rsvpValue}
                min={0}
                max={10}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                label={<FormattedMessage id="form_veggie" />}
                name="veggie"
                style={{ width: '15em', marginTop: '25.6px' }}
                onChange={this._handleVeggieCheckbox}
                checked={this.state.veggieValue}
                value={this.state.veggieValue ? 'yes' : 'no'}
              />
              {/* <Input
                // label="In my party (excluding me)"
                label="People coming with me"

                type="number"
                name="count"
                style={{ width: '100%' }}
                onChange={this._handleChangeCount}
                value={this.state.countValue}
                disabled={!this.state.rsvpValue}
                min={0}
                max={10}
              /> */}
            </div>
            <Input
              label={<FormattedMessage id="form_note" />}
              name="note"
              multiline
            />
            <AjaxButton
              isLoading={isLoading}
              isSuccess={isFormSuccess}
              isFail={!!formError}
            />
          </Form>
        </Content>
      </Layout>
    )
  }

  _handleRsvpCheckbox = ev => {
    const rsvpValue = !this.state.rsvpValue
    this.setState({ rsvpValue })
    if (!rsvpValue) {
      this.setState({ countValue: 0 })
    }
  }
  _handleVeggieCheckbox = ev => {
    const veggieValue = !this.state.veggieValue
    this.setState({ veggieValue })

    // if (!veggieValue) {
    //   this.setState({ countValue: 0 })
    // }
  }

  _handleChangeCount = ev => {
    this.setState({ countValue: ev.target.value })
  }
}

export default RsvpPage
