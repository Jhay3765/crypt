import { Navbar } from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main className="bg-black bg-cover">
      <section id="page1" className="min-h-[700px] lg:h-screen">
        <Navbar />
        <section className="flex flex-col h-[100%] justify-center pl-20">
          <h1 className="text-4xl coolfont md:text-9xl py-12 ">
            BUY{" "}
            <span className="l inline-flex animate-text-gradient bg-gradient-to-r from-red-500 via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-6xl md:text-9xl text-transparent">
              CRYPTO
            </span>
          </h1>
          <h1 className="coolfont text-4xl md:text-6xl ">AT TRUE COST</h1>
        </section>
      </section>

      <section
        id="page2"
        className="bg-[#141414]  w-[100%] text-white flex flex-col items-center py-24"
      >
        <div className="flex justify-around w-[100%] flex-col md:flex-row items-center ">
          <h2 className="text-5xl max-w-sm w-[100%]">
            Earn Rewards on idle token
          </h2>
          <p className="text-center m-16 max-w-md w-[100%]">
            Our comprehensive reports speak to the performance of your crypto
            portfolio. Providing actionable recommendations to optimize your
            returns
          </p>

          <Link
            href="/"
            className="bg-black border-2 border-white px-5 py-2 m-1 lg:m-14"
          >
            Explore All
          </Link>
        </div>
        <div className="flex py-14 gap-14 flex-wrap justify-center">
          <Card
            img="/bitcoin.png"
            title="Bitcoin"
            acr="BTC"
            number="0.57"
            number2="134.38"
            text="Subscribe and redeem"
            text2="at any time"
          />
          <Card
            img="/eth.png"
            title="Ethereum"
            acr="ETH"
            number="0.62"
            number2="97.29"
            text="Distribute rewards based on Real-Time"
            text2="
    APR and Bonus Tiered APR
"
          />
          <Card
            img="/tether.png"
            title="Tether"
            acr="USDT"
            number="1.09"
            number2="142.90"
            text="
    Lock Assets for fixed term and earn 
    
"
            text2="
    Higher rewards
