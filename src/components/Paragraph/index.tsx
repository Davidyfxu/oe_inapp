import React, { FC } from 'react'
import { Typography } from '@mui/material'
import styles from './index.module.scss'

interface ParagraphProps {
  text: string;
  maxWidth?: string;
  mx?: number;
  textAlign?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | 'start';
}

const Paragraph: FC<ParagraphProps> = ({ text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
      className={styles.paragraph}
      style={{ maxWidth: maxWidth, margin: mx, textAlign: textAlign }}
    >
      {text}
    </Typography>
  )
}

export default Paragraph;