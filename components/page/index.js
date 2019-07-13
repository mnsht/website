import Head from 'next/head';

const defaultCanonical = 'https://moonshot.is';
const defaultName = 'Moonshot';
const defaultDescription =
  'Moonshot is an open-source collective, dev shop, and design studio all rolled into one.';
const defaultImage = '/static/logo.jpg';

export default ({
  title,
  canonical = defaultCanonical,
  name = defaultName,
  description = defaultDescription,
  image = defaultImage,
  noRobots,
  children
}) => {
  title = title ? `${name} | ${title}` : name;

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={name} />
        <meta property="og:description" content={description} />

        {noRobots && <meta name="robot" content="noindex, nofollow" />}

        <link rel="canonical" href={canonical} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="theme-color" content="#333333" />

        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
