import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Accordion from './accordion.js';
import Dialog from './dialog.js';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              {/* <h3>title</h3> */}
              <p><Accordion/></p>
              <p><Dialog/></p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
