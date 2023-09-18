import styles from './Spinner.module.css';

type Props = {
    width?: string;
    height?: string;
};

const Spinner = ({ width = '48px', height = '48px' }: Props) => {
    return <span className={styles.loader} style={{ width, height }} />;
};

export default Spinner;
