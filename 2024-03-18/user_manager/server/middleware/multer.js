import multer from 'multer';
import { access, mkdir } from 'node:fs/promises'; // arba galima tiesiog import fs from 'node:fs/promises';



// next parodo ar praleisim ar ne, savo duomenu i sekanti etapa

// multer disk storage iniciavimas
const storage = multer.diskStorage({

    // nurodomymas kur bus saugomi failai
    destination: async (req, file, next) => {
    
        const fileDir = './uploads';

        try {
            // await access('./uploads'); pirm variantasa
            //tikrinam ar direktorija egzistuoja, jeigu ne, issaukiama klaida ir pereiname prie catch bloko
            console.log('nera klaidos')
           await access(fileDir)
           console.log(fileDir)
          }
          catch(error) {
            //vykdome veiksmus ivykus klaidai
            console.log('klaida', error)
            // mkdir('./uploads') pirm variantas
            // sukuriama direktorija, jeigu si neegzistuoja
            await mkdir(fileDir)
    
          }
        next(null, './uploads');

        await access('./uploads');
    
    }, 
        filename: (req, file, next) => {
            // console.log(files.originalname.split('.'[1]));
            console.log(file.originalname);
            // iskaidom orginalaus failo pavadinima i masyva pagal tasko simboli
            const fileSplit = file.originalname.split('.');
            // pasiimame paskutini elementa is masyvo
            const format = fileSplit[fileSplit.length - 1];
            console.log(format);
            // generuojamas unikalus failo pavadinimas siekiant isvengti failu perrasymo
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