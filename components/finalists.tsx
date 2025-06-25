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
      <div className="mt-5 space-y-5 text-center text-white">
        <h1 className="mt-5 font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
          The Finalists
        </h1>
        <h3 className="pt-5 text-base lg:text-xl font-normal">
          Congratulations! for the selected teams for the final round of
          UoJCoders v3.0
        </h3>
        <p className="text-base lg:text-xl font-normal">
          Selected teams, please check your emails for further details.
        </p>
      </div>
      <div className="w-10/12 lg:w-1/2 mx-auto mt-10 overflow-y-hidden">
        <Table className="overflow-y-hidden">
          <TableCaption>
            The list is ordered according to the alphabetical order of the
            University names and team names.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Team Name</TableHead>
              <TableHead>
                University/ Institute/Organization affiliated
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
            {teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team.teamName}</TableCell>
                <TableCell>{team.university}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const teams = [
  { teamName: "Byte_Me", university: "Northern Uni" },
  {
    teamName: "Team Glory",
    university: "Sri Lanka Institute of Information Technology",
  },
  { teamName: "Byte Blenders", university: "University of Jaffna" },
  { teamName: "Code Gems", university: "University of Jaffna" },
  { teamName: "Data Dynamites", university: "University of Jaffna" },
  { teamName: "DevDynasty", university: "University of Jaffna" },
  { teamName: "Phantoms_SL", university: "University of Jaffna" },
  { teamName: "Tech Titan", university: "University of Jaffna" },
  { teamName: "Three Idiots", university: "University of Jaffna" },
  { teamName: "RePeaTers", university: "University of Kelaniya" },
  { teamName: "AlgoWave", university: "University of Moratuwa" },
  { teamName: "ByteCoders", university: "University of Moratuwa" },
  { teamName: "Estupidos", university: "University of Moratuwa" },
  { teamName: "Mediocre", university: "University of Moratuwa" },
  { teamName: "Nexus Coding", university: "University of Moratuwa" },
  { teamName: "Odyssey", university: "University of Moratuwa" },
  { teamName: "uchihas", university: "University of Moratuwa" },
  { teamName: "Binary brains", university: "University of Peradeniya" },
  { teamName: "CodeAmigos", university: "University of Peradeniya" },
  { teamName: "Croods", university: "University of Peradeniya" },
  { teamName: "MetaCoders", university: "University of Ruhuna" },
  { teamName: "VibeSpark", university: "University of Sri Jayewardenepura" },
];
