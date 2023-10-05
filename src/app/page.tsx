import InstaCard from "@/components/insta-card";
import Link from "next/link";

export default async function Home() {
  const photosRes = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${process.env.NASA_API_KEY}`
  );

  const photos = await photosRes.json();

  return (
    <div>
      <header className="w-full px-6 py-4 border-b border-gray-800 flex justify-center gap-2">
        <span className="font-bold">MarsDiaries</span>
        <span>by</span>
        <Link
          className="underline hover:text-blue-500"
          href="https://ikramhasan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ikram Hasan
        </Link>
      </header>
      <main className="flex items-center justify-center ma-auto p-6 h-full w-full">
        <div className="grid gap-3">
          {photos.latest_photos.map((photo: any) => (
            <InstaCard
              key={photo.id}
              user="Perseverance"
              sol={photo.sol}
              camera={photo.camera.full_name}
              totalPhotos={photo.rover.total_photos}
              image={photo.img_src}
              date={photo.earth_date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
