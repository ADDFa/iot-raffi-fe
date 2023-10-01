import { initializeApp } from "@firebase/app"
import { getDatabase, ref, onValue, DataSnapshot } from "@firebase/database"

const app = initializeApp({
    databaseURL:
        "https://monitoring-glucose-raffizp-default-rtdb.asia-southeast1.firebasedatabase.app"
})
const database = getDatabase(app)

const Firebase = () => {
    return {
        adc: (callback: (snapshot: DataSnapshot) => void) => {
            onValue(ref(database, "ADC_Value(ADC)"), callback)
        },
        glucose: (callback: (snapshot: DataSnapshot) => void) => {
            onValue(ref(database, "Glukosa(Mgdl)"), callback)
        },
        clasification: (callback: (snapshot: DataSnapshot) => void) => {
            onValue(ref(database, "Klasifikasi"), callback)
        }
    }
}

export default Firebase
