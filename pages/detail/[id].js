import Layout from '@/components/Layout'
import React from 'react'
import { Box, HStack, Text, Heading, Divider } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import { baseURL } from '@/axiosConfig'

const DetailContainer = css`
  padding: 5px;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    display: block;
    margin-bottom: 10px;
  }
`
export default function Detail ({ detail }) {
  return (
    <Layout>
      <Box maxW='1200px' mx='auto' width='80%' mt='70px'>
        <Heading as='h2' size='xl'>
          {detail.title}
        </Heading>
        <Heading
          as='h4'
          size='lg'
          mt='10px'
          color='gray.500'
          fontWeight='light'
        >
          {detail.sub}
        </Heading>
        <Divider mt='10px' />
        <HStack
          overflow='hidden'
          justifyContent='space-between'
          spacing={3}
          my='10px'
        >
          <Text>作者: {detail.author}</Text>
          <Text>发布时间: {detail.publish}</Text>
        </HStack>
        <Divider mt='10px' />
        <Box
          dangerouslySetInnerHTML={{ __html: detail.content }}
          css={DetailContainer}
        ></Box>
      </Box>
    </Layout>
  )
}

// 获取用户能够访问到的所有路由参数
export async function getStaticPaths () {
  const { data } = await axios.get('/api/videos', { baseURL })
  const paths = data.map(id => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

// 根据参数获取其对应的数据
export async function getStaticProps ({ params }) {
  const id = params.id
  const { data: detail } = await axios.get('/api/detail', {
    baseURL,
    params: { id }
  })

  return {
    props: {
      detail
    }
  }
}
