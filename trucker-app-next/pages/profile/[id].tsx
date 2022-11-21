import Link from 'next/link'
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  let name = "Tyler"
  let truck = "F250"
  let verified = "true"
  if (id === "2"){
    name = "Ryan"
    truck = "Semi Truck"
    verified = "false"
  }

  return (
    <>
        <br></br>
        <Link href="/">Click me to Go Home</Link>
        <br></br>
        <p>Profile: {id}</p>
        <p>Name: {name}</p>
        <p>Truck: {truck}</p>
        <p>Verified Driver: {verified}</p>
    </>
  )
}

export default Profile
