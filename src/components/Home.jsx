import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import btcSrc from '../assets/btc.png'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Box w={'full'} h={'89vh'}>
      <motion.div style={{
        height: '80vh'
      }}
      animate={{
        translateY: '20px'
      }}

      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:'reverse'
      }}
      >
        <Image w={'full'} h={'full'} objectFit={'contain'} src={btcSrc} />
      </motion.div>

      {/* filter={'grayscale(1)'} bgColor={'blackAlpha.900'} */}

      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'bold'}
        color={'blackAlpha.700'} mt={'-20'} >
        Xcrypto
      </Text>
    </Box>
  )
}

export default Home
