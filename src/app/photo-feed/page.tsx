import wonders from "./wonders";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-center text-3xl font-bold my-4">
        7 Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link href={`/photo-feed/${id}`} key={id}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
