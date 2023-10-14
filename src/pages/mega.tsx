import Footer from "~/modules/footer/Footer";
import Header from "~/modules/header/Header";
import PowerSection from "~/modules/mega/PowerSection";

export default function Mega() {
  return (
    <div className="flex flex-col">
      <Header />
      <PowerSection />
      <Footer />
    </div>
  );
}
