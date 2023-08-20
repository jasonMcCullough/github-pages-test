import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Menu from '../components/menu.js';
import styles from '../components/HomepageFeatures/styles.module.css';
import ProjectDisplayer from './project-grid-display.js';

export default function MyProjects() {
  return (
    <><Menu></Menu><section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h1>Aliquam eu convallis justo</h1>
          <ProjectDisplayer></ProjectDisplayer>
        </div>
      </div>
    </section></>
  );
}