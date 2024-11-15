import multer from 'multer';
import { access, mkdir } from 'node:fs/promises'; // arba galima tiesiog import fs from 'node:fs/promises';


// multer disk storage
// next parodo ar praleisim ar ne, savo duomenu i sekanti etapa
const storage = multer.diskStorage({

    destination: async (req, file, next) => {
    const fileDir = './uploads';
          // nurodymas direktorijos pavadinimas kur bus saugomi failai

          try {
            // await access('./uploads'); pirm variantasa
            console.log('nera klaidos')
           await access(fileDir)
           console.log(fileDir)
  

          }
          catch(error) {
            console.log('klaida', error)
            // mkdir('./uploads') pirm variantas
    
            await mkdir(fileDir)
    
          }
        next(null, './uploads');

        await access('./uploads');
    
    }, 
        filename: (req, file, next) => {
            // console.log(files.originalname.split('.'[1]));
            console.log(file.originalname);
            const fileSplit = file.originalname.split('.');
            const format = fileSplit[fileSplit.length - 1];
            console.log(format);

            const uniqueSuffix = Date.now() + '_' + Math.random(Math.random() * 1E9);
            // failo pavadinimo perdavimas
            next(null, uniqueSuffix + '.' + format);
        }
    
});

//multerio modilio iniciavimas
const upload = multer({
    //Direktorijos nustatymas kur bus talpinami failai
    storage: storage,
    fileFilter: (req, file, next) => {
        const formats = [
            'image/jpeg',
            'image/png',
            'image/svg+xml'
        ];
        console.log(formats);

        if(formats.includes(file.mimetype)) {
            next(null, true);
        } else {
            next(null, false);
        }
    },
    limits: {
        fileSize: 500000
    }
});

export default upload;