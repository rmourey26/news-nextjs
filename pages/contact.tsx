import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title key="title">Contact us</title>
      </Head>
      <main>
        <h1>Contact us</h1>
        {/* Create a div element for the contact information */}
        <div className="mx-auto max-w-lg">
          {/* Create a p element for the phone number */}
          <p className="mb-4">
            <span className="font-bold">Phone:</span> +1.717.603.7465
          </p>
          {/* Create a p element for the address */}
          <p className="mb-4">
            <span className="font-bold">Address:</span> 30 N Gould St STE R Sheridan, WY USA 82801
          </p>
          {/* Create a p element for the website */}
          <p className="mb-4">
            <span className="font-bold">Website:</span>{' '}
            <a href="https://blockchain-company.io" className="text-blue-500">
              The Blockchain Company.IO
            </a>
          </p>
          {/* Create a p element for the email */}
          <p className="mb-4">
            <span className="font-bold">Email:</span>{' '}
            <a href="mailto:inquire@blockchain-company.io" className="text-blue-500">
              inquire@blockchain-company.io
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
