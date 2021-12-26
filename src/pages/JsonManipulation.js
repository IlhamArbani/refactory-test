import {useRef,useState} from 'react';

const JsonManipulation = () => {

    const inputDate = useRef();
    const [resultItem,setResultItem] = useState([]);

    const data = [
        {
            "inventory_id": 9382,
            "name": "Brown Chair",
            "type": "furniture",
            "tags": [
                "chair",
                "furniture",
                "brown"
            ],
            "purchased_at": 1579190471,
            "placement": {
                "room_id": 3,
                "name": "Meeting Room"
            }
        },
        {
            "inventory_id": 9380,
            "name": "Big Desk",
            "type": "furniture",
            "tags": [
                "desk",
                "furniture",
                "brown"
            ],
            "purchased_at": 1579190642,
            "placement": {
                "room_id": 3,
                "name": "Meeting Room"
            }
        },
        {
            "inventory_id": 2932,
            "name": "LG Monitor 50 inch",
            "type": "electronic",
            "tags": [
                "monitor"
            ],
            "purchased_at": 1579017842,
            "placement": {
                "room_id": 3,
                "name": "Lavender"
            }
        },
        {
            "inventory_id": 232,
            "name": "Sharp Pendingin Ruangan 2PK",
            "type": "electronic",
            "tags": [
                "ac"
            ],
            "purchased_at": 1578931442,
            "placement": {
                "room_id": 5,
                "name": "Dhanapala"
            }
        },
        {
            "inventory_id": 9382,
            "name": "Alat Makan",
            "type": "tableware",
            "tags": [
                "spoon",
                "fork",
                "tableware"
            ],
            "purchased_at": 1578672242,
            "placement": {
                "room_id": 10,
                "name": "Rajawali"
            }
        }
    ]

// Find items in the Meeting Room Function
    const getItemsByRoom = (name) => {
        const result = []

        data.forEach(item => {
            if(item.placement && item.placement.name == name){
                result.push(item)
            }
        })

        setResultItem(result)
    }


// Find all electronic devices Function & Find all the furniture Function
    const getItemsByType = (type) => {
        const result = []

        data.forEach(item => {
            if(item.type == type){
                result.push(item)
            }
        })

        setResultItem(result)
    }


// Find all items were purchased on 16 Januari 2020 Function
    const getItemByPruchased = () => {
        const result = []

        const date = Date.parse(inputDate.current.value)

        console.log(date);

        data.forEach(item => {
            if(item.purchased_at == date){
                result.push(item)
            }
        })

        setResultItem(result)
    }

// Find all items with brown color Function
    const getItemsByTags = (color) => {
        const result = []

        data.forEach(item => {
            item.tags.forEach(tag => {
                if(tag == color){
                    result.push(item)
                }
            })
        })

        setResultItem(result)
    }

    const MyTable = (
        <tbody>
            {
                resultItem.map(item => {
                    <tr>
                        <td>{item.inventory_id}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.tags.join('|')}</td>
                        <td>{item.purchased_at}</td>
                        <td>{item.placement.name}</td>
                    </tr>
                })
            }
        </tbody>
    );

    return(
        <section className="flex items-center flex-col">
        <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
            <h1 className="text-xl font-bold mb-4">JSON Manipulation</h1>
            <div className='flex flex-col mb-4'>
                <button onClick={() => getItemsByRoom('Meeting Room')} className="hover:shadow-md mb-2 border-2 border-gray-300 rounded-lg px-5">Get items in the Meeting Room.</button>
                <button onClick={() => getItemsByType('electronic')} className="hover:shadow-md mb-2 border-2 border-gray-300 rounded-lg px-5">Get all electronic devices.</button>
                <button onClick={() => getItemsByType('furniture')} className="hover:shadow-md mb-2 border-2 border-gray-300 rounded-lg px-5">Get all Furniture.</button>
                <input ref={inputDate} type='date' className="px-2 mb-1 border-2 border-gray-300"/>
                <button onClick={getItemByPruchased} className="hover:shadow-md mb-2 border-2 border-gray-300 rounded-lg px-5">Get Furniture by Date.</button>
                <button onClick={() => getItemsByTags('brown')} className="hover:shadow-md mb-2 border-2 border-gray-300 rounded-lg px-5">Get all items with brown color.</button>
            </div>
            <h1 className="text-xl font-bold mb-2">Output :</h1>
            {resultItem.map((item,index) => {
                return item.name === undefined ?  <p key={index}>Item Not Found</p> : <p key={index}>{item.name}</p>
            })}
            {/* <table className="table-auto border-2 border-gray-400">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Tags</th>
                        <th>Pruchased At</th>
                        <th>placement</th>
                    </tr>
                </thead>
                {MyTable}
            </table> */}
        </div>
        </section>
    )
}

export default JsonManipulation