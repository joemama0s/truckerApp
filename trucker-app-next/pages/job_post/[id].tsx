import Link from 'next/link'
import { useRouter } from 'next/router'

const Job_Post = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  let name = "Keto Icecream"
  let start = "Scottsdale"
  let destination = "California"
  if (id === "2"){
    name = "Taylormade"
    start = "Washington"
    destination = "Texas"
  }

  return (
    <>
        <br></br>
        <Link href="/">Click me to Go Home</Link>
        <br></br>
        <p>Post: {id}</p>
        <p>Company: {name}</p>
        <p>Staring Location: {start}</p>
        <p>Destination: {destination}</p>
    </>
  )
}

export default Job_Post
