import Footer from "/components/Footer";
import Head from "next/head";
import Link from "next/link";
import Layout from "/components/layout";
import Image from "next/image";
import { Navbar } from "/components/Navbar";
export default function laatstenieuws() {
  return (
    <Layout>
      <Head>
        <title>Laatste Nieuws</title>
      </Head>
      <Navbar />
      <Image
        src="/images/hetleestenregenweer.jpg"
        alt="nieuwe route"
        width={650}
        height={434}
      />
      <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
        <div
          className="pt-1 text-blue-700 border-4 border-blue-700 bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 rounded-xl"
          role="alert"
        >
          <h5 className="font-serif font-thin text-center text-yellow-600 bg-yellow-200 rounded-sm title-font md:text-4xl">
          Laatste Nieuws
        </h5>
             </div>
      </div>
      <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
      <div className="bg-red-200">
        <div
          className="order-4 p-1 text-center text-yellow-600 border-yellow-600 md:text-2xl px-auto "
        >
         
          <h1 className="text-4xl text-center">6 februari 2022 </h1><br />
                <p>Vanmorgen lekker regenbuitje.</p>
                <p>We kunnen niet zonder water! </p>
                <p></p>                
                <h1 className="text-2xl text-red-600">Natuurgebied Orderbos</h1>                
              
<p>Het grootste deel van het terrein bestaat uit dennenbos.</p>
<p>Ook zijn er enkele heideterreintjes, wildweides en statige oude beukenlanen.</p>
<p>Er kan worden gewandeld, gefietst en paardgereden.</p> 
<p>Het bos heeft een goede padenstructuur voor veel verschillende soorten recreanten.</p> 
<p>Om het dierlijk leven in de Orderbeek te stimuleren is er in sommige delen grind gelegd.</p> 
<p>Dat is heel aantrekkelijk voor de beekprik, een primitieve vis.</p> 
<p>De beekprik lijkt meer op een grote regenworm dan op een vis.</p>


      </div>
    
      </div>
      </div>
    
      
              <Footer />
          </Layout>
  );
}
