import * as fs from 'node:fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        //read a file first.
      let files = await fs.promises.readdir("contactdata")
     

      await fs.promises.writeFile(`contactdata/${files.length+1}.json`,JSON.stringify(req.body))


      res.status(200).json("Post ho la yo.") 

    } else {
        res.status(200).json("normal,get ho la yo...Progress hudai cha-api khayidai cha.harry bhaii is good.") 
    }
  }