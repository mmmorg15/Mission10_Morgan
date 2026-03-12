import type { Bowler } from "./types/Bowler";
import { useEffect, useState } from "react";

function BowlerList() {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
        try {
        const response = await fetch("https://localhost:7173/bowling/getbowlers");
        const data = await response.json();
        setBowlers(data);
        } catch (error) {
        console.error("Failed to fetch bowlers:", error);
        }
    }; fetchBowlers();

    }, [])
    

    

    return (
        <>
        <h1>Bowler List</h1>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>Last Name</th>
                <th>Team Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {bowlers.map((bowler, index) => (
                <tr key={index}>
                <td>{bowler.bowlerFirstName}</td>
                <td>{bowler.bowlerMiddleInit}</td>
                <td>{bowler.bowlerLastName}</td>
                <td>{bowler.teamName}</td>
                <td>{bowler.bowlerAddress}</td>
                <td>{bowler.bowlerCity}</td>
                <td>{bowler.bowlerState}</td>
                <td>{bowler.bowlerZip}</td>
                <td>{bowler.bowlerPhoneNumber}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default BowlerList;
