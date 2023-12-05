import clsx from "clsx"

// eslint-disable-next-line react/prop-types
const Address = ({ id, state_name, city, address, handleRemove, handleEdit }) => {
    return (
        <div className={clsx('bg-slate-100 m-3 p-3 gap-6 flex ')}>
            < p >
                id: {id}
            </ p>
            <p>
                state_name: {state_name}
            </p>
            <p>
                city: {city}
            </p>
            <p>
                address: {address}
            </p>
            <button onClick={handleRemove} className="bg-red-500 text-white p-2 rounded">delete</button>
            <button onClick={handleEdit} className="bg-orange-300 text-white p-2 rounded">edit</button>
        </div >
    )
}

export default Address