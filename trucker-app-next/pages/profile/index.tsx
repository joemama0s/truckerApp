
import Link from 'next/link'
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()

  return (
    <>
        <p>No profile ID selected</p>
        <br></br>
        <Link href="/">Click me to Go Home</Link>
    </>
  )
}

export default Profile
