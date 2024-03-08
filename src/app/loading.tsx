import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-12">
      <Image
        width={300}
        height={300}
        src="loading_spinner.svg"
        alt="loading spinner"
      />
    </div>
  );
}
