"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Finalists() {
    return (
        <div
            className="bg-neutral-950 w-full relative py-12 overflow-hidden mx-auto"
            id="finalists">
            <div className="relative bg-gradient-to-r from-platinum to-silver py-10 overflow-hidden font-varino">
                <div className="animate-pulse absolute inset-0 bg-[url('/confetti-pattern.svg')] opacity-10"></div>
                <h1 className=" text-2xl lg:text-4xl text-center font-bold text-white uppercase">🏆 The Finalists</h1>
                <p className="text-center mt-2 text-xs lg:text-lg">Witness the showdown on August 23rd 2025!</p>
            </div>
            <div className="w-10/12 lg:w-1/2 mx-auto mt-10 overflow-y-hidden">
                <Table className="overflow-y-hidden">
                    <TableCaption>
                        The list is ordered according to the alphabetical order of the Team names.
                    </TableCaption>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 p-8 font-light ">
                        {teams.map((team) => (
                            <div className="bg-gradient-to-r from-[#18ccfc] via-[#6344f5] to-[#ae48ff] p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                                <h3 className="text-xl font-semibold text-center mt-1 text-white">{team.teamName}</h3>
                                <p className="text-black text-center">{team.university}</p>
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
    { teamName: "CS_Bench_coders", university: "University of Jaffna" },
    { teamName: "CS_BrainDrain", university: "University of Jaffna" },
    { teamName: "CS_BreakTheRules", university: "University of Moratuwa" },
    { teamName: "Cs_ByteForce", university: "University of Moratuwa" },
    { teamName: "CS_Code_X", university: "Northern University" },
    { teamName: "CS_Code404", university: "University of Jaffna" },
    { teamName: "CS_Codenix4", university: "University of Jaffna" },
    { teamName: "CS_CodeRangers", university: "University of Jaffna" },
    { teamName: "CS_CodexMachina", university: "University of Moratuwa" },
    { teamName: "CS_DataDynamites", university: "University of Moratuwa" },
    { teamName: "CS_DOT", university: "University of Vavuniya" },
    { teamName: "CS_DualDudes", university: "University of Moratuwa" },
    { teamName: "CS_hackophiles", university: "University of Peradeniya" },
    { teamName: "CS_Horcrux", university: "University of Vavuniya" },
    { teamName: "CS_LogicLegion", university: "University of Jaffna" },
    { teamName: "CS_Nasakarar", university: "University of Peradeniya" },
    { teamName: "CS_nutcrackers", university: "University of Peradeniya" },
    { teamName: "CS_RNViththagan", university: "University of Jaffna" },
    { teamName: "CS_RootCode", university: "Rajarata University of Sri Lanka" },
    { teamName: "CS_SoloDev", university: "University of Ruhuna" },
    { teamName: "CS_Team_Glory", university: "Sri Lanka Institute of Information Technology" },
    { teamName: "CS_TeamX", university: "University of Jaffna" },
    { teamName: "CS_Tsc", university: "University of Moratuwa" },

];
