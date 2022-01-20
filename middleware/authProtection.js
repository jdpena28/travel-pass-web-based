export default function ({ store, redirect }) {
    // if (process.client && !store.getters["isLoggedIn"]) return redirect("/login");
    if (!store.state.auth.token) return redirect("/login");
}
  