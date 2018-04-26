import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Fontawesome setup
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(fontawesomeSolid);

// Star Wars Theme
import swLead from './slides/000-sw-lead.slide.html';
import swTitle from './slides/001-sw-title.slide.html';

import pageAuthor from './slides/100-author.slide.html';
import pageWhy from './slides/101-why.slide.html';
import pageExpressHelloWorld from './slides/110-express-hello-world.slide.html';
import pageExpressDI from './slides/111-express-di.slide.html';
import pageExpressAnnotation from './slides/112-express-annotation.slide.html';
import pageFeatures from './slides/120-features.slide.html';
import pageBigPicture from './slides/130-big-picture.slide.html';
import pageArchitecure from './slides/131-architecure.slide.html';
import pageStack from './slides/132-stack.slide.html';
import pagePersistence from './slides/140-persistence.html';
import pageService from './slides/141-service.html';
import pageSeeding0 from './slides/150-seeding.html';
import pageSeeding1 from './slides/151-seeding.html';
// import pageSeeding2 from './slides/152-seeding.html';
import pageQuality from './slides/155-quality.html';
import pageFacts from './slides/156-facts.html';
import pageGetStated0 from './slides/160-get-started.html';
import pageGetStated1 from './slides/161-get-started.html';
import pageGetStated2 from './slides/162-get-started.html';
import pageLetsCode from './slides/180-lets-code.html';

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  swLead,
  swTitle,

  pageAuthor,
  pageWhy,

  pageExpressHelloWorld,
  pageExpressDI,
  pageExpressAnnotation,
  pageFeatures,

  pageBigPicture,
  pageArchitecure,
  pageStack,
  pagePersistence,
  pageService,

  pageSeeding0,
  pageSeeding1,
  // pageSeeding2,
  pageQuality,
  pageFacts,

  pageGetStated0,
  pageGetStated1,
  pageGetStated2,
  pageLetsCode
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
// -------------------------------------------------------------------------

Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
});

Reveal.configure({
  pdfMaxPagesPerSlide: 1,
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();

/*

RESTful applications use HTTP requests to perform four operations termed as CRUD (C: create, R: read, U: update, and D: delete). Create and/or update is used to post data, get for reading/listing data, and delete to remove data.

*/
