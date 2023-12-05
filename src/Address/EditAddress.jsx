// import { Formik } from "formik"

import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const EditAddress = ({ address, handleEditAddress }) => {
    const [values, setValues] = useState(address)
    useEffect(() => {
        setValues(address)
    }, [address])


    return (
        // <Formik
        //     // eslint-disable-next-line react/prop-types
        //     initialValues={{ state_name: address?.state_name, city: address?.city, address: address?.address }}
        //     onSubmit={(values) => {
        //         handleEditAddress({ ...values, ...address })
        //     }}
        // >
        //     {({
        //         values,
        //         handleChange,
        //         handleBlur,
        //         handleSubmit,
        //         /* and other goodies */
        //     }) => (
        <form onSubmit={handleEditAddress}>
            <div className="bg-stone-200 m-2">
                <label htmlFor="state_name" className="mx-3">state_name : </label>
                <input className="border border-solid border-stone-800 rounded p-2" type="text" name="state_name" id="state_name"

                    value={values.state_name}
                />
            </div>
            <div className="bg-stone-200 m-2">
                <label htmlFor="city" className="mx-3">city : </label>
                <input className="border border-solid border-stone-800 rounded p-2" type="text" name="city" id="city"

                    value={values.city}
                />
            </div>
            <div className="bg-stone-200 m-2">
                <label htmlFor="address" className="mx-3">address : </label>
                <input className="border border-solid border-stone-800 rounded p-2" type="text" name="address" id="address"

                    value={values.address}
                />
            </div>
            <button className="bg-green-600 text-white p-2 rounded">add</button>
        </form>
        // )}
        // </Formik>
    )
}

export default EditAddress