import React, { FC } from 'react'
import { Typography } from '@mui/material'
import styles from './index.module.scss'

interface TitleProps {
  text: string;
  textAlign: 'inherit' | 'left' | 'center' | 'right' | 'justify' | 'start';
}

const Title: FC<TitleProps> = ({ text, textAlign }) => {
  return (
    <Typography
      className={styles.title} 
      style={{ textAlign: textAlign }}
      variant='h4'
      component='h3'
    >
      {text}
    </Typography>
  )
}

export default Title;