// This file defines the TypeScript type for a Bowler object, which includes various properties related to a bowler's personal information and team affiliation.

export type Bowler = {
    bowlerFirstName: string;
    bowlerMiddleInit: string | null;
    bowlerLastName: string;
    teamName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
}