"
          />
          <Card
            img="/doge.png"
            title="Doge"
            acr="DOGE"
            number="0.57"
            number2="134"
            text="Subscribe and redeem"
            text2="at any time"
          />
        </div>
      </section>
      <section
        id="page3"
        className=" flex justify-center flex-col items-center"
      >
        <div className="flex flex-col items-center justify-around text-white  md:flex-row  ">
          <h2 className="text-5xl font-bold  max-w-sm text-center lg:text-left my-20">
            Calculate the crypto earning today
          </h2>
          <div className="bg-orange-400 rounded-3xl p-6 flex gap-10 mb-10 text-black">
            <div>
              <p className="text-2xl font-bold">Your Estimated Earnings</p>
              <p className="text-white">for 1.00BTC for 4 weeks</p>
              <p className="text-white text-2xl font-bold">4000 USD</p>
            </div>
            <div className="flex flex-col items-end">
              <p>Start earning today!</p>
              <div>
                <Link
                  href="login"
                  className="bg-red-700 px-4 py-1 text-xs rounded-md text-white "
                >
                  Login
                </Link>
                <Link
                  href="login"
                  className="bg-red-700 px-4 py-1 text-xs rounded-md text-white ml-3 "
                >
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col border border-white rounded-3xl text-white text-center">
          <h2 className="text-4xl mb-24">Calculation of your crypto wallet</h2>
          <h2 className="text-4xl py-4">Products on offer</h2>
          <div className="flex gap-24 py-10 flex-wrap justify-center ">
            <div className="flex p-10 border border-white hover:bg-gray-600  rounded-3xl flex-col ">
              <p>Simple Earn</p>
              <p>Based on Bonus Tiered APR</p>
              <p>0.42+22%</p>
            </div>
            <div className="flex p-10 border border-white hover:bg-gray-600  rounded-3xl flex-col  ">
              <p>Simple Earn</p>
              <p>Based on Bonus Tiered APR</p>
              <p>0.42+22%</p>
            </div>
            <div className="flex p-10 border border-white hover:bg-gray-600  rounded-3xl flex-col ">
              <p>Simple Earn</p>
              <p>Based on Bonus Tiered APR</p>
              <p>0.42+22%</p>
            </div>
          </div>
          <h2>Period of Investment</h2>
          <div className="border border-white flex gap-10 justify-around rounded-2xl flex-wrap ">
            <label className="hover:bg-gray-600  py-1 px-4 rounded-3xl">
              4 Week
            </label>
            <label className="hover:bg-gray-600 py-1 px-4 rounded-3xl">
              4 Week
            </label>
            <label className="hover:bg-gray-600 py-1 px-4 rounded-3xl">
              4 Week
            </label>
            <label className="hover:bg-gray-600 py-1 px-4 rounded-3xl">
              4 Week
            </label>
            <label className="hover:bg-gray-600 py-1 px-4 rounded-3xl">
              4 Week
            </label>
          </div>
        </div>
      </section>
      <section
        id="page4"
        className="flex justify-center max-w-5xl container mx-auto py-24 flex-wrap lg:flex-nowrap "
      >
        <div className="flex flex-col justify-center gap-7 items-center lg:items-stretch text-center lg:text-left">
          <h2 className="text-6xl">Trade & invest anytime, anywhere</h2>

          <Image alt="" src="/phone.png" width="300" height="300" />
        </div>

        <div className="flex flex-col max-w-lg justify-around">
          <p>
            Our comprehensive reports are designed to provide you with a
            detailed analysis of your cryptocurrency portfolio. Our team of
            experts carefully evaluates each of your investments and provides
            you with recommendations to help you optimize your returns{" "}
          </p>
          {/*  Item*/}
          <div className="flex gap-1 items-center">
            <Image
              alt=""
              src="/person.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
            />

            <section className="">
              <h3 className="text-white font-bold py-1">
                {" "}
                Verify your identity{" "}
              </h3>
              <p>
                Complete the identity verification process to secure your
                Account and transactions.
              </p>
            </section>
          </div>
          {/*  Item*/}
          <div className="flex gap-3 items-center">
            <Image
              alt=""
              src="/cash.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
            />

            <section className="">
              <h3 className="text-white font-bold py-1"> Fund your Account</h3>
              <p>
                Add funds to your crypto account to start trading crypto. Add
                funds with variety of Payment methods.
              </p>
            </section>
          </div>
          {/*  Item*/}
          <div className="flex gap-5 items-center">
            <Image
              alt=""
              src="/graph.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
            />

            <section className="">
              <h3 className="text-white font-bold py-1"> Start trading</h3>
              <p>
                You are good to go! Buy/sell crypto, set up recurring buys for
                your investments, and discover what Binance has to offer.
              </p>
            </section>
          </div>
          <div className="flex justify-between">
            <section className="p-5 border border-white flex gap-5 rounded-3xl">
              <Image alt="" src="/apple.png" width="50" height="0" />

              <section className="">
                <h3 className="text-white font-light py-1">Download on the</h3>
                <p className="font-bold text-white">App Store</p>
              </section>
            </section>
            <section className="p-5 border border-white flex gap-5 rounded-3xl">
              <Image alt="" src="/google.png" width="50" height="0" />

              <section className="">
                <h3 className="text-white font-light py-1">Get it on</h3>
                <p className="font-bold text-white">Google Play</p>
              </section>
            </section>
          </div>
        </div>
      </section>
      {/*  PAGE 5*/}
      <section id="page5" className="pt-2 bg-[#141414]">
        <div className="flex justify-around py-12 flex-wrap">
          <div className="">
            <h1 className="font-bold text-5xl sm:text-8xl shadowfont text-center w-full pb-10">
              CryptoWave
            </h1>
            <p className="max-w-2xl text-center md:text-left ">
              Digital asset prices can be volatile. The value of your investment
              you go down or up and you may not get back the amount invested.
              You are solely responsible for your investment decisions and
              cryptowave is not responsible for any losses you may occur.
            </p>
          </div>
          <div className="text-7xl max-w-sm leading-[1.5]">
            About Us Products Service Learn
          </div>
        </div>

        <div className="flex gap-20 py-9 items-center container mx-auto justify-center md:justify-normal">
          <Image alt="" src="/fb.png" width="35" height="35" />
          <Image alt="" src="/ig.png" width="35" height="35" />
          <Image alt="" src="/twitter.png" width="35" height="0" />
          <Image alt="" src="/tiktok.png" width="35" height="35" />
        </div>
        <hr className="border-dotted bg-transparent mx-48" />
        <div className="   grid sm:grid-cols-2 lg:flex   justify-around px-24 py-7 leading-8">
          <ul>
            <h3 className="text-3xl text-white py-5 pb-10 font-bold">
              About Us
            </h3>
            <li>About</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Binance blog</li>
            <li>Building trust</li>
            <li>Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul>
            <h3 className="text-3xl text-white py-5 pb-10 font-bold">
              Products
            </h3>
            <li>Exchange</li>
            <li>Academy</li>
            <li>Charity</li>
            <li>Card</li>
            <li>Labs</li>
          </ul>
          <ul>
            <h3 className="text-3xl text-white py-5 pb-10 font-bold">
              Service
            </h3>
            <li>Downloads</li>
            <li>Desktop Application</li>
            <li>Buy crypto</li>
            <li>Institutional & VIP Services</li>
            <li>OTC Trading</li>
            <li>Referral</li>
            <li>Affiliate</li>
            <li>Listing Application</li>
          </ul>
          <ul>
            <h3 className="text-3xl text-white py-5 pb-10 font-bold">Learn</h3>
            <li>Learn & Earn</li>
            <li>Browse Crypto Prices</li>
            <li>Bitcoin Price</li>
            <li>Ethereum Price</li>
            <li>BUY BNB</li>
            <li>Buy BUSD</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
