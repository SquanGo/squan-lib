import SquanLib from './squanlib.js';

const squanlib = new SquanLib();

let alg = "10/u M t' M F' t -10";

console.log(squanlib.isSpecificPBL(
    squanlib.invertScramble(alg),
    {face: "Q", angle: ""},
    {face: "Q", angle: ""}
))

