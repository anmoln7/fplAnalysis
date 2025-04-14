import React from 'react';

import { FooterLink } from '../link/FooterLink';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <span>
                Made with ❤️ by{' '}
                <FooterLink>@FPLMadders</FooterLink>
            </span>
            <span className={styles.divider}>•</span>
            <span>
                <FooterLink href="https://github.com/anmoln7/fplAnalysis">
                    Code for nerds
                </FooterLink>
            </span>
            <span className={styles.divider}>•</span>
            <span>
                <FooterLink>@FPLMadders</FooterLink>
            </span>
        </div>
    );
};

export { Footer };
