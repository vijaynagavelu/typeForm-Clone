
var fonts = {
    Roboto: {
        normal: '../../fonts/DejaVuSans.ttf',
        bold: '../../fonts/DejaVuSans-Bold.ttf',
        italics: '../../fonts/DejaVuSans-Oblique.ttf',
        bolditalics: '../../fonts/DejaVuSans-BoldOblique.ttf'
    }
}

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var docDefinition = {
    content: [
        {
            text: 'Hai Mark',
            style: 'header'
        },
        {
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small']
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        }
    }

}

var options = {};

// create invoice and save it to invoices_pdf folder 
var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('Orginal' + '.pdf'));
pdfDoc.end();



// export function generatePDF(data) {

//     //new code added
//     return new Promise((resolve, reject) => {
//         var pdfDoc = printer.createPdfKitDocument(docDefinition, options);

//         console.log("buffer:", pdfDoc);

//         // Buffer to store the PDF content
//         const chunks = [];

//         pdfDoc.on('data', (chunk) => {
//             chunks.push(chunk);
//         });

//         pdfDoc.on('end', () => {
//             const pdfBuffer = Buffer.concat(chunks);
//             resolve(pdfBuffer);
//         });

//         pdfDoc.on('error', (error) => {
//             reject(error);
//         });
//         pdfDoc.end();
//     });
// }


console.log("suf:");

// json with invoice layout

// var docDefinition = {
//     content: [
//         { text: 'EFFIZIENT', 'alignment': 'right', fontSize: 20, bold: true, margin: [0, 40, 20, 0] },
//         { text: 'Hi Vijay N,', fontSize: 12, margin: [0, 100, 0, 0] },
//         { text: 'Thanks for using our free SOP drafting service! Your SOP is attached below.', fontSize: 12, margin: [0, 10, 0, 5] },
//         { text: 'If you would like further help as follows:', fontSize: 12, bold: true, margin: [0, 10, 0, 0] },
//         {
//             ul: [
//                 { text: ['Get a complete statement of purpose framed/reviewed by our experts - Buy it here:', { text: 'https://effizient-immigration-inc.square.site/product/sop/9?cp=true&sa=true&sbp=false&q=false', link: ' https://effizient-immigration-inc.square.site/product/sop/9?cp=true&sa=true&sbp=false&q=false', color: 'blue' }] },
//                 'Get your visa application reviewed before submission to IRCC',
//             ],
//             fontSize: 12,
//         },
//         { text: 'Feel free to contact us!', fontSize: 12, margin: [0, 20, 0, 0] },
//         '226-774-9168',
//         'info@effizient.ca',
//         { text: [{ text: 'www.effizieint.ca', link: 'www.effizieint.ca', color: 'blue' }], link: 'http://www.effizieint.ca', fontSize: 12, decoration: 'underline', margin: [0, 10, 0, 0] },
//         { text: 'We will get you going with your visa application in no time. This will all be remote, which means you won’t have any hassle at all!', fontSize: 12, margin: [0, 10, 0, 0] },
//         { text: 'Best Regards,', fontSize: 12, margin: [0, 20, 0, 0] },
//         { text: 'Team Effizient', fontSize: 12, pageBreak: 'after' },


//         //next page
//         {
//             text: 'From\nVijay N\n(Address)\nvijaynaga.0503@gmail.com',
//             alignment: 'left',
//         },
//         {
//             text: 'To\nVisa Officer\nHigh Commission of Canada\nSubject: Statement of Purpose for studying in Canada',
//             alignment: 'left', margin: [0, 20, 0, 0]
//         },
//         {
//             text: 'Dear Sir/Madam,',
//             alignment: 'left',
//             margin: [0, 20, 0, 0], // Add top margin
//         },
//         {
//             text: 'I would like to take this opportunity to introduce myself as Vijay N, a passionate individual with a strong desire to pursue a career as a Frontend Developer. I have recently completed my Bachelors Degree in Engineering from Rajalakshmi Engineering College in India, and I am now seeking to further enhance my skills and knowledge in this field through a program of study in Canada.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'After careful consideration of my alternatives, I have chosen to pursue a program in Frontend Development at a reputable educational institution in Canada. The interdisciplinary nature of this program is particularly appealing to me, as it will provide me with a comprehensive and practical understanding of all major concepts in frontend development and related subjects. I believe that this program will equip me with the necessary skills and knowledge to excel in my future career as a Frontend Developer.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'Studying and working with highly experienced and skilled faculties, along with the prominent facilities provided by the educational institution, will undoubtedly support me in my academic pursuit. I am confident that the program\'s curriculum and hands-on learning opportunities will enable me to develop a strong foundation in frontend development and stay updated with the latest industry trends and technologies.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'In terms of my academic background, my Bachelors Degree in Engineering has provided me with a solid foundation in computer science and programming. I have also obtained an impressive IELTS score of 9 in listening, 9 in reading, 9 in writing, and 8 in speaking, demonstrating my proficiency in the English language. These academic achievements, combined with my passion for frontend development, make me a suitable candidate for the program of study in Canada.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'Canada has always been my first choice for pursuing my studies due to its excellent education system, which is ranked among the best in the world. Additionally, Canada is known for its safe and peaceful environment, as well as its superb healthcare facilities. I believe that studying in Canada will provide me with a dynamic, innovative, and challenging environment in which I can develop my skills and nurture my true potential. A Canadian qualification will serve as a strong foundation for my career and future growth.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },

//         //nextpage

//         {
//             text: 'Furthermore, studying in Canada will expose me to a diverse community of talented students from around the world, allowing me to learn about different cultures and perspectives. This exposure will not only enhance my communication skills but also broaden my horizons and prepare me to work in a globalized world.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'Upon completion of my program of study in Canada, my goal is to return to my home country, India, and contribute to the growing demand for skilled Frontend Developers. The IT industry in India is experiencing rapid growth, and there is a need for professionals with expertise in frontend development. I am confident that the knowledge and skills I acquire in Canada will enable me to make a significant contribution to this industry and help drive its future growth.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'In terms of finances, I have sufficient funds to support my education in Canada. My family is supporting my education, and I have paid the first year\'s tuition fees in full. I am financially prepared to cover my living expenses during my stay in Canada.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'Dear Madam/Sir, if granted the opportunity to study in Canada, I assure you that I will abide by all the rules and regulations of the Canadian government, the local authorities, and the educational institution. I am confident that my academic background, language proficiency, and passion for frontend development make me a suitable candidate for a study visa in Canada.',
//             alignment: 'left',
//             margin: [0, 20, 0, 0], // Add top margin
//         },
//         {
//             text: 'I kindly request you to process my visa application as soon as possible, and I am grateful for your valuable time and consideration.',
//             alignment: 'left',
//             margin: [0, 15, 0, 0], // Add top margin
//         },
//         {
//             text: 'Sincerely,\n\nVijay N',
//             alignment: 'left',
//             margin: [0, 30, 0, 0], // Add top margin
//         }






//     ],
//     styles: {
//         header: {
//             bold: true,
//             fontSize: 15
//         }
//     },
//     defaultStyle: {
//         fontSize: 12
//     }
// }