import { database } from "../config/firebase";

const exportFirebase = async () => {

    let data = [];

    await database
        .ref('/')
        .once('value')
        .then((snapshot) => {
            data = snapshot.val();
        })
        .catch((error) => {
            console.log(error)
        });
    return data;
};

export default exportFirebase;
