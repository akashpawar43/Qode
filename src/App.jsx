import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Marquee';
import Tools from './components/Tools';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Price from './components/Price';
import Projects from './components/Projects';
import Trial from './components/Trial';
import NewsLetter from './components/NewsLetter';
import Alert from './components/Alert';
import { useRecoilState } from 'recoil';
import { alertAtom } from './store/atom/alert';
import Marguee from './components/Marquee';

export default function App() {
  const [alert, setAlert] = useRecoilState(alertAtom);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);
  return (
    <>
      <Alert />
      <Header />
      <Hero />
      <Marguee />
      <Tools />
      <Trust />
      <Testimonials />
      <Price />
      <Projects />
      <Trial />
      <NewsLetter />
      <Footer />
    </>
  )
}
