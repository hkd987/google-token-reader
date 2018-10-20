# google token reader

Is a small helper class to help with process google id tokens from your frontend.


```javascript

import TICKET_TAKER from 'google-token-reader'
const PUBLIC_GOOGLE_ID = process.env.GOOGLE_CLIENT_ID

// NOTE: TOKEN COMES FROM YOUR FRONT END

const WORKER = new TICKET_TAKER({
  CLIENT_ID: PUBLIC_GOOGLE_ID
  })

// NOTE: GET THE ENTIRE GOOGLE USER BACK
const WHOLE_GOOGLE_OBJECT = WORKER.WHOLE_TICKET(token)

// NOTE: JUST GET THE USERS DOMAIN BACK IF ANY
const JUST_USER_DOMAIN = WORKER.DOMAIN(token)

// NOTE: JUST GET THE USERS EMAIL BACK
const JUST_USER_EMAIL = WORKER.EMAIL(token)

// NOTE: JUST BRING BACK THE USERS NAME
const JUST_USER_NAME = WORKER.NAME(token)

//NOTE: JUST BRING BACK THE USERS UUID
const JUST_USER_SUB_STRING = WORKER.SUB(token)
```

Please note that if the token from the front end is not valid it is possible for these to return null
You should always check that the value to ensure it is not null before doing anything else.


(More Info on the topic here)[https://developers.google.com/identity/sign-in/web/backend-auth]
