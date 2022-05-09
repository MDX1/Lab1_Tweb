import LoginStore from './LoginStore'
import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [  
        {
            id: '1',
            title: 'Intrebarea 1:',
            description: 'Raspuns 1:',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Intrebarea 2',
            description: 'Raspuns 2:',
            seen: false,
            notes: '',

        }
    ]
})

export default storeProvider

export const storeLoginProv = LoginStore.create({
    contents:[
        {
            id: '1',
            user: 'dimon',
            password: 'dimon'
        }
    ]
})