import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { css } from '@emotion/react'
import { Box, Stack, Heading, Text, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    width: 80%;
    height: 100%;
    max-width: 1200px;
    text-align: left;
    & > h2 {
      width: 450px;
    }
    & > p {
      margin: 15px 0 15px;
      width: 450px;
      font-size: 14px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`
const swiperContainer = css`
  & > .carousel-root {
    position: relative;
    & > .carousel:last-child {
      position: absolute;
      left: 0;
      bottom: 0;
      & > .thumbs-wrapper > .thumbs {
        display: flex;
        justify-content: center;
      }
    }
  }
`

export default function Swiper ({ data }) {
  return (
    <Box css={swiperContainer}>
      <Carousel
        // autoPlay
        infiniteLoop
        emulateTouch
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map(swiper => (
          <CarouselItem key={swiper.id}>
            <img src={swiper.url} />
            <Stack justifyContent='center'>
              <Heading as='h2' fontSize='4xl'>
                {swiper.title}
              </Heading>
              <Text>{swiper.description}</Text>
              <Button colorScheme='red' w='120px' size='lg'>
                <Link href='/detail/[id]' as={`/detail/${swiper.vid}`}>
                  CHECK DETAIL
                </Link>
              </Button>
            </Stack>
          </CarouselItem>
        ))}
      </Carousel>
    </Box>
  )
}

export function loadSwiper () {
  // 这离获取数据不建议从本地通过API接口获取，而应该通过封装后端的方法函数直接操作数据库获取
  // 如果是第三方API可以通过API接口获取数据
  return axios.get('/api/swiper', { baseURL: 'http://localhost:3000/' })
}
