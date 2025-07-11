import { Faqs } from "@/components/sections/faqs";
import { Emissions } from "@/components/sections/home/emission";
import { Header } from "@/components/sections/home/header";
import { Industries } from "@/components/sections/home/industries";
import { Products } from "@/components/sections/home/products";
import { Technologies } from "@/components/sections/home/technologies";
import { Video } from "@/components/sections/home/video";
import { WhoWeAre } from "@/components/sections/home/who-we-are";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-svh">
      <Header />
      <main id="main-content">
        <WhoWeAre />
        <Video />
        <Products />
        <div className="container">
          <Separator className="my-12" />
        </div>
        <Industries />
        <Emissions />
        <Technologies />
        <Faqs />
      </main>
    </div>
  );
}
