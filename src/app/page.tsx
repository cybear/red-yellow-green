import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/equipments">Equipments</Link></li>
        <li><Link href="/status/123">Status</Link></li>
      </ul>
    </div>
  )
}
