import useGet from "../Hooks/useGet"

const Report = () => {
    const result = useGet("result")

    return (
        <div className="shadow mt-5 col-md-5 mx-auto p-4 rounded-3 report custom-scroll">
            <h1 className="fs-4 fw-bold">Hasil Laporan</h1>

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
                    </tr>
                </thead>
                <tbody>
                    {result.map(
                        (
                            { user: { name }, adc, glucose, clasification },
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
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Report
