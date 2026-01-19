export default function Home() {
  return (

    <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home/homeHeroBg.png')" }}>

      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg">
          Your gateway to exceptional services and resources.
        </p>
      </div>

    </section>
  );
}