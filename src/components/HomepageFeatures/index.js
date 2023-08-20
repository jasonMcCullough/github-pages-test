import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Accordion from './accordion.js';
import Dialog from './dialog.js';
import Socials from './socials.js';
import Menu from '../menu.js';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className="text--center">
            </div>
            <div className="text--left padding-horiz--md">
              <br></br><br></br>
              <p><Accordion /></p>
              {/* <p><Dialog/></p> */}
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className="text--center">
            </div>
            <div className="text--left padding-horiz--md">
              <p>
                Lorem ipsum dolor sit amet,
                <br></br><br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
