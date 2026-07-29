"use client";

import { Button } from "~/components/ui/button";
import Countdown from "~/components/elements/Countdown";
import Image from "~/lib/image";
import { User, Search, Laptop2, Sparkles } from "lucide-react";

export default function AmbassadorPage() {
  return (
    <main className="bg-[#0B0B2E]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
        {/* Ilustrasi pilar kiri-kanan dibiarkan kosong dulu */}

        <div className="z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className="font-league-spartan text-h1 text-primary-10 font-bold">
            Open Recruitment Ambassador
            <br />
            Open House Fasilkom UI 2026
          </h1>

          <p className="font-aileron text-b7 text-primary-20 max-w-2xl">
            Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang
            bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas
            Ilmu Komputer Universitas Indonesia kepada masyarakat.
          </p>

          <Countdown targetDate={new Date("22 August 2026 00:00:00")} />

          <p className="font-aileron text-b7 text-primary-20">
            Pendaftaran dibuka pada 22 Agustus 2026
          </p>

          <div className="flex flex-col items-center gap-3">
            <Button
              variant="tertiary"
              className="bg-tertiary-50 hover:bg-tertiary-50/90"
              aria-label="Daftar sekarang"
            >
              <User />
            </Button>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                className="border-tertiary-50 text-tertiary-50 hover:bg-tertiary-50/10"
                aria-label="Cari informasi"
              >
                <Search />
              </Button>
              <Button
                variant="ghost"
                className="border-tertiary-50 text-tertiary-50 hover:bg-tertiary-50/10"
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
        {/* Dekorasi sparkle pakai lucide dl, nanti ganti kalau nemu asset sparkle custom */}
        <Sparkles
          className="text-primary-30 absolute top-16 left-10 opacity-60"
          size={28}
        />
        <Sparkles
          className="text-primary-30 absolute bottom-24 left-4 opacity-40"
          size={16}
        />

        <h2 className="font-league-spartan text-h1 text-primary-10 max-w-3xl text-center font-bold">
          Apa itu Ambassador
          <br />
          Open House Fasilkom UI?
        </h2>

        <div className="relative flex w-full max-w-5xl items-end justify-center gap-0">
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
              <div className="from-primary-40 to-tertiary-70 flex-1 rounded-xl bg-gradient-to-br px-5 py-4">
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

          {/* Panda illustration */}
          <div className="relative flex w-full max-w-7xl items-end justify-center gap-0">
            
            <img
              alt="Ambassador Panda Mascot"
              src="/design-system/panda-buka-folder.svg"
              
            />
          </div>
        </div>
      </section>
    </main>
  );
}