//import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ filter }) {
  //unstable_noStore(); //Not be cached -> ensure data up-to-date
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;
  if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 4);
  if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 5 && cabin.maxCapacity < 8
    );
  if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
