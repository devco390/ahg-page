import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!--====== Required meta tags ======--> */}

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
