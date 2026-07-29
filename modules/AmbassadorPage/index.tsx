"use client";

import { Button } from "~/components/ui/button";
import Countdown from "~/components/elements/Countdown";
import { User, Search, Laptop2 } from "lucide-react";

export default function AmbassadorPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B2E] px-6 py-32">
      {/* Ilustrasi pilar kiri-kanan: asset belum tersedia, dibiarkan kosong dulu */}

      <section className="z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="font-league-spartan text-h1 text-primary-10 font-bold">
          Open Recruitment Ambassador
          <br />
          Open House Fasilkom UI 2026
        </h1>

        <p className="font-aileron text-b7 text-primary-20 max-w-2xl">
          Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang
          bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu
          Komputer Universitas Indonesia kepada masyarakat.
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
      </section>
    </main>
  );
}