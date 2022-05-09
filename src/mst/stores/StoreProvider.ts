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