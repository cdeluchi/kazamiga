// import Layout from "../components/Layout";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import { render } from "react-dom";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link href="link to font" rel="../styles/globals.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Playfair+Display&display=swap"
            rel="../styles/globals.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
