import React from 'react'
import { Box, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from '@/styles/Navigation.module.css'
import Router, { useRouter } from 'next/router'

export default function Navigation () {
  const router = useRouter()
  const isActiveLink = href => router.asPath === href
  return (
    <Box height='52px' bgColor='#202020' color='#fff'>
      <HStack h='100%' spacing={3} justifyContent='center' alignItems='center'>
        <Link
          className={`${styles.navlink} ${
            isActiveLink('/') ? styles.active : ''
          }`}
          href='/'
          as={NextLink}
        >
          影片
        </Link>
        <Link
          className={`${styles.navlink} ${
            isActiveLink('/1') ? styles.active : ''
          }`}
          href='/1'
          as={NextLink}
        >
          漫画
        </Link>
        <Link
          className={`${styles.navlink} ${
            isActiveLink('/2') ? styles.active : ''
          }`}
          href='/2'
          as={NextLink}
        >
          电影
        </Link>
        <Link
          className={`${styles.navlink} ${
            isActiveLink('/3') ? styles.active : ''
          }`}
          href='/3'
          as={NextLink}
        >
          电视
        </Link>
        <Link
          className={`${styles.navlink} ${
            isActiveLink('/4') ? styles.active : ''
          }`}
          href='/4'
          as={NextLink}
        >
          新闻资讯
        </Link>
      </HStack>
    </Box>
  )
}
