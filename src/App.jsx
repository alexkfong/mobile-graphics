import { useEffect } from 'react';
import Balancer from 'react-wrap-balancer';
import LazyLoad from 'react-lazy-load';
import './App.css';
import './styles/reset.less';
import './styles/styles.less';

import mobileDataImg from './assets/mobiledata.png';
import sndLogo from './assets/sndlogo.png';
import chronicleLogo from './assets/chronicle_logo.png';

function App() {
  const base = import.meta.env.BASE_URL;
  const devtools = {
    480: `${base}assets/devtools_menu-480`,
    1200: `${base}assets/devtools_menu-1200`,
  };
  const regularcolors = {
    480: `${base}assets/regular_colors-480`,
    1200: `${base}assets/regular_colors-1200`,
  };
  const tritanopia = {
    480: `${base}assets/tritanopia-480`,
    1200: `${base}assets/tritanopia-1200`,
  };
  const achromatopsia = {
    480: `${base}assets/achromatopsia-480`,
    1200: `${base}assets/achromatopsia-1200`,
  };
  const alttext = {
    480: `${base}assets/alttext-480`,
    1200: `${base}assets/alttext-1200`,
  };

  useEffect(() => {
    const onMessage = (event) => {
      const heights = event.data?.['datawrapper-height'];
      if (!heights) {
        return;
      }

      Object.entries(heights).forEach(([chartId, height]) => {
        const iframe = document.getElementById(`datawrapper-chart-${chartId}`);
        if (iframe) {
          iframe.style.height = `${height}px`;
        }
      });
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <>
      <header>
        <p className='emojis'>📊📱</p>
        <h1 className={`mb-sm`}>
          <Balancer ratio={0.5}>Introduction to mobile graphics</Balancer>
        </h1>
        <h2 className={`mb-xl`}>
          <Balancer ratio={0.5}>
            A beginner-friendly guide to making graphics that perform well for
            most of your audience: readers on mobile devices
          </Balancer>
        </h2>
        <h3 className={`byline mb-lg`}>By Alex K. Fong</h3>
        <div className={`byline-flex mb-xxl`}>
          <h4 className={`byline-attribution`}>
            <img
              className={'logo'}
              src={chronicleLogo}
              alt='The letter “C” from the Chronicle’s blackletter nameplate.'
            />
            <span>Creative Director</span>
            <span>San Francisco Chronicle</span>
          </h4>
          <h4 className={`byline-attribution`}>
            <img
              className={'logo'}
              src={sndLogo}
              alt='The Society of News Design’s logo'
            />
            <span>Vice President</span>
            <span>Society for News Design</span>
          </h4>
        </div>
      </header>
      <nav>
        <header>
          <h3 className={`subhead mb-xs`}>Table of contents</h3>
        </header>
        <p>
          <i>This is a working document. I'll update this with more information shortly.
          Please reach out if there’s something you’d like me to add.</i>
        </p>
        <ul className='contents'>
          <li>
            <a href='#objectives'>Today’s objectives</a>
          </li>
          <li>
            <a href='#snd'>Society for News Design</a>
          </li>
          <li>
            <a href='#thinking_digital'>Thinking in digital</a>
          </li>
          <li>
            <a href='#basic'>Basic digital skills</a>
          </li>
          <li>
            <a href='#anatomy'>Anatomy of an infographic</a>
          </li>
          <li>
            <a href='#simple_charts'>Simple charts</a>
          </li>
          <li>
            <a href='#complex'>Diagrams and complex charts</a>
          </li>
          <li>
            <a href='#about'>About me</a>
          </li>
        </ul>
      </nav>
      <article>
        <section id='objectives' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Today’s objectives</h3>
          </header>
          <p>
            We’re really in a renaissance for making graphics. Take a look at
            the work of the{' '}
            <a
              href='https://www.nytimes.com/'
              target='_blank'
              rel='noreferrer noopener'>
              New York Times
            </a>
            ,{' '}
            <a
              href='https://www.reuters.com/graphics/'
              target='_blank'
              rel='noreferrer noopener'>
              Reuters
            </a>
            , and the{' '}
            <a
              href='https://www.straitstimes.com/multimedia/graphics/2025/12/visual-stories-and-digital-graphics-2025/index.html'
              target='_blank'
              rel='noreferrer noopener'>
              Straits Times
            </a>{' '}
            or of smaller but just as mighty teams at the{' '}
            <a
              href='https://pudding.cool/'
              target='_blank'
              rel='noreferrer noopener'>
              Pudding
            </a>{' '}
            and the{' '}
            <a
              href='https://kontinentalist.com/'
              target='_blank'
              rel='noreferrer noopener'>
              Kontinentalist
            </a>
            .
          </p>
          <p>
            These titans create work defined by informational rigor, captivating
            image making and, when needed, thoughtful use of interactivity. They
            draw on reporting, writing, illustration, design and coding skills.
          </p>
          <p>
            This session for the American Collegiate Press is meant to give you
            a taste of how to get beyond using chart-making tools and provide
            you with resources for further exploration as you level up.
          </p>
          <aside>
            <p>
              <b>Download the files:</b> I have put the exercises and examples
              in this page onto a{' '}
              <a
                href='https://drive.google.com/drive/folders/1j1tr8bNK-4QV9WTRyOFrFOPgqXXmoDT2?usp=drive_link'
                target='_blank'
                rel='noreferrer noopener'>
                Google drive
              </a>{' '}
              for you to download and try for yourself.
            </p>
          </aside>
        </section>
        <section id='snd' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>The Society for News Design</h3>
          </header>
          <p>
            <a
              href='https://snd.org/'
              target='_blank'
              rel='noreferrer noopener'>
              SND
            </a>{' '}
            is a trade organization for illustrators, designers and developers
            who work on the news.
          </p>
          <p>
            Every year we hold an annual Creative Competition where we select
            the world’s best work in visual storytelling from an average of
            5,000 submissions.
          </p>
          <p>
            Students can join for $20 a year. Your school’s ACP-affiliated
            journalism department can also join itself, which would make you a
            member while you’re a student.
          </p>
          <p>
            But if you have a financial challenge, please contact us. We want
            you to participate in our community and have access to training and
            networking.
          </p>
        </section>
        <section id='thinking_digital' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Thinking in digital</h3>
          </header>
          <p>
            The reading experience for digital news is very different from
            print.
          </p>
          <p>
            Eye tracking studies show that readers of print typically scan a
            page, focusing on headlines, visuals and other display type such as
            captions and decks. The reader uses this information to decide
            whether to actually read the article. Even so, most readers may not
            get beyond the first five inches (150 words) of a story. That means
            multiple entry points that serve information to readers very quickly
            are useful in that medium.
          </p>
          <h4>
            <span>What’s different</span>
          </h4>
          <p>
            Digital is very different. Some readers may come in via your news
            organization’s home page. Others may find your article on social
            media or on search.
          </p>
          <p>
            The latest change is AI. Some readers may not even look at your
            article at all. They may look solely at an AI-generated summary
            generated by a search engine.
          </p>
          <p>
            In some sense the ontology of digital news is selection. Our
            “audience” wants a piece of information and seeks it out as opposed
            to in print, where news was curated and offered like an assortment
            of unique chocolates in a box of candy.
          </p>
          <p>
            Digital news design is therefore less about entry points and more
            about adding value to the storytelling.
          </p>
          <h4>
            <span>What the numbers show</span>
          </h4>
          <p>
            Based on data from the San Francisco Chronicle, most of our digital
            readers come to us on mobile devices.
          </p>
          <figure className='picture mt-sm mb-lg'>
            <LazyLoad offset={300}>
              <div className='picture-wrapper'>
                <img
                  src={mobileDataImg}
                  alt='Actual user data from a Chronicle project is shown in a bar chart. Mobile accounts for 58%. Desktop and tablet are both 21%.'
                />
              </div>
            </LazyLoad>
            <figcaption className='caption'>
              This story received 30,000 uniques. About 58% of the audience saw
              the piece on a mobile device. In my experience, desktop usually
              beats tablet, though not in this article’s case.
            </figcaption>
          </figure>
          <h4>
            <span>The medium is the message</span>
          </h4>
          <p>Mobile has very real constraints:</p>
          <ol>
            <li>
              <b>The viewport is limited to a smaller width,</b> constraining
              the amount of data that may be shown at once and making
              scale-based effects less effective.
            </li>
            <li>
              <b>WiFi isn't a certainty.</b> Some readers may be coming in via
              slower cellular connections.
            </li>
            <li>
              Unlike print,{' '}
              <b>
                mobile allows time-based events (such as animation or video),
                audio, and transformations
              </b>
              , which may be effected by interaction.
            </li>
            <li>
              Because digital devices allow us to use sound,{' '}
              <b>the medium is much more accessible</b>. Print newspapers were
              never a medium for the visually impaired. But screen reading
              technology allows the visually impaired to make sense of digital
              graphics — if they’re created in an accessible way.
            </li>
            <li>
              While most mobile devices have a lot of computing power,{' '}
              <b>it's easier to crash web browsers on smartphones</b> in my
              experience.
            </li>
          </ol>
          <p>
            But just because digital gives us more options as storytellers, that
            does not mean we should do all the things. A good user experience
            focuses on the most essential functions, just as good news design
            focuses on the most vital pieces of information to communicate.
          </p>
          <p>
            Don't force your audience to click something if interaction doesn't
            add any value.
          </p>
        </section>
        <section id='basic' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Basic digital skills</h3>
          </header>
          <h4>
            <span>DevTools</span>
          </h4>
          <p>
            DevTools in browsers allow you to peek into how web pages and
            graphics work.
          </p>
          <p>
            Learning DevTools will equip you with fundamental skills that will
            help you reverse engineer digital interactives and graphics.
          </p>
          <figure className='big-picture mt-md mb-md'>
            <LazyLoad offset={300}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${devtools['480'] + '.webp'} 480w, ${devtools['1200'] + '.webp'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <source
                  type='image/jpeg'
                  srcSet={`${devtools['480'] + '.jpg'} 480w, ${devtools['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <img
                  src={`${devtools['1200'] + '.jpg'}`}
                  srcSet={`${devtools['480'] + '.jpg'} 480w, ${devtools['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  loading='lazy'
                  decoding='async'
                  alt='Chrome right-click menu showing the Inspect option used to open DevTools.'
                />
              </picture>
            </LazyLoad>
            <figcaption className='caption'>
              Open DevTools by clicking the three dots, navigating to "More
              Tools" and then selecting "Developer Tools."
            </figcaption>
          </figure>
          <p>Here's how to use it in Chrome.</p>
          <ol>
            <li>Open Chrome.</li>
            <li>Open the page you want to inspect.</li>
            <li>
              Open DevTools by using:
              <ul>
                <li>
                  <b>Keyboard shortcuts</b>
                  <ul>
                    <li>Mac: Cmd + Option + I</li>
                    <li>Windows/Linux: Ctrl + Shift + I</li>
                  </ul>
                </li>
                <li>
                  <b>Or use menu</b> by clicking the three dots ⋮ (top-right) →
                  More Tools → Developer Tools.
                </li>
                <li>
                  <b>For a specific element:</b>
                  <ol>
                    <li>Right-click that element.</li>
                    <li>Click Inspect.</li>
                    <li>Chrome jumps to that node in the Elements panel.</li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
          <aside>
            <p>
              <b>Exercise:</b> Try to open DevTools in Chrome. Try to inspect an
              element on the page. Open the equivalent of DevTools in other
              browsers.
            </p>
          </aside>
          <p>
            One powerful tool in DevTools is the ability to preview your page on
            a variety of simulated devices. DevTools will give you a good sense
            of whether your design is working across devices, but best practice
            is to test your mobile work on an actual smartphone.
          </p>
          <h4>
            <span>Accessibility</span>
          </h4>
          <p>
            Accessibility is the practice of making things usable for people
            with different abilities.
          </p>
          <p>
            Nearly 28.7% of adult Americans have some form of disability or
            impairment according to data from the{' '}
            <a
              href='https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html'
              target='_blank'
              rel='noopener noreferrer'>
              Centers for Disease Control
            </a>{' '}
            from 2024.
          </p>
          <p>
            Designing with accessibility in mind means taking into account parts
            of your audience who may have conditions such as color blindness.
          </p>
          <p>Here are a few tips:</p>
          <ol>
            <li>
              <b>Be careful about color.</b> Using green and red to visualize
              data is dangerous because of colorblindness. There are other forms
              of colorblindness.
            </li>
            <li>
              <b>Headlines and decks help accessibility</b> by summarizing what
              the graphic shows and breaking out key findings.
            </li>
            <li>
              Online, <b>alt text</b> helps the visually impaired by describing
              what a graphic looks like via a screen reader.
            </li>
          </ol>
          <p>
            A great way to check if your graphics are accessible is by using
            Firefox’s DevTools, which has an accessibility tab.
          </p>
          <figure className='big-picture mt-md mb-md'>
            <LazyLoad offset={300}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${regularcolors['480'] + '.webp'} 480w, ${regularcolors['1200'] + '.webp'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <source
                  type='image/jpeg'
                  srcSet={`${regularcolors['480'] + '.jpg'} 480w, ${regularcolors['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <img
                  src={regularcolors['1200'] + '.jpg'}
                  srcSet={`${regularcolors['480'] + '.jpg'} 480w, ${regularcolors['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  loading='lazy'
                  decoding='async'
                  alt='A graphic about the Lassen Peak snowpack is shown without simulating a visual impairment related to color. Firefox’s developer tools menu is shown with the accessibility tab selected and “none” is highlighted for the Simulate option.'
                />
              </picture>
            </LazyLoad>
            <figcaption className='caption'>
              In Firefox, this is what a graphics looks like without the browser
              simulating a visual impairment related to color.
            </figcaption>
          </figure>
          <figure className='big-picture mt-md mb-md'>
            <LazyLoad offset={300}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${tritanopia['480'] + '.webp'} 480w, ${tritanopia['1200'] + '.webp'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <source
                  type='image/jpeg'
                  srcSet={`${tritanopia['480'] + '.jpg'} 480w, ${tritanopia['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <img
                  src={tritanopia['1200'] + '.jpg'}
                  srcSet={`${tritanopia['480'] + '.jpg'} 480w, ${tritanopia['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  loading='lazy'
                  decoding='async'
                  alt='A graphic about the Lassen Peak snowpack is shown with a simulation of “blue blindness.” Firefox’s developer tools menu is shown with the accessibility tab selected and “tritanopia“ is selected in the Simulate option.'
                />
              </picture>
            </LazyLoad>
            <figcaption className='caption'>
              People with a form of blue-yellow color vision deficiency struggle
              to distinguish between blue and green, yellow and pink, and purple
              and red.
            </figcaption>
          </figure>
          <figure className='big-picture mt-md mb-md'>
            <LazyLoad offset={300}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${achromatopsia['480'] + '.webp'} 480w, ${achromatopsia['1200'] + '.webp'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <source
                  type='image/jpeg'
                  srcSet={`${achromatopsia['480'] + '.jpg'} 480w, ${achromatopsia['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <img
                  src={achromatopsia['1200'] + '.jpg'}
                  srcSet={`${achromatopsia['480'] + '.jpg'} 480w, ${achromatopsia['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  loading='lazy'
                  decoding='async'
                  alt='A graphic about the Lassen Peak snowpack is shown with a simulation of total color blindness. Firefox’s developer tools menu is shown with the accessibility tab selected and “achromatopsia” is selected in the Simulate option.'
                />
              </picture>
            </LazyLoad>
            <figcaption className='caption'>
              A rare retinal disorder is characterized by total color blindness.
              Notice the grayscale value of snowpack depth relative to snow
              water content is still readable, just as the highlighted data
              points for 2023 still pop out with the darker shade. The average
              ledger lines are also still visible across all data points.
            </figcaption>
          </figure>
          <p>
            Accessibility goes beyond color. It might involve scrolling, which
            is difficult for those with impaired motor functions.
          </p>
          <aside>
            <p>
              <b>Exercise:</b> Open the accessibility tools in Firefox. Look at
              graphics from your favorite news publication and check if it it’s
              legible for those with a visual impairment.
            </p>
          </aside>
        </section>
        <section id='anatomy' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Anatomy of an infographic</h3>
          </header>
          <p>Here are the basic parts of an infographic.</p>
          <ul>
            <li>
              <b>Headlines</b> are often the first thing readers will see on an
              infographic. A good headline will establish what the infographic
              is about.
            </li>
            <li>
              The infographic’s <b>deck</b> should provide additional context
              for the interpretation of the graphic.
            </li>
            <li>
              <b>Annotations</b> can provide more information about specific
              data points.
            </li>
            <li>
              Complex visualizations may benefit from a <b>key or legend</b> to
              explain what all the information stands for.
            </li>
            <li>
              It’s important to include <b>units</b>, which define what a
              graphic measures.
            </li>
            <li>
              <b>Notes</b> are a useful tool for calling out discrepancies or
              issues in a chart or diagram.
            </li>
            <li>
              Providing a <b>source</b> is important for accountability and
              gives readers the ability to do more individual investigation.
            </li>
          </ul>
        </section>
        <section id='simple_charts' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Simple charts</h3>
          </header>
          <p>
            <a
              href='https://www.datawrapper.de/'
              target='_blank'
              rel='noopener noreferrer'>
              Datawrapper
            </a>{' '}
            and{' '}
            <a
              href='https://flourish.studio/examples/?Industry=Featured'
              target='_blank'
              rel='noreferrer noopener'>
              Flourish
            </a>{' '}
            offer a wide range of data visualizations with an intuitive user
            experience. They allow you to create annotations for both
            quantitative charts and for simple maps.
          </p>
          <p>
            Both support responsive design out of the box, which means these
            platforms handle mobile design for you.
          </p>
          <p>
            Here’s an example of a recent{' '}
            <a
              href='https://www.sfchronicle.com/projects/2026/cheapest-sf-grocery-prices-tariffs/'
              target='_blank'
              rel='noreferrer noopener'>
              Datawrapper table that was published in the Chronicle
            </a>
            . Last year we surveyed grocery prices on three different dates, but
            instead of publishing all three numbers we changed to an average.
            This helps us fit the data into the mobile viewport, and it makes it
            easier to make comparisons.
          </p>
          <figure className='picture mt-md mb-lg'>
            <iframe
              title='Egg prices at select grocery stores compared to 2025'
              aria-label='Table'
              id='datawrapper-chart-QrtOF'
              className='datawrapper-embed'
              src='https://datawrapper.dwcdn.net/QrtOF/2/'
              style={{ height: 657 }}
              scrolling='no'
              data-external='1'></iframe>
          </figure>
          <p>
            A heatmap was added to the percent change to make it easier to see
            how the prices changed.
          </p>
          <h4>
            <span>Takeaways</span>
          </h4>
          <ol>
            <li>
              Show only the data absolutely essential to the storytelling.
            </li>
            <li>
              For tables, show no more than four columns, which is a lot for the
              smaller mobile viewport. If you find yourself with horizontal
              scroll, consider removing a column if the storytelling allows.
            </li>
            <li>Check that your annotations work on mobile and desktop.</li>
          </ol>
        </section>
        <section id='complex' className='mb-xl'>
          <header>
            <h3 className={`subhead mb-xs`}>Diagrams and complex charts</h3>
          </header>
          <p>
            DataWrapper and Flourish offer a lot of options that can lead to
            very sophisticated visualizations. But they do not solve issues with
            diagrams, and sometimes the best data visualizations are very
            unique.
          </p>
          <p>
            For example, when Andrew Park was building a{' '}
            <a
              href='https://www.sfchronicle.com/projects/2023/california-big-melt-water/'
              target='_blank'
              rel='noreferrer noopener'>
              stream graph of Feather River flow (in acre-feet)
            </a>
            , we found that overlaying 2023 data on top of the historical
            average with transparency made the chart clearer and improved
            month-to-month comparisons.
          </p>
          <p>
            We also saw that the steam graph resembled a river, which we felt
            was appropriate to the content and the story we were trying to tell.
          </p>
          <figure className='picture mt-sm mb-lg'>
            <LazyLoad offset={300}>
              <div className='picture-wrapper'>
                <img
                  src={`${base}assets/featherriver.png`}
                  alt='This screengrab compares monthly Feather River flow volumes (in acre-feet) for 2023 versus the average.'
                />
              </div>
            </LazyLoad>
            <figcaption className='caption'>
              In the original presentation, we used code to switch between
              vertical and horizontal versions of the graphic to ensure
              readability across devices.
            </figcaption>
          </figure>
          <p>
            Here are a few strategies for getting beyond DataWrapper and
            Flourish while ensuring your graphics work on mobile:
          </p>
          <h4>
            <span>1. Static images with HTML and CSS</span>
          </h4>
          <p>
            This is the simplest approach, and I actually used it earlier in
            this presentation.
          </p>{' '}
          <p>
            This graphic shows which devices Chronicle readers used to view one
            of our stories. It’s a raster image, meaning it’s an image made of
            pixels instead of scalable vector shapes or code. Surrounding
            context and a clear caption make the image understandable, including
            for visually impaired readers.
          </p>
          <figure className='picture mt-sm mb-lg'>
            <LazyLoad offset={300}>
              <div className='picture-wrapper'>
                <img
                  src={mobileDataImg}
                  alt='Actual user data from a Chronicle project is shown in a bar chart. Mobile accounts for 58%. Desktop and tablet are both 21%.'
                />
              </div>
            </LazyLoad>
            <figcaption className='caption'>
              This graphic appeared earlier in this presentation.
            </figcaption>
          </figure>
          <p>
            There’s more. Under the hood is <b>alt text</b>, which describes the
            graphic visually. Screen readers will read this text aloud for the
            visually impaired.
          </p>
          <figure className='big-picture mt-md mb-md'>
            <LazyLoad offset={300}>
              <picture>
                <source
                  type='image/webp'
                  srcSet={`${alttext['480'] + '.webp'} 480w, ${alttext['1200'] + '.webp'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <source
                  type='image/jpeg'
                  srcSet={`${alttext['480'] + '.jpg'} 480w, ${alttext['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
                <img
                  src={alttext['1200'] + '.jpg'}
                  srcSet={`${alttext['480'] + '.jpg'} 480w, ${alttext['1200'] + '.jpg'} 1200w`}
                  sizes='(max-width: 1200px) 100vw, 1200px'
                  loading='lazy'
                  decoding='async'
                  alt='Developer tools is used to inspect a rasterized chart about device usage by the audience for one Chronicle story.'
                />
              </picture>
            </LazyLoad>
            <figcaption className='caption'>
              By inspecting the HTML in DevTools, we can see that an <b>alt</b>{' '}
              was added to the <b>img</b> tag.
            </figcaption>
          </figure>
          <p>
            Notice that that alt caption is super hard to read on desktop, and
            it gets even tinier on mobile? We can use CSS and media queries to
            swap the images to solve this problem.
          </p>
          <p>
            If you shrink the size of your browser, this image should swap to a
            close up of where the alt text is more readable.
          </p>
          <figure className='big-picture'>
            <img
              className='responsive-desktop'
              src={`${base}assets/wide.png`}
              alt='A screengrab of an img tag in DevTools which is very wide and hard to read on a smaller screen'
            />
            <img
              className='responsive-mobile'
              src={`${base}assets/small.png`}
              alt='A tighter screengrab of the img tag in DevTools which pixellates on desktop but is readable on mobile.'
            />
            <figcaption className='caption'>
              The screengrab changes based on the size of your viewport via CSS.
              This is a low lift, low coding solution that allows you to make
              your graphics readable across devices.
            </figcaption>
          </figure>
          <aside>
            <p>
              <b>Try it:</b> Resize your browser and see how the image changes.
              If you inspect the image itself, you can watch how it changes in
              the code in real time.
            </p>
          </aside>
          <p>
            This is a simplified version of what my code looks like for the two
            photos. They are two stacked image tags, which I've wrapped in the
            same <b>figure</b> tag since they're part of the same “graphic” and
            should have the same caption (in the <b>figcaption</b> tag):
          </p>
          <pre>
            <code>
              &lt;figure class='big-picture'&gt;
              <br /> &lt;img class='responsive-desktop'
              <br />
              {'  '}src='wide.png'
              <br />
              {'  '}alt='Alt text here' /&gt;
              <br /> &lt;img class='responsive-mobile'
              <br /> src='small.png'
              <br />
              {'  '}alt='Alt text here' /&gt;
              <br /> &lt;figcaption className='caption'&gt;
              <br /> Caption goes here
              <br /> &lt;/figcaption&gt;
              <br />
              &lt;/figure&gt;
            </code>
          </pre>
          <p>
            By targeting something unique about the images, we can give them{' '}
            <b>CSS rules</b>. In this case, we can use each image's class. In
            the styles.css file, we can add a rule that hides one of the images
            based on the viewport width.
          </p>
          <pre>
            <code>
              {`@media (max-width: 767px) {
  .responsive-desktop {
    display: none;
  }
  .responsive-mobile {
    display: block;
  }
}
@media (min-width: 768px) {
  .responsive-desktop {
    display: block;
  }
  .responsive-mobile {
    display: none;
  }
}`}
            </code>
          </pre>
          <p>
            What happens in this code is the desktop version is hidden for all
            viewports less than 767 pixels. Instead, mobile is shown.
          </p>
          <p>
            Below that is a different rule for all viewports that are at minimum
            greater than or equal to 768 pixels. In that case, the desktop
            version is shown, and mobile is hidden.
          </p>
          <aside>
            <p>
              <b>Exercise:</b> Download all the files from this{' '}
              <a
                href='https://drive.google.com/drive/folders/1tySyAUXsWig_SSdkI7DRGYrCAfm6dulo?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'>
                Google Drive folder
              </a>
              . Edit the file <b>styles.css</b> so that the smaller version is
              visible for mobile sizes, and the larger version is visible on
              larger viewports. The answer is in the <b>solution</b> folder.
              Here's a hint: Target the classes <b>mobile</b> and{' '}
              <b>text-width</b>.
            </p>
          </aside>
          <h4>
            <span>2. AI2HTML</span>
          </h4>
          <p>
            AI2HTML is a script that converts Adobe Illustrator-based graphics
            into HTML and responsive CSS. It was created by Archie Tse of the
            New York Times.
          </p>
          <p>
            Making AI2HTML graphics may not be as easy as using DataWrapper or
            Flourish, but it gives you more control of the design and, for data,
            opens up unusual visualizations that may not be possible on those
            platforms.
          </p>
        </section>
      </article>
      <footer id='about' className='mb-xl'>
        <header>
          <h3 className={`subhead mb-xs`}>About me</h3>
        </header>
        <p>
          I’m the creative director of the San Francisco Chronicle, where I
          oversee design and help lead graphics and development. I am also vice
          president of the Society for News Design, a trade organization for
          journalists who specialize in visual storytelling and news design.
        </p>
        <p>
          I hate slide decks and had way more fun designing and coding this from
          scratch to double as my presentation deck and a handout.
        </p>
        <h4>
          <span>How to get in touch</span>
        </h4>
        <ul>
          <li>
            <a
              href='https://github.com/alexkfong'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/alex-k-fong-8100999b'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
