import { Metadata } from "next";
import { notFound } from "next/navigation";
import { departments } from "@/data";
import PageHero from "@/components/PageHero";
import JurusanDetailTabs from "./JurusanDetailTabs";

const majorImages: Record<string, string> = {
  teav: "https://picsum.photos/seed/major-teav/1920/1080",
  ei: "https://picsum.photos/seed/major-ei/1920/1080",
  ki: "https://picsum.photos/seed/major-ki/1920/1080",
  pb: "https://picsum.photos/seed/major-pb/1920/1080",
  tsm: "https://picsum.photos/seed/major-tsm/1920/1080",
  tkr: "https://picsum.photos/seed/major-tkr/1920/1080",
  bo: "https://picsum.photos/seed/major-bo/1920/1080",
  bdp: "https://picsum.photos/seed/major-bdp/1920/1080",
  tl: "https://picsum.photos/seed/major-tl/1920/1080",
  tp: "https://picsum.photos/seed/major-tp/1920/1080",
  nima: "https://picsum.photos/seed/major-nima/1920/1080",
  dkv: "https://picsum.photos/seed/major-dkv/1920/1080",
  bp: "https://picsum.photos/seed/major-bp/1920/1080",
  tkj: "https://picsum.photos/seed/major-tkj/1920/1080",
  rpl: "https://picsum.photos/seed/major-rpl/1920/1080",
};

export function generateStaticParams() {
  return departments.flatMap((dept) =>
    dept.majors.map((major) => ({ id: major.id }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const major = departments.flatMap((d) => d.majors).find((m) => m.id === id);
  if (!major) return {};
  return {
    title: major.name,
    description: major.description,
  };
}

export default async function JurusanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const major = departments.flatMap((d) => d.majors).find((m) => m.id === id);
  const dept = departments.find((d) => d.majors.some((m) => m.id === id));

  if (!major || !dept) notFound();

  return (
    <main className="bg-white">
      <PageHero
        title={major.name}
        subtitle={`${dept.name} — ${major.abbreviation}`}
        imageSrc={majorImages[major.id] ?? "https://picsum.photos/seed/major-default/1920/1080"}
      />
      <JurusanDetailTabs major={major} dept={dept} />
    </main>
  );
}
