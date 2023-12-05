
import { Formik } from "formik"
import { useDispatch } from 'react-redux'
import { addAddressAction } from "../redux/slices/addressesSlice"

// eslint-disable-next-line react/prop-types
function AddNewAddress() {
    const dispatch = useDispatch()
    return (
        <div className="bg-stone-200 ">
            <Formik
                initialValues={{ state_name: '', city: '', address: '' }}
                onSubmit={(values) => {
                    dispatch(addAddressAction(values))

                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="bg-stone-200 m-2">
                            <label htmlFor="state_name" className="mx-3">state_name : </label>
                            <input className="border border-solid border-stone-800 rounded p-2" type="text" name="state_name" id="state_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.state_name}
                            />
                        </div>
                        <div className="bg-stone-200 m-2">
                            <label htmlFor="city" className="mx-3">city : </label>
                            <input className="border border-solid border-stone-800 rounded p-2" type="text" name="city" id="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                        </div>
                        <div className="bg-stone-200 m-2">
                            <label htmlFor="address" className="mx-3">address : </label>
                            <input className="border border-solid border-stone-800 rounded p-2" type="text" name="address" id="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                        </div>
                        <button className="bg-green-600 text-white p-2 rounded">add</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddNewAddress





// import clsx from "clsx"
// import { Formik } from "formik"
// import { useEffect, useRef, useState } from "react"
// // eslint-disable-next-line react/prop-types
// function AddNewAddress({ handleAddAddress }) {
//     // let a = 1
//     // console.log(" a : ", a)
//     // const [b, setB] = useState(true)
//     // console.log(" b : ", b)
//     // const counter = () => {
//     //     a += 1,
//     //         console.log(a)
//     // }
//     const [mouseIsIn, setMouseIsIn] = useState(false)

//     const [list, setList] = useState([])
//     console.log(" list : ", list)

//     useEffect(() => {
//         const fetchData = async () => {

//             const response = await fetch('http://localhost:3000/posts/3')
//             const res = await response.json()

//             setList(res)
//         }
//         mouseIsIn && fetchData()
//         console.log(" mouseIsIn : ", mouseIsIn)
//     }, [mouseIsIn])










//     return (
//         <div className="bg-stone-200 p-2" >

//             {/* {list?.map((item) => {
//                 return <p key={item.id}>
//                     {item.title}
//                 </p>
//             })} */}
//             {/* <div className="h-[20vh] w-44 bg-red-800" onMouseEnter={() => { setMouseIsIn(true) }}

//                 onMouseOut={() => { setMouseIsIn(false) }}
//             >
//                 <p className="text-white">{mouseIsIn ? 'true' : 'false'}</p>
//             </div> */}

//             {/* <button onClick={counter} className="bg-lime-800 text-white p-2">click me</button>
//             <p>count is  {a}</p>
//             {a > 10 ? 'counter bigger 10' : 'counter smaller 10'}
//             <button onClick={() => { setB(!b), console.log(b); }} className={clsx(
//                 { 'bg-lime-800': b },
//                 { 'bg-red-800': !b },
//                 'text-white',
//                 'p-2')}>
//                 click me 2</button> */}



//         </div>
//     )
// }

// export default AddNewAddress