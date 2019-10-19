#!/usr/bin/env node
import * as net from "net";

const HOST = "rps.vhenne.de";
const PORT = 6000;

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
        console.error(`data: ${chunk}`);
    }
});
