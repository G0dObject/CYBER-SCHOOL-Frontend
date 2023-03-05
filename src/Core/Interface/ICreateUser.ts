import { Directions } from "../Enum/DirectionsEnum";
import { Education } from "../Enum/EducationEnum";
import { Region } from "../Enum/RegionEmum";

export interface ICreateUser{
    Email:string,
    FirstName: string,
    LastName: string,
    SurName: string,
    DayOfBirth: string,
    City: string,
    Direction: Directions,
    Adress: string,
    Education: Education,
    Maried: boolean,
    HaveChild: boolean,
    DesiredRegion: Region
}