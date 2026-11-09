const items = [
  "Dosa",
  "Idli",
  "Vada",
  "Thali",
  "Filter Coffee",
  "Mysore Pak",
  "Payasam",
  "Kothu Parotta",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-6 pr-6 lg:gap-10 lg:pr-10"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-6 lg:gap-10">
          <span>{item}</span>
          <span aria-hidden="true" className="text-[0.7rem] not-italic text-brass">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Maroon strip under the hero. Slowly scrolls sideways; pauses on hover. */
export default function FoodBand() {
  return (
    <section
      aria-label="What we serve"
      className="marquee overflow-hidden bg-kumkum py-3.5 font-serif text-[1.45rem] font-medium italic whitespace-nowrap text-cream lg:py-4.5 lg:text-[1.8rem]"
    >
      {/* The list is rendered twice so the loop is seamless */}
      <div className="marquee-track flex">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
