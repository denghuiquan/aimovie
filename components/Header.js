import React from 'react'
import { Box, Button, Container, Image } from '@chakra-ui/react'
import { FaSearch, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  color: #fff;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
`
const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: auto;
`

const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &:hover {
    color: tomato;
  }
`
export default function Header () {
  return (
    <Box h='52px' bgColor='#202020' borderBottom='1px solid #393939'>
      <Container pos='relative' h='52px' maxW='1200px'>
        <SignInAndJoin>
          <Button
            mr='5px'
            leftIcon={<FaSignInAlt />}
            colorScheme='teal'
            variant='solid'
          >
            登录
          </Button>
          <Button
            leftIcon={<FaUserAlt />}
            colorScheme='orange'
            variant='outline'
          >
            注册
          </Button>
        </SignInAndJoin>
        <Image css={logo} src='/images/logo.png' />
        <Search>
          <FaSearch size='16px' title='搜索' />
        </Search>
      </Container>
    </Box>
  )
}
