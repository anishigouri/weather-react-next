import { Header } from '@/components/Header'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
