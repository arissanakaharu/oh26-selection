"use client";

import { Button } from "~/components/ui/button";
import Countdown from "~/components/elements/Countdown";
import { User, Search, Laptop2 } from "lucide-react";

export default function AmbassadorPage() {
  return (
    <main className="bg-[#0B0B2E]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 lg:py-32">
        {/* Ilustrasi pilar kiri-kanan dibiarkan kosong dulu */}

        <div className="z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className="font-league-spartan text-4xl text-primary-10 font-bold sm:text-5xl ig: text-h1">
            Open Recruitment Ambassador
            </h1>
            <h2 className="font-league-spartan text-2xl text-primary-10 font-bold sm: text-3xl lg: text-h2">
            Open House Fasilkom UI 2026
          </h2>

          <p className="font-league-spartan text-b5 text-primary-20 font-bold hidden max-w-2xl lg:block">
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

      {/*  ABOUT AMBASSADOR SECTION  */}
      <section className="relative flex flex-col items-center gap-12 overflow-hidden px-6 py-24">

        <h3 className="font-league-spartan text-h1 text-primary-10 max-w-3xl text-center font-bold">
          Apa itu Ambassador
          <br />
          Open House Fasilkom UI?
        </h3>

        <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-0 lg:flex-row lg:items-end">
          {/* whiteboard card gtw blm nemu gambar tripodnya */}
          <div className="relative z-10 w-full max-w-2xl rounded-[32px] border-4 border-[#0B0B2E] bg-white p-8 shadow-xl">
            <p className="font-aileron text-b7 text-primary-90">
              <span className="font-bold">Program Ambassador</span> Open
              House Fasilkom UI 2026 mengajak anak-anak SMA/K sederajat dan
              influencer untuk meningkatkan{" "}
              <span className="font-bold">brand awareness Fasilkom UI</span>.
              Ambassador bertugas membuat konten digital untuk menyebarkan
              informasi mengenai Open House Fasilkom UI dan Fasilkom UI.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <div className="from-primary-60 to-primary-10 flex-1 rounded-xl bg-gradient-to-br px-4 py-5">
                <p className="font-league-spartan text-h4 text-tertiary-30 font-bold">
                  200+
                </p>
                <p className="font-aileron text-b7 text-primary-10">
                  Pendaftar dari seluruh Indonesia
                </p>
              </div>
              <div className="from-primary-60 to-primary-10 flex-1 rounded-xl bg-gradient-to-br px-5 py-4">
                <p className="font-league-spartan text-h4 text-tertiary-30 font-bold">
                  250+
                </p>
                <p className="font-aileron text-b7 text-primary-10">
                  Pengguna Referral Code
                </p>
              </div>
            </div>

            {/* tripod nanti diganti dengan kalo nemu assetnya */}
            <div className="absolute -bottom-10 left-1/2 h-10 w-1 -translate-x-1/2 bg-[#0B0B2E]" />
            <div className="absolute -bottom-10 left-1/2 h-1 w-16 -translate-x-1/2 rotate-45 bg-[#0B0B2E]" />
            <div className="absolute -bottom-10 left-1/2 h-1 w-16 -translate-x-1/2 -rotate-45 bg-[#0B0B2E]" />
          </div>

          {/* Panda illustration — disembunyikan di mobile, muncul dari breakpoint lg ke atas */}
          <img
            alt="Ambassador Panda Mascot"
            src="/design-system/panda-buka-folder.svg"
            className="relative z-20 hidden w-72 lg:block"
          />
        </div>
      </section>
    </main>
  );
}