import exportFirebase from './export-firebase'

export default class ListStoreService {

    data = exportFirebase();

    getList() {
        return new Promise((resolve) => {
            resolve(this.data);
        })
    }
}