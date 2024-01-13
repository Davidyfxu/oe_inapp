import React from 'react';
import { Link } from '@mui/material';
import styles from './index.module.scss'; 

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <Link
      href="#"
      variant='body2' 
      component='a'
      className={styles.footerLink} 
    >
      {text}
    </Link>
  );
}

export default FooterLink;