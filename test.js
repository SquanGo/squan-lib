import SquanLib from './squanlib.js';

const squanlib = new SquanLib();

// let PBLFaces = {
//         "-":  {hex: "A1B2C3D45E6F7G8H", angle: ""},
//         "Adj":{hex: "A1B2C4D36E5F7G8H", angle: "FR"},
//         "Al": {hex: "B1D2C3A45H6F7E8G", angle: "F"},
//         "Ar": {hex: "D1B2A3C45F6H7G8E", angle: "F"},
//         "Ba": {hex: "A1C4B2D36E7G5F8H", angle: "F"},
//         "Bm": {hex: "A2C4B3D18E6G5F7H", angle: "F"},
//         "Cl": {hex: "A3C2B4D18E5G7F6H", angle: "F"},
//         "Cr": {hex: "A4C2B1D36E8G7F5H", angle: "F"},
//         "Da": {hex: "A1C3B4D27E5G6F8H", angle: "F"},
//         "Dm": {hex: "A4C1B3D27E6G8F5H", angle: "F"},
//         "E":  {hex: "B1A2D3C45F6E7H8G", angle: "LR"},
//         "F":  {hex: "A3C2B1D45E8G7F6H", angle: "F"},
//         "Gal":{hex: "A3C4B2D18E7G5F6H", angle: "F"},
//         "Gol":{hex: "A3C1B4D27E5G8F6H", angle: "F"},
//         "Gor":{hex: "A4C3B1D27E8G6F5H", angle: "F"},
//         "Gar":{hex: "A2C4B1D36E8G5F7H", angle: "F"},
//         "H":  {hex: "A3B4C1D27E8F5G6H", angle: ""},
//         "Ja": {hex: "A1C3B2D45E7G6F8H", angle: "F"},
//         "Jm": {hex: "A2C1B3D45E6G8F7H", angle: "F"},
//         "Ka": {hex: "A4C3B2D18E7G6F5H", angle: "F"},
//         "Km": {hex: "A2C1B4D36E5G8F7H", angle: "F"},
//         "M":  {hex: "A3C4B1D27E8G5F6H", angle: "F"},
//         "Na": {hex: "D4C3B2A18H7G6F5E", angle: ""},
//         "Nm": {hex: "D2C1B4A36H5G8F7E", angle: ""},
//         "Ol": {hex: "A2B3C4D18E5F6G7H", angle: ""},
//         "Or": {hex: "A4B1C2D36E7F8G5H", angle: ""},
//         "Opp":{hex: "A1B4C3D27E6F5G8H", angle: "LR"},
//         "Pl": {hex: "A3C1B2D45E7G8F6H", angle: "F"},
//         "Pr": {hex: "A2C3B1D45E8G6F7H", angle: "F"},
//         "pJ": {hex: "A1C2B3D45E6G7F8H", angle: "F"},
//         "pN": {hex: "A1D2C3B45G6F7E8H", angle: "FR"},
//         "Q":  {hex: "D1C4B3A27H6G5F8E", angle: ""},
//         "Rl": {hex: "A4C2B3D18E6G7F5H", angle: "F"},
//         "Rr": {hex: "A1C2B4D36E5G7F8H", angle: "F"},
//         "Sa": {hex: "D4C2B3A18H6G7F5E", angle: "F"},
//         "Sm": {hex: "D1C2B4A36H5G7F8E", angle: "F"},
//         "T":  {hex: "A1C4B3D27E6G5F8H", angle: "F"},
//         "Ul": {hex: "A2B3C1D45E8F6G7H", angle: "F"},
//         "Ur": {hex: "A3B1C2D45E7F8G6H", angle: "F"},
//         "V":  {hex: "C2B1A3D45E6H8G7F", angle: "FR"},
//         "W":  {hex: "A4B3C1D27E8F6G5H", angle: "FR"},
//         "X":  {hex: "D3C2B1A45H8G7F6E", angle: ""},
//         "Y":  {hex: "A2D1C3B45G6F8E7H", angle: "FR"},
//         "Z":  {hex: "A2B1C4D36E5F8G7H", angle: "FR"}
//     }

// let result = {};
// let transition = {
//     "A": "CC",
//     "1": "3",
//     "B": "DD",
//     "2": "4",
//     "C": "AA",
//     "3": "1",
//     "D": "BB",
//     "4": "2",
//     "E": "EE",
//     "F": "FF",
//     "G": "GG",
//     "H": "HH"
// }

// for (let i in PBLFaces) {
//     const hex = PBLFaces[i].hex;
//     result[i] = {
//         hex: squanlib.moveCube([...hex].map(char => transition[char] ?? char).join(''), 6, 0),
//         angle: PBLFaces[i].angle
//     }
// }

// console.log(JSON.stringify(result, null, 4));

let alg = "10/u M t' M F' t -10";

console.log(squanlib.isSpecificPBL(
    squanlib.invertScramble(alg),
    {face: "Q", angle: ""},
    {face: "Q", angle: ""}
))
