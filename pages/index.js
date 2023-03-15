import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Swiper, { loadSwiper } from '@/components/Swiper'
import Movie, { loadMovie } from '@/components/Movie'
import Layout from '@/components/Layout'
import { FaAccessibleIcon } from 'react-icons/fa'

// const inter = Inter({ subsets: ['latin'] })

export default function Home ({ swiper, movie }) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie data={movie} />
      <FaAccessibleIcon width={500} />
    </Layout>
  )
}

export async function getStaticProps () {
  const { data: swiper } = await loadSwiper()
  const { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}
