import React from 'react'
import styles from '@/components/layouts/navbar/navbar.module.scss' 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        {/* Tambahkan data-testid di sini */}
        <h3 className={styles.footer__title} data-testid="footer-title">
          Framework Based Programming
        </h3>
        <div className={styles.footer__divider}></div>
        <h3>With Great Power Comes Great Responsibility.</h3>
      </div>
    </footer>
  )
}