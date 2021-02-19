
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','651'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','9cb'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','5f1'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','dbd'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','17e'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','692'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','e7e'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','084'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','dfc'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','84d'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','d7b'),
  exact: true,
},
{
  path: '/docs/info',
  component: ComponentCreator('/docs/info','109'),
  exact: true,
},
{
  path: '/docs/licence',
  component: ComponentCreator('/docs/licence','87d'),
  exact: true,
},
{
  path: '/docs/versions',
  component: ComponentCreator('/docs/versions','ed2'),
  exact: true,
},
{
  path: '/docs/versions',
  component: ComponentCreator('/docs/versions','8ca'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
