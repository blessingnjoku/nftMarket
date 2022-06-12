import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <>
        <Header />
        <Hero/>
      </>
    </div>
  );
}
