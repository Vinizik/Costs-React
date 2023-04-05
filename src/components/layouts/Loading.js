import styles from './Loading.module.css';
import loading from '../../imgs/loading.svg';
const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading}></img>
    </div>
  );
};

export default Loading;
