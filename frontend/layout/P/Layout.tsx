import { LayoutProps } from "./Layout.props";
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer';
import styles from "./Layout.module.css";
import cn from 'classnames';
import React, {FunctionComponent} from "react";
import { UserContextProvider } from '../../context/userContext';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.main__wrapper}>
            <Header className={styles.header} />
            <div className={styles.content__wrapper}>
                {children}
            </div>
            <Footer className={styles.header} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <UserContextProvider>
                <Layout>
                    <Component {...props} />
                </Layout>
            </UserContextProvider>
        )
    }
}
