import { LinkPreview } from "@/components/ui/link-preview";
import { committee } from "@/data/committee";

const CommitteePage = () => {
  return (
    <div
      className="container bg-neutral-950 w-full pt-32 relative overflow-hidden pb-20"
      id="awards">
      <h1 className="font-varino text-4xl text-center font-bold text-white uppercase tracking-widest">
        Committee
      </h1>
      <div className="w-full lg:w-[50rem] mx-auto mt-16 space-y-7">
        {committee &&
          committee?.map((team, index) => (
            <div
              className={`w-full grid grid-cols-2 py-5 ${
                index % 2 === 0 ? "bg-zinc-900" : ""
              }`}
              key={index}>
              <div className="w-full flex justify-start items-start">
                <h3 className="font-semibold text-white text-sm lg:text-lg ml-5 lg:tracking-wider text-wrap w-3/4">
                  {team.position === committee[index - 1]?.position
                    ? ""
                    : team.position}
                </h3>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-y-4">
                {team.members?.map((member, index) => (
                  <div className="flex flex-col items-start" key={index}>
                    <LinkPreview url={member.linkedin}>
                      <p className="text-sm font-normal lg:text-lg text-white lg:font-semibold lg:tracking-wider">
                        {member.name}
                      </p>
                    </LinkPreview>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommitteePage;
