import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!--====== Required meta tags ======--> */}
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!--====== Title ======--> */}
        <title>Interior - Interior Design and Architecture Web Template</title>

        {/* <!--====== Favicon Icon ======--> */}
        <link rel="shortcut icon" href="images/favicon.png" type="image/png" />

        {/* <!--====== Bootstrap css ======--> */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />

        {/* <!--====== Fontawesome css ======--> */}
        <link rel="stylesheet" href="css/font-awesome.min.css" />

        {/* <!--====== Line Icons css ======--> */}
        <link rel="stylesheet" href="css/LineIcons.css" />

        {/* <!--====== Animate css ======--> */}
        <link rel="stylesheet" href="css/animate.css" />

        {/* <!--====== Aos css ======--> */}
        <link rel="stylesheet" href="css/aos.css" />

        {/* <!--====== Slick css ======--> */}
        <link rel="stylesheet" href="css/slick.css" />

        {/* <!--====== Default css ======--> */}
        <link rel="stylesheet" href="css/default.css" />

        {/* <!--====== Style css ======--> */}
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
