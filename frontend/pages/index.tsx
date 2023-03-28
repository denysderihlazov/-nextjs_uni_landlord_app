/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Input, Section, Div, P } from "../components";
import { withLayout } from "../layout/P/Layout";
import styles from './styles/blogs.module.css';

function Home(): JSX.Element {
    return (
        <>
            <Section className={styles.section__with__map}>
                <Div>
                    <P color="dark_blue" size="xxl">Buy, rent, or sell <br></br> your property <br></br> easily</P>
                    <P color="dark_blue" size="m">A great platform to buy, sell, or even rent your <br></br> properties without any commisions.</P>
                    <Div className={styles.counter__wrapper}>
                        <Div className={styles.counter}>
                            <P size="xxl" color="violet">50k+</P>
                            <P size="s" color="gray">renters</P>
                        </Div>
                        <Div className={styles.counter}>
                            <P size="xxl" color="violet">10k+</P>
                            <P size="s" color="gray">properties</P>
                        </Div>
                    </Div>
                </Div>
            </Section>
            <Section>
                <Div centeredContent="yes">
                    <P color="black" size="xl">Testimonials</P>
                    <P color="gray" size="s">See what our property managers, landlords, and <br></br> tenants have to say</P>
                    <P color="black" className={styles.testimonials__quote} size="m">"Estatery is the platform I go to on almost a daily basis for 2nd home and <br></br> vacations condo shoping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery"</P>
                    <P color="black" className={styles.testimonials__quote__persona} size="s">Mira Culos, Renter</P>
                </Div>
            </Section>
            <Section bgColor="dark_blue">
                <Div centeredContent="yes">
                    <P className={styles.subscribe__section} color="violet" size="l">No Spam Promise</P>
                    <P className={styles.subscribe__section} color="white" size="xl">Are you a landlord?</P>
                    <P className={styles.subscribe__section} color="white" size="m">Discover ways to increase your home`s value and get listed. No Spam.</P>
                    <Input className={styles.subscribe__section} placeholder="Enter your email address" />
                    <P className={styles.subscribe__section} color="white" size="s">Join 10,000+ other landlords in our estatery community</P>
                </Div>
            </Section>
        </>
    );
}

export default withLayout(Home);