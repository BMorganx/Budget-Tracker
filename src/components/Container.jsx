import styles from '../styles/App.scss';

const Container = ({ children, optionClass }) => {
    return <div className={`${styles.container} ${optionClass}`}>{children}</div>;
};

Container.defaultProps = {
    optionClass: undefined,
}

export default Container;