import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="ds-home-section">
          <HomeCard />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
