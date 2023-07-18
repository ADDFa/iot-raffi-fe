import useGet from "../Hooks/useGet"
import useTimeDate from "../Hooks/useTimeDate"

const Report = () => {
    const result = useGet("result")
    const timeDate = useTimeDate()

    return (
        <div className="shadow mt-5 col-md-7 mx-auto p-4 rounded-3 report custom-scroll">
            <h1 className="fs-4 fw-bold text-center">Data Hasil Pengukuran</h1>

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">
                            No
                        </th>
                        <th scope="col" className="text-center">
                            Nama Pengguna
                        </th>
                        <th scope="col" className="text-center">
                            ADC
                        </th>
                        <th scope="col" className="text-center">
                            Glukosa
                        </th>
                        <th scope="col" className="text-center">
                            Hasil Klasifikasi
                        </th>
                        <th scope="col" className="text-center">
                            Tanggal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(
                        (
                            {
                                user: { name },
                                adc,
                                glucose,
                                clasification,
                                created_at
                            },
                            i
                        ) => (
                            <tr key={i}>
                                <th scope="row" className="text-center">
                                    {++i}
                                </th>
                                <td className="text-center">{name}</td>
                                <td className="text-center">{adc}</td>
                                <td className="text-center">{glucose}</td>
                                <td className="text-center">{clasification}</td>
                                <td className="text-center">
                                    {timeDate(created_at)}
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Report
