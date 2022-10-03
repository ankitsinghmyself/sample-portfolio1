import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankit Singh</title>
        <meta name="description" content="Ankit Singh Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* hero section */}
        <section className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-center">Ankit Singh</h1>
            <p className="text-2xl font-medium text-center">
              Full Stack Developer
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
