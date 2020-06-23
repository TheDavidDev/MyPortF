import Layout from '../components/Layout';
const checkUrls = obj => {
  switch (obj.name) {
    case "github":
      return `https://github.com/${obj.userName}`;
    case "twitter":
      return `https://twitter.com/${obj.userName}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${obj.userName}`;
    case "instagram":
      return `https://www.instagram.com/${obj.userName}`;
    default:
      return null;
  }
};





const Contact = () => (
  <Layout>
    <div>
      <h1>Contact</h1>
      <p>David Lopez 
         <br/>My<a href="mailto:David.Lopez@hyperisland.se"> e-mail</a>
          <br/>Phone : +46 707780443
          <br/>Facebook: <a href="http://facebook.com/sthlm412"> David.Lopez</a>
          <br/>Instagram: <a href="http://instagram.com/airheliny"> AirHeliNY</a>
          <br/>GitHub: <a href="http://github.com/nordicvzlan"> Git it</a>
      </p>
    </div>
  </Layout>
);

export default Contact;

