export class LocalData {
     localStore = []

     create(item) {
        this.localStore.push(item)
     }

     read(id) {
        const item = this.localStore.find(item => item.id === id)
     }

     update(id, data) {
        const dataTargetIndex = this.localStore.findIndex(item => item.id === id)
        if(dataTargetIndex < 0) return undefined
        const previousData = this.localStore[dataTargetIndex]
        const newData = {
            ...previousData,
            ...value
        }
        this.localStore[dataTargetIndex] = newData
        return this.localStore[dataTargetIndex]
     }

     delete(id) {
        this.localStore = this.localStore.filter(item => item.id !== id)
     }
}