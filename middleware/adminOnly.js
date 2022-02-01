export default function ({ store, redirect }) {
  // if (process.client && !store.getters["isLoggedIn"]) return redirect("/login");
  if (store.state.adminAuth.uid !== 'tawOoMA3IccVE0Wd3TIV8Nfq19t1')
    return redirect('/admin/login')
}
