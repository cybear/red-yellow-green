import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/status/123">Status</Link></li>
      </ul>
    </div>
  )
}
