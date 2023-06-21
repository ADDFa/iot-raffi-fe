import { useCallback, useEffect, useRef } from "react"
import Firebase from "../Functions/Firebase"
import Value from "./Dashboard/Value"
import ButtonFullRounded from "../Components/ButtonFullRounded"
import useFormBuilder from "../Hooks/useFormBuilder"
import usePost from "../Hooks/usePost"

const Dashboard = () => {
    const data = Firebase()
    const formBuilder = useFormBuilder()
    const create = usePost()
    const adcRef = useRef<HTMLSpanElement>(null)
    const glucoseRef = useRef<HTMLSpanElement>(null)
    const clasificationRef = useRef<HTMLSpanElement>(null)

    const getClassification = useCallback((clasVal: string) => {
        return clasVal == "0" ? "Normal" : "Diabetes"
    }, [])

    useEffect(() => {
        data.adc((snapshot) => {
            if (!adcRef.current) return
            adcRef.current.textContent = snapshot.val()
        })
        data.glucose((snapshot) => {
            if (!glucoseRef.current) return
            glucoseRef.current.textContent = snapshot.val()
        })
        data.clasification((snapshot) => {
            if (!clasificationRef.current) return
            clasificationRef.current.textContent = getClassification(
                snapshot.val()
            )
        })
    }, [data, getClassification])

    const saveResult = async () => {
        const adcVal = adcRef.current?.textContent || ""
        const gluVal = glucoseRef.current?.textContent || ""
        const clasVal = clasificationRef.current?.textContent || ""

        const form = formBuilder(
            ["user_id", "adc", "glucose", "clasification"],
            ["1", adcVal, gluVal, getClassification(clasVal)]
        )
        create("result", form)
    }

    return (
        <div className="h-100">
            <div className="shadow col-md-4 mx-auto mt-5 p-5 rounded-3">
                <h1 className="text-center fs-4 fw-bold mb-5">
                    Memulai Perhitungan
                </h1>

                <Value name="Nilai ADC : " ref={adcRef} value="0" />
                <Value name="Nilai Glukosa : " ref={glucoseRef} value="0" />
                <Value
                    name="Hasil Klasifikasi : "
                    ref={clasificationRef}
                    value="Normal"
                />

                <ButtonFullRounded text="Simpan" onClick={saveResult} />
            </div>

            <div className="col-md-4 p-3 rounded-3 mt-5 mx-auto text-center">
                <p className="fs-5">
                    Hubungi Kami
                    <br />
                    <span className="fs-6">
                        Email : raffizahrandhikap@gmail.com
                    </span>
                    <br />
                    <span className="fs-6">No. Telp : 085156762828</span>
                </p>
            </div>
        </div>
    )
}

export default Dashboard
