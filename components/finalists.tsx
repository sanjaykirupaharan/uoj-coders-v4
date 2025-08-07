"use client";

import {
    Table,
    TableCaption,
} from "@/components/ui/table";

export default function Finalists() {
    return (
        <div
            className="bg-neutral-950 w-full relative py-12 overflow-hidden mx-auto"
            id="finalists">
            <div className="relative bg-gradient-to-r from-platinum to-silver py-10 overflow-hidden font-varino">
                <div className="animate-pulse absolute inset-0 bg-[url('/confetti-pattern.svg')] opacity-10">   </div>
                <h1 className=" text-2xl lg:text-4xl text-center font-bold bg-gradient-to-b from-[#18ccfc] via-[#6344f5] to-[#ae48ff] bg-clip-text text-transparent uppercase">🏆 The Finalists</h1>
                <p className="text-center mt-2 text-xs lg:text-lg">Witness the showdown on August 23rd 2025!</p>
            </div>
            <div className="w-3/4 lg:w-7/12 mx-auto mt-10 overflow-y-hidden">
                <Table className="overflow-y-hidden ">
                    <TableCaption>
                        The list is ordered according to the alphabetical order of the Team names.
                    </TableCaption>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-4 font-light">
                        {teams.map((team) => (
                            <div className="bg-gradient-to-b from-[#040210] via-[#2c1375] to-[#ae48ff] p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold text-center mt-1 text-white">{team.teamName}</h3>
                                <p className="text-gray-300 text-center">{team.university}</p>
                                {/* <div className="mt-3 flex justify-center space-x-2">
                                    <span className="bg-silver px-3 py-1 rounded-full text-sm">🔥 3 Wins</span>
                                    <span className="bg-platinum px-3 py-1 rounded-full text-sm">🎯 Top 5%</span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </Table>
            </div>
        </div>
    );
}

const teams = [
    { teamName: "CS_BrainDrain", university: "University of Jaffna" },
    { teamName: "CS_BreakTheRules", university: "University of Moratuwa" },
    { teamName: "CS_Byte_Knights", university: "University of Moratuwa" },
    { teamName: "Cs_ByteForce", university: "University of Moratuwa" },
    { teamName: "CS_Code404", university: "University of Jaffna" },
    { teamName: "CS_CodeJar", university: "University of Moratuwa" },
    { teamName: "CS_CodeRangers", university: "University of Jaffna" },
    { teamName: "CS_CodexMachina", university: "University of Moratuwa" },
    { teamName: "CS_DOT", university: "University of Vavuniya" },
    { teamName: "CS_DualDudes", university: "University of Moratuwa" },
    { teamName: "CS_hackophiles", university: "University of Peradeniya" },
    { teamName: "CS_Horcrux", university: "University of Vavuniya" },
    { teamName: "CS_Nasakarar", university: "University of Peradeniya" },
    { teamName: "CS_nutcrackers", university: "University of Peradeniya" },
    { teamName: "CS_RootCode", university: "Rajarata University of Sri Lanka" },
    { teamName: "CS_SoloDev", university: "University of Ruhuna" },
    { teamName: "CS_StrawHats", university: "University of Moratuwa" },
    { teamName: "CS_Team_Glory", university: "Sri Lanka Institute of Information Technology" },
    { teamName: "CS_TeamX", university: "University of Jaffna" },
    { teamName: "CS_Tsc", university: "University of Moratuwa" },

];
