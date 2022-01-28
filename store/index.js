export const state = () => ({
  login: {
    email: 'email123',
    password: 'pass',
  },
  auth: {
    token: '',
    displayName: '',
    email: '',
  },
  adminAuth: {
    displayName: '',
    uid: '',
  },
  form: {
    lastName: '',
    firstName: '',
    middleName: '',
    age: '',
    email: '',
    bday: '',
    contactNum: '',
    // travelRequirements:[],
    from: '',
    arrivalDate: '',
    purposeVisit: '',
    destination: '',
    exitDate: '',
    modeOfTransport: '',
  },
  travellersID: {
    id: '',
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  SET_AUTH(state, auth) {
    state.auth = {
      token: auth.user.accessToken,
      displayName: auth.user.displayName,
      email: auth.user.email,
    }
  },
  SET_FORM(state, form) {
    state.form = {
      lastName: form.lastName,
      firstName: form.firstName,
      middleName: form.middleName,
      age: form.age,
      email: form.email,
      bday: form.bday,
      contactNum: form.contactNum,
      // travelRequirements: form.travelRequirements,
      from: form.from,
      arrivalDate: form.arrivalDate,
      purposeVisit: form.purposeVisit,
      destination: form.destination,
      exitDate: form.exitDate,
      modeOfTransport: form.modeOfTransport,
    }
  },
  SET_ADMIN_AUTH(state, adminAuth) {
    state.adminAuth = {
      displayName: adminAuth.user.displayName,
      uid: adminAuth.user.uid,
    }
  },
  SET_TRAVELLERS_ID(state, res) {
    state.travellersID = {
      id: res.id,
    }
  },
}
