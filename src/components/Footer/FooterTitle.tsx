import React from 'react';
import { Typography } from '@mui/material';
import styles from './index.module.scss';

interface FooterTitleProps {
  text: string;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ text }) => {
  return (
    <Typography
      variant='h6'
      component='h6'
      className={styles.footerTitle} 
    >
      {text}
    </Typography>
  );
}

export default FooterTitle;