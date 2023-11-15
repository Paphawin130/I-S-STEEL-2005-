import Head from "next/head";

const DOMAIN =
  "https://media.discordapp.net/attachments/765174902403366954/1069171325601591297/Ety5LmNyB-VuOTOewn-lmD9gS4Pa-0zg_JP4ugsbNyyZFyxl9U1JbmvgLNtU5UMho_wdmcTRYiGxEWlpXAro_iUPXEd5NnRuU--2vLpSF6dexxgV0Z-rib1ZjVL706zsP2uY37_sYhe3ZE3H06zpyQw16383.png";

export default function Meta({
  title = "บริษัท ไอ เอส สตีล (2005) จำกัด",
  description = "จำหน่าย นำเข้าอลูมิเนียมอัลลอย และโลหะทุกชนิด",
  image = `${DOMAIN}`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="JCu7ig2hkiijnjnq8doWrgNg9HPCpWwo2WrTQWko8Cs"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo.png" />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="noindex,nofollow" />
      <meta name="2005" content="all" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
