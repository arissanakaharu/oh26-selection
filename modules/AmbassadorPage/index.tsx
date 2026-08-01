"use client";

import { Button } from "~/components/ui/button";
import Countdown from "~/components/elements/Countdown";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { User, Search, Laptop2, ChevronDown, MessageCircle } from "lucide-react";
import { Instagram } from "~/components/icons/instagram";
import { Tiktok } from "~/components/icons/tiktok";
import { Twitter } from "~/components/icons/twitter";
import { Youtube } from "~/components/icons/youtube";

export default function AmbassadorPage() {
  return (
    <main className="bg-[#0B0B2E]">
  {/* HERO SECTION */}
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 lg:py-32">
      <div className="z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="font-league-spartan text-4xl text-primary-10 font-bold sm:text-5xl lg:text-h1">
            Open Recruitment Ambassador
        </h1>
        <h2 className="font-league-spartan text-2xl text-primary-10 font-bold sm:text-3xl lg:text-h2">
            Open House Fasilkom UI 2026
        </h2>

        <p className="font-league-spartan text-b5 text-primary-20 hidden max-w-2xl font-bold lg:block">
            Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang
            bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas
            Ilmu Komputer Universitas Indonesia kepada masyarakat.
        </p>

        <Countdown targetDate={new Date("22 August 2026 00:00:00")} />

        <p className="font-aileron text-b7 text-primary-20">
            Pendaftaran dibuka pada 22 Agustus 2026
        </p>

        <div className="flex w-full max-w-xs flex-col items-center gap-3">
          <Button
              variant="tertiary"
              className="w-full bg-tertiary-50 hover:bg-tertiary-50/90"
              aria-label="Daftar sekarang"
            >
              <User />
          </Button>

          <div className="flex w-full gap-3">
            <Button
                variant="ghost"
                className="min-w-0 flex-1 border-tertiary-50 text-tertiary-50 hover:bg-tertiary-50/10"
                aria-label="Cari informasi"
              >
                <Search />
            </Button>
            <Button
                variant="ghost"
                className="min-w-0 flex-1 border-tertiary-50 text-tertiary-50 hover:bg-tertiary-50/10"
                aria-label="Lihat panduan"
              >
              <Laptop2 />
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT AMBASSADOR SECTION */}
      <section className="relative flex flex-col items-center gap-12 overflow-hidden px-6 py-24">
        <h3 className="font-league-spartan text-3xl text-primary-10 max-w-3xl text-center font-bold sm:text-4xl lg:text-h1">
          Apa itu Ambassador
          <br />
          Open House Fasilkom UI?
        </h3>

        <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-0 lg:flex-row lg:items-center">
          <img
           alt="Program Ambassador Open House Fasilkom UI 2026 mengajak anak-anak SMA/K sederajat dan influencer untuk meningkatkan brand awareness Fasilkom UI. 200+ pendaftar dari seluruh Indonesia, 250+ pengguna referral code."
           src="/design-system/Projector Final.png"
           className="w-full max-w-2xl"
          />

          <img
            alt="Ambassador Panda Mascot"
            src="/design-system/MC 3.png"
            className="relative z-20 hidden w-72 lg:block"
          />
        </div>
      </section>

      {/* AMBASSADOR ARCHIVE SECTION */}
      <section className="relative flex flex-col items-center gap-12 overflow-hidden px-6 py-24">
        <h3 className="font-league-spartan text-3xl text-primary-10 max-w-3xl text-center font-bold sm:text-4xl lg:text-h1">
          Ambassador 2025&rsquo;s Archive
        </h3>

        {/* Desktop */}
        <img
          alt="Ambassador 2025's Archive"
          src="/design-system/Paper-desktop.png"
          className="mx-auto hidden max-w-4xl lg:block"
        />

        {/* Mobile */}
        <img
          alt="Ambassador 2025's Archive"
          src="/design-system/Paper-mobile.png"
          className="mx-auto block w-full max-w-xs lg:hidden"
        />
      </section>

      {/*FAQ SECTION */}
      <section className="relative overflow-hidden bg-[#5B4FCF] px-6 py-24">
      <div className="mx-auto max-w-5xl">
      <h3 className="font-league-spartan text-3xl text-primary-10 text-center font-bold sm:text-4xl lg:text-h1">
      Need More Help?
      </h3>
      <p className="font-aileron text-primary-10 mt-2 mb-12 text-center text-lg font-bold lg:text-base lg:font-semibold">
      “Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini!”
    </p>

    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      {/* Daftar FAQ */}
      <div className="flex flex-1 flex-col gap-4">
        <Accordion type="single" collapsible>
         <AccordionItem value="item-1">
          <AccordionTrigger>Apa aja benefit daftar Ambassador?</AccordionTrigger>
          <AccordionContent>Sebagai Ambassador, kamu akan terlibat langsung dalam promosi OH Fasilkom, berkesempatan membangun relasi dengan teman-teman dari seluruh Indonesia, mendapatkan akses ke program eksklusif seperti webinar dan mentoring, serta memperluas wawasan seputar teknologi, bisnis digital, dan masa depan industri IT.</AccordionContent>
         </AccordionItem>
        </Accordion>

        {[
          "Bagaimana jika aku memiliki kesibukan lain dan ingin mendaftar?",
          "Berapa lama program Ambassador ini berjalan?",
          "Harus bisa ngedit video gak kak??",
          "Aku dari luar Jabodetabek, bisa ikut juga gak?",
          "Apakah program ini berbayar?",
          "Harus terkenal ya kak?",
        ].map((question) => (
          <div
            key={question}
            className="bg-primary-70 flex items-center justify-between rounded-xl p-5 shadow-md"
          >
            <p className="font-aileron text-primary-10 font-bold">
              {question}
            </p>
            <ChevronDown className="text-primary-10 h-5 w-5 shrink-0" />
          </div>
        ))}
      </div>

      {/* Panda illustration */}
      <img
        alt="Panda kebingungan"
        src="/design-system/panda-bingung.png"
        className="relative hidden w-64 shrink-0 self-center lg:block"
      />
    </div>
       </div>
       </section>

    {/* CONTACT PERSON SECTION */}
    <section className="relative flex flex-col items-center gap-6 overflow-hidden bg-gradient-to-b from-[#8B7FE8] to-[#6B5CE0] px-6 py-16 text-center">
    <h2 className="font-league-spartan text-3xl text-primary-10 font-bold sm:text-4xl lg:text-h2">
    Butuh bantuan atau punya pertanyaan lain?
    </h2>
    <p className="font-aileron text-primary-10 mt-2 mb-12 text-center text-lg font-bold lg:text-base lg:font-semibold">
    Kamu dapat hubungi kontak di bawah ini untuk informasi lebih lanjut ya!
   </p>

   <img
    alt="Panda FAQ Section"
    src="/design-system/panda-faqsection.png"
    className="-mb-16 w-full max-w-2xl sm:-mb-24 lg:-mb-32"
  />

   <div className="relative z-10 flex fex-row gap-3">
   <Button variant="primary" className="h-auto min-w-0 gap-2 px-4 py-2 text-sm">
    <MessageCircle className="h-4 w-4" />
    Contact Person
   </Button>
   <Button variant="primary" className="h-auto min-w-0 gap-2 px-4 py-2 text-sm">
    <MessageCircle className="h-4 w-4" />
    Contact Person
   </Button>
   </div>
   </section>

{/* FOOTER */}
<div className="relative block lg:hidden">
  <img alt="" src="/design-system/footer-mobile.webp" className="w-full" />

  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 px-8 pb-8">
    <div className="flex items-start justify-between">
      {/* logo */}
      <div className="flex flex-col items-center gap-1">
        <div className="relative flex flex-col items-center">
          
          <img
            alt="Open House Fasilkom UI 2026"
            src="/design-system/logo-no-bg.svg"
            className="relative z-10 w-16"
          />
        </div>
        <p className="font-aileron text-primary-10 text-center text-sm font-semibold">
          Open House
          <br />
          Fasilkom UI 2026
        </p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center gap-2">
          <span className="font-aileron text-primary-10 text-xs">
            Supported By:
          </span>
          <img
            alt="Fakultas Ilmu Komputer UI"
            src="/design-system/fasilkom.svg"
            className="h-8"
          />
        </div>

        <div className="flex items-center gap-3">
          <a aria-label="Instagram" href="#">
            <Instagram size="w-4 h-4" fill="fill-primary-10" />
          </a>
          <a aria-label="TikTok" href="#">
            <Tiktok size="w-4 h-4" fill="fill-primary-10" />
          </a>
          <a aria-label="Twitter/X" href="#">
            <Twitter size="w-4 h-4" fill="fill-primary-10" />
          </a>
          <a aria-label="YouTube" href="#">
            <Youtube size="w-4 h-4" fill="fill-primary-10" />
          </a>
        </div>
      </div>
    </div>

    {/* Email */}
    <p className="font-aileron text-primary-10 text-xs">
      ohfasilkomui2026@gmail.com
    </p>
  </div>
</div>
    </main>
  );
}