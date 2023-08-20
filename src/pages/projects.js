import React from 'react';
import Layout from '@theme/Layout';
import Menu from './menu.js';
import ProjectDisplayer from './project-grid-display.js';

export default function MyProjects() {
  return (
    <>
    <Menu>
      <h1>Hello</h1>
    </Menu>
    <Layout>
      <h1>Donec vestibulum viverra elit</h1>
      <ProjectDisplayer></ProjectDisplayer>
    </Layout>
    </>
  );
}