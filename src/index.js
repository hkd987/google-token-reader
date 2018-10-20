const { OAuth2Client } = require('google-auth-library')

module.exports = class TICKET_TAKER {
  constructor ({ CLIENT_ID }) {
    this.client = new OAuth2Client(CLIENT_ID)
    this.CLIENT_ID = CLIENT_ID
  }

  async _ticket (token) {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: this.CLIENT_ID
    })
    return ticket
  }

  async _claims (ticketPayLoadObject) {
    const { aud } = ticketPayLoadObject
    if (aud === this.CLIENT_ID) {
      return ticketPayLoadObject
    } else {
      return null
    }
  }

  async WHOLE_TICKET (token) {
    const ticket = await this._ticket(token)
    const userObejct = this._claims(ticket.getPayload())
    if (userObejct) {
      return userObejct
    } else {
      return null
    }
  }

  async DOMAIN (token) {
    const ticket = await this._ticket(token)
    const { hd } = this._claims(ticket.getPayload())
    if (hd) {
      return hd
    } else {
      return null
    }
  }

  async EMAIL (token) {
    const ticket = await this._ticket(token)
    const { email } = this._claims(ticket.getPayload())
    if (email) {
      return email
    } else {
      return null
    }
  }

  async NAME (token) {
    const ticket = await this._ticket(token)
    const { name } = this._claims(ticket.getPayload())
    if (name) {
      return name
    } else {
      return null
    }
  }

  async SUB (token) {
    const ticket = await this._ticket(token)
    const { sub } = this._claims(ticket.getPayload())
    if (sub) {
      return sub
    } else {
      return null
    }
  }
}
