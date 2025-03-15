import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  return (
    <div>
      <h1></h1>
      <h1 className="text-3xl font-bold">Event ID: {params.id}</h1>
    </div>
  );
};

export default Page;
