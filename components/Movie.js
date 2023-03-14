import React from 'react'
import { Box, Heading, HStack, Text, Image } from '@chakra-ui/react'
import { FaFilm } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'
import { baseURL } from '@/axiosConfig'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Movie ({ data }) {
  const router = useRouter()
  return (
    <Box maxW='1200px' mx='auto' px='10px' mt='20px'>
      <HStack>
        <MdMovie size='18px' />
        <Heading as='h3' fontSize='18px'>
          电影
        </Heading>
      </HStack>
      <HStack
        mt='20px'
        spacing='0'
        flexFlow='wrap'
        justifyContent='space-between'
      >
        {data.map(movie => (
          <Box
            onClick={() => router.push(`/detail/${movie.vid}`)}
            key={movie.id}
            w='290px'
            cursor='pointer'
          >
            <Image w='290px' src={movie.url} />
            <Text h='52px' overflow='hidden' mt='10px' as='section'>
              {movie.title}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export function loadMovie () {
  return axios.get('/api/movie', { baseURL })
}
