import bar from './bar';

bar();

import('./baz').then(_ => console.log('baz loaded'));
