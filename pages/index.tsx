import Image from "next/image";
import { Archivo_Narrow } from "next/font/google";
import Background from "@/components/Background";
import Party from "@/components/Party";
import Box from "@/components/Box/Box";
import { useData } from "@/components/DataProvider";
import Base from "@/components/Base";
import Filter from "@/components/Filter";

const archivoNarrow = Archivo_Narrow({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col pt-4 ${archivoNarrow.className}`}
    >
      <div className="flex justify-center z-10 gap-10">
        <Filter />
        <div className="flex flex-col gap-4">
          <Party />
          <Box />
          <Base />
        </div>
        <div
          style={{
            width: 384,
          }}
        />
      </div>
      <Background />
    </main>
  );
}
