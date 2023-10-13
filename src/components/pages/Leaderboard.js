// import './App.css';

// Example of a data array that
// you might receive from an API
// import { getDatabase, ref } from "firebase/database";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" }
]



export default function Leaderboard() {
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `result/`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //         const data2 = snapshot.val();
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });
    // const db = getDatabase();
    // const starCountRef = ref(db, 'result/');


    return (
        <div className="Leaderboard">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

// export default App;
