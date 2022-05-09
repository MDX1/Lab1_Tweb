import { applySnapshot, types } from 'mobx-state-tree'
import { LoginModel } from '../models/Login.model'


const LoginStore = types.model('LoginStore', {
    contents: types.array(LoginModel),

    contents_notes: types.array(types.safeReference(LoginModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('lab6', JSON.stringify(value))
        },
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        },
    }))

export default LoginStore;