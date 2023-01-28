const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
const auth_token = '5abef8103def345fa643ba5b381bfed7'
const twilio = require('twilio')(sid, auth_token)

twilio.messages.create({
  from: "+13187082606",
  to: '+84379124695',
  body: 'OTP: 185324'
})
.then((res) => console.log('message has sent!'))
.catch((err) => console.log(err))