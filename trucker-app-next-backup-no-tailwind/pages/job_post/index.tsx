import Link from 'next/link'
import { useRouter } from 'next/router'

const Job_Post = () => {
  const router = useRouter()

  return (
    <>
        <p>No job post ID selected</p>
        <br></br>
        <Link href="/">Click me to Go Home</Link>
    </>
  )
}

export default Job_Post 
