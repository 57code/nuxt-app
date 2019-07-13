export default function({route, redirect, store}){
    if(!store.state.user.token) {
        redirect('/login?redirect='+route.path)
    }
}