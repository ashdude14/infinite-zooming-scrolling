  // get data from https://demo.questdb.io/exec with HTTP REST API


const HOST = "https://demo.questdb.io"
  export async function runTrip( props ) {
  try {
    const query = `SELECT pickup_datetime FROM trips LIMIT ${props};`
    const response = await fetch(`${HOST}/exec?query=${encodeURIComponent(query)}`);
     const obj1=await response.json();
     return obj1['dataset'].flat(1);

  } catch (error) {
    console.log(error)
  }
}
  export async function runDistance( props ) {
  try {
    const query = `SELECT trip_distance FROM trips LIMIT ${props};`
    const response = await fetch(`${HOST}/exec?query=${encodeURIComponent(query)}`)
     const obj1=await response.json();
     return obj1['dataset'].flat(1);

  } catch (error) {
    console.log(error)
  }
}
 

