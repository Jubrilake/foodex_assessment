import { Button } from "./ui/button";

const FooterSection = () => {
  return (
    <section className="rounded-xl mx-10 mb-24 px-10 py-12 text-center shadow-xl border border-[#EDEFFC]">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-xl  md:text-3xl font-bold text-black mb-4 ">
          Signup to{" "}
          <span className="bg-[#5f63e1] px-3 py-2 text-white rounded-full border-4 border-black">
            chowafrica
          </span>{" "}
          and say <br />
          <span className="bg-black inline-block mt-4 border-4 rounded-full border-[#00C9A7] text-white px-3 py-2">
            goodbye 👋🏽
          </span>{" "}
          to mealtime stress.
        </h2>
        <Button
          variant="default"
          size="lg"
          className="rounded-full text-xl px-10 py-7 border-white border-2 shadow-xl hover:bg-[#00C9A7]/90 text-white mt-6"
        >
          JOIN WAITLIST
        </Button>
      </div>
    </section>
  );
};

export default FooterSection;
