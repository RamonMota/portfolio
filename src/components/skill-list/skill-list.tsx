import React, { useEffect, useState } from 'react'
import { Box, SlideFade, Text } from '@chakra-ui/react';

export const SkillList = () => {

    const changeSkillTime = 2300
    const skillList = [
        'Front End Developer',
        'Illustrator',
        'UI/UX Designer'
    ]

    const [count, setCount] = useState(Math.floor(Math.random() * skillList.length))

    useEffect(() => {
        if (count === 3) setCount(0)

        setTimeout(() => {
            setCount(count + 1)
        }, changeSkillTime)
    }, [count])

    return (
        <>
            {skillList.map((skill, index) => (
                <Box key={index} position='relative' h='fit-content'>
                    <SlideFade in={index === count} offsetY='20px'>
                        <Text as='h2' position='absolute' w='max-content'> {skill}</Text>
                    </SlideFade>
                </Box>
            ))}
        </>
    )
}
