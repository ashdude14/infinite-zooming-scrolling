  // get data from https://demo.questdb.io/exec with HTTP REST API


const HOST = "https://demo.questdb.io"

export default async function run( ) {
  try {
    const query = "SELECT pickup_datetime FROM trips LIMIT 15;"
    const query1 = "SELECT trip_distance FROM trips LIMIT 15;"
    const response = await fetch(`${HOST}/exec?query=${encodeURIComponent(query)}`)
    const response1 = await fetch(`${HOST}/exec?query=${encodeURIComponent(query1)}`)
     const pickup_datetime = await response.json();
      const trip_distance = await response1.json()
    console.log(pickup_datetime)
    console.log(trip_distance)
  } catch (error) {
    console.log(error)
  }
}
run();

