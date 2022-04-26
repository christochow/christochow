import styles from '../../styles/Loading.module.scss';
import logo from '../../public/logo.svg'
import Image from 'next/image';


function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Loading...</h1>
        <Image height={50} className={styles.AppLogo} src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loading;
