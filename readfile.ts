import fs from 'fs'
import readline from 'readline'

export async function forEachJsonLine(path: string, cb: (x: any) => void) {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });


  for await (const line of rl) {
    cb(JSON.parse(line))
  }
}
