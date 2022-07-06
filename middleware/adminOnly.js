import {getAuth,onAuthStateChanged} from 'firebase/auth'
export default function ({ redirect }) {
  // if (process.client && !store.getters["isLoggedIn"]) return redirect("/login");
  /* if (store.state.adminAuth.uid !== 'tawOoMA3IccVE0Wd3TIV8Nfq19t1')
    return redirect('/admin/login') */
  const auth = getAuth()
  onAuthStateChanged(auth,(user)=>{
    if (user) {
      if (user.uid !== 'tawOoMA3IccVE0Wd3TIV8Nfq19t1' && user.uid !== 'uTaZC36gNWVtXfKHlF45qKchvEi2' && user.uid !== "UP75R1ylJLOltn3O2FwfLdEuHoH3" &&
      user.uid !== "UP75R1ylJLOltn3O2FwfLdEuHoH3" && user.uid !== "ix7caB7b1VNb3hxu7BgMUwpgw8f2")
        return redirect('/admin/login')
    }
  })
}
