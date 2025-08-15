import { useState } from 'react';

interface TeamsByUniversity {
    [key: string]: string[];
}

export default function FinalistsSection() {
    const [activeTab, setActiveTab] = useState<string>('all');

    // Complete list of teams and universities
    const teams = [
        "CS_Cyntax\tInformatics Institute of Technology | IIT Campus",
        "CS_AlgoRebels\tNORTHERN UNI",
        "CS_BIJON\tNORTHERN UNI",
        "CS_Byte_Me\tNORTHERN UNI",
        "CS_Code_X\tNORTHERN UNI",
        "CS_CodeTrident\tNORTHERN UNI",
        "CS_HelloWorld\tNORTHERN UNI",
        "CS_NorthKnight\tNORTHERN UNI",
        "CS_RootCode\tRajarata University of Sri Lanka",
        "CS_Spark\tSouth Eastern University of Sri Lanka",
        "CS_A2S\tSri Lanka Institute of Information Technology",
        "CS_GhostSabee\tSri Lanka Institute of Information Technology",
        "CS_Team_Glory\tSri Lanka Institute of Information Technology",
        "CS_3Coders\tUniversity of Jaffna",
        "CS_Bench_coders\tUniversity of Jaffna",
        "CS_BinaryBeast\tUniversity of Jaffna",
        "CS_BitBusters\tUniversity of Jaffna",
        "CS_blackDragon\tUniversity of Jaffna",
        "CS_braindrain\tUniversity of Jaffna",
        "CS_Bravo\tUniversity of Jaffna",
        "CS_CDCommandos\tUniversity of Jaffna",
        "CS_cipherSquad\tUniversity of Jaffna",
        "CS_Code_Gems\tUniversity of Jaffna",
        "CS_Code_Mazer\tUniversity of Jaffna",
        "CS_Code404\tUniversity of Jaffna",
        "CS_CodeCrafters\tUniversity of Jaffna",
        "CS_Codenix4\tUniversity of Jaffna",
        "CS_CodeRangers\tUniversity of Jaffna",
        "CS_CrypticCoders\tUniversity of Jaffna",
        "CS_DataDynamites\tUniversity of Jaffna",
        "CS_Intellectuals\tUniversity of Jaffna",
        "CS_KD\tUniversity of Jaffna",
        "CS_LogicLegion\tUniversity of Jaffna",
        "CS_Lucifer\tUniversity of Jaffna",
        "CS_NeoNS\tUniversity of Jaffna",
        "CS_NullPointer\tUniversity of Jaffna",
        "CS_Pixora\tUniversity of Jaffna",
        "CS_SyntaX\tUniversity of Jaffna",
        "CS_TeamX\tUniversity of Jaffna",
        "CS_Vertex\tUniversity of Jaffna",
        "CS_TD\tUniversity of Jaffna",
        "CS_RePeaTers\tUniversity of Kelaniya",
        "CS_0xHack\tUniversity of Moratuwa",
        "CS_BreakTheRules\tUniversity of Moratuwa",
        "CS_Byte_Knights\tUniversity of Moratuwa",
        "CS_ByteForce\tUniversity of Moratuwa",
        "CS_CodeJar\tUniversity of Moratuwa",
        "CS_CodexMachina\tUniversity of Moratuwa",
        "CS_DualDudes\tUniversity of Moratuwa",
        "CS_ErrorCoders\tUniversity of Moratuwa",
        "CS_Jam_Bun\tUniversity of Moratuwa",
        "CS_KeMora\tUniversity of Moratuwa",
        "CS_NVIDIA_404\tUniversity of Moratuwa",
        "CS_RuntimeTerror\tUniversity of Moratuwa",
        "CS_StrawHats\tUniversity of Moratuwa",
        "CS_Team_Y2K\tUniversity of Moratuwa",
        "CS_TeamBits\tUniversity of Moratuwa",
        "CS_TeamStack\tUniversity of Moratuwa",
        "CS_TechNova\tUniversity of Moratuwa",
        "CS_Tsc\tUniversity of Moratuwa",
        "CS_AlgoAvengers\tUniversity of Peradeniya",
        "CS_Batz\tUniversity of Peradeniya",
        "Cs_binarybrains\tUniversity of Peradeniya",
        "Cs_Byte_force\tUniversity of Peradeniya",
        "CS_hackophiles\tUniversity of Peradeniya",
        "CS_Nasakarar\tUniversity of Peradeniya",
        "CS_nutcrackers\tUniversity of Peradeniya",
        "CS_ToxicCoders\tUniversity of Peradeniya",
        "CS_vizhaiyor\tUniversity of Peradeniya",
        "CS_NeuroNinja\tUniversity of Ruhuna",
        "CS_SoloDev\tUniversity of Ruhuna",
        "CS_DOT\tUniversity of Vavuniya",
        "CS_Error_found\tUniversity of Vavuniya",
        "CS_Horcrux\tUniversity of Vavuniya"
    ];

    // Group teams by university with proper typing
    const teamsByUniversity: TeamsByUniversity = teams.reduce((acc: TeamsByUniversity, team) => {
        const [teamName, university] = team.split('\t');
        if (!acc[university]) acc[university] = [];
        acc[university].push(teamName);
        return acc;
    }, {});

    const universities = Object.keys(teamsByUniversity);

    return (
        <section id="finalists" className="py-12 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="font-varino text-2xl lg:text-4xl text-center font-bold bg-gradient-to-b from-[#18ccfc] via-[#6344f5] to-[#ae48ff] bg-clip-text text-transparent mb-16 uppercase tracking-widest ">
                    Finalists
                </h2>

                {/* University Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-full ${activeTab === 'all' ?
                            'bg-[#6344f5] text-white' : 'bg-gray-800 text-gray-300'}`}
                    >
                        All Universities
                    </button>
                    {universities.map(uni => (
                        <button
                            key={uni}
                            onClick={() => setActiveTab(uni)}
                            className={`px-4 py-2 rounded-full text-sm ${activeTab === uni ?
                                'bg-[#ae48ff] text-white' : 'bg-gray-800 text-gray-300'}`}
                        >
                            {uni.replace('| IIT Campus', '')}
                        </button>
                    ))}
                </div>

                {/* University Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {universities
                        .filter(uni => activeTab === 'all' || activeTab === uni)
                        .map(university => (
                            <div
                                key={university}
                                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#6344f5] transition-all"
                            >
                                <div className="p-4 bg-gradient-to-r from-[#3a1d8c] to-[#6e2ac2]">
                                    <h3 className="font-bold text-white">
                                        {university.replace('| IIT Campus', '')}
                                        <span className="ml-2 bg-[#18ccfc] text-xs text-black px-2 py-1 rounded-full">
                                            {teamsByUniversity[university].length}
                                        </span>
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-2">
                                        {teamsByUniversity[university].map(team => (
                                            <li key={team} className="flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-[#18ccfc] mr-2"></span>
                                                <span className="text-gray-300 font-mono">{team.replace('CS_', '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}