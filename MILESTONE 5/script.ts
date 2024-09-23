
const btn = document.getElementById('resume-builder') as HTMLFormElement; // html form
const div1 = document.getElementById('genereted-resume') as HTMLDivElement; // upcoming resume
const resumeUniqueURL = document.getElementById('shareable-link') as HTMLAnchorElement; // share-able link
const resumeUniqueURL_Container = document.getElementById('shareable-Link-Container') as HTMLDivElement; // share-able link
const EditResumeButton = document.getElementById('edit-me') as HTMLButtonElement; // Edit button
const PdfBtn = document.getElementById('save-as-Pdf-button') as HTMLButtonElement;// save pdf button
const ImageInput = document.getElementById('User-Profile-pic') as HTMLInputElement;
// PDF BUTTON FUNCTIONALITY;
PdfBtn.addEventListener('click', () => {
    if (btn && div1) {
        const head = document.querySelector('.head') as HTMLDivElement;
        head.style.display = 'none';
        btn.style.display = 'none';
        resumeUniqueURL_Container.style.display = 'none';
        EditResumeButton.style.display = 'none';

        window.print();
    }

});


EditResumeButton.addEventListener('click', () => {
    if (btn) {
        btn.style.display = 'flex';
    }
})
btn?.addEventListener('submit', (event: Event) => {
    if (div1) {
        EditResumeButton.style.display = 'block';
        resumeUniqueURL_Container.style.display = 'flex';
        event.preventDefault();
        //form visiblity hidden
        btn.style.display = 'none'
        // persnol information input selections
        const UserName = (document.getElementById('Username') as HTMLInputElement).value
        const name1 = (document.getElementById('name') as HTMLInputElement).value;
        const web1 = (document.getElementById('web') as HTMLInputElement).value;
        const feild1 = (document.getElementById('Feild') as HTMLInputElement).value;
        const Email1 = (document.getElementById('Email') as HTMLInputElement).value;
        const Adress1 = (document.getElementById('Adress') as HTMLInputElement).value;
        const PhoneNumber1 = (document.getElementById('PhoneNumber') as HTMLInputElement).value;
        // Education information selection
        const Degree1 = (document.getElementById('Degree') as HTMLInputElement).value;
        const Institution1 = (document.getElementById('Institution') as HTMLInputElement).value;
        const Year1 = (document.getElementById('Year') as HTMLInputElement).value;
        //  education part 2
        const Degree2 = (document.getElementById('Degree-2') as HTMLInputElement).value;
        const Institution2 = (document.getElementById('Institution-2') as HTMLInputElement).value;
        const Year2 = (document.getElementById('Year-2') as HTMLInputElement).value;
        //skills
        const skill1 = (document.getElementById('skill-1') as HTMLInputElement).value;
        const skill2 = (document.getElementById('skill-2') as HTMLInputElement).value;
        const skill3 = (document.getElementById('skill-3') as HTMLInputElement).value;
        const skill4 = (document.getElementById('skill-4') as HTMLInputElement).value;
        const skill5 = (document.getElementById('skill-5') as HTMLInputElement).value;
        //Language-section
        const lang1 = (document.getElementById('language-1') as HTMLInputElement).value
        const lang2 = (document.getElementById('language-2') as HTMLInputElement).value
        //Hobbies-Section
        const hobby1 = (document.getElementById('hobby-1') as HTMLInputElement).value
        const hobby2 = (document.getElementById('hobby-2') as HTMLInputElement).value
        const hobby3 = (document.getElementById('hobby-3') as HTMLInputElement).value
        const hobby4 = (document.getElementById('hobby-4') as HTMLInputElement).value
        const hobby5 = (document.getElementById('hobby-5') as HTMLInputElement).value
        //about info
        const aboutinfo = (document.getElementById('about-area') as HTMLInputElement).value
        //about info
        const experience = (document.getElementById('experience-area') as HTMLInputElement).value
        const portfolioLinks1 = (document.getElementById('portfolio-link-1') as HTMLInputElement).value
        const portfolioLinks2 = (document.getElementById('portfolio-link-2') as HTMLInputElement).value


        // resume builder
        const divInnerHtml = `
        <div class="resume_container">
        <div class="upper-part">
            <div class="circle">
                
           <div class="image">
           <img src="" alt="profile Picture" id="profile-image-display">
           </div>
            
            </div>
            <div class="rectangle-head">
                <span class="name" contenteditable="true"> ${name1}</span>
                <span class="feild" contenteditable="true">${feild1} </span>
            </div>
        </div>
        <div class="lest-right-box-wrapper">
            <div class="left">
                <div class="persnol-information-section">
                    <div class="persnol-information-boxes" id="email" contenteditable="true"><i class="fa fa-envelope"
                            style="font-size:10px"></i>${Email1}
                    </div>
                    <div class="persnol-information-boxes" id="number" contenteditable="true"><i class="fa-solid fa-phone"></i>${PhoneNumber1}
                    </div>
                    <div class="persnol-information-boxes" id="adress" contenteditable="true"><i class="fa-solid fa-location-dot"></i>${Adress1}</div>
                    <div class="persnol-information-boxes" id="wesite" contenteditable="true"><i class="fa-solid fa-globe"></i>${web1}</div>
                </div>
                <div class="education-section">
                    <span class="eduacation-heading">EDUCATION</span>
                    <hr>
                    <div id="education-part-1" class="education-parts">
                        <div class="degree-name" contenteditable="true">${Degree1}</div>
                        <div class="degree-institution" contenteditable="true">${Institution1}</div>
                        <div class="degree-year" contenteditable="true">${Year1}</div>
                    </div>
                    <div class="education-parts" id="education-part-2">
                        <div class="degree-name" contenteditable="true">${Degree2}</div>
                        <div class="degree-institution" contenteditable="true">${Institution2}</div>
                        <div class="degree-year" contenteditable="true">${Year2}</div>
                    </div>
                </div>
                <div class="skills-section" id="skills-sectionID">
                    <span class="skills-heading">SKILLS</span>
                    <hr>
                    <div class="skills-parts">
                        <ul class="skills-name">
                            <li contenteditable="true">${skill1}</li>
                            <li contenteditable="true">${skill2}</li>
                            <li contenteditable="true">${skill3}</li>
                            <li contenteditable="true">${skill4}</li>
                            <li contenteditable="true">${skill5}</li>
                        </ul>
                    </div>
                </div>
                <div class="language-section">
                    <span class="language-heading"> LANGUAGE</span>
                    <hr>
                    <div class="language-parts">
                        <ul class="language-names">
                            <li contenteditable="true">${lang1}</li>
                            <li contenteditable="true">${lang2}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="about-me-section">
                    <span class="about-me-heading">About Me</span>
                    <hr>
                    <div class="about-me-information" contenteditable="true">${aboutinfo}</div>
                </div>
                <div class="Hobbies-section">
                    <span class="Hobbies-heading">Hobbies</span>
                    <hr>
                    <ul class="Hobbies-list">
                        <li contenteditable="true">${hobby1}</li>
                        <li contenteditable="true">${hobby2}</li>
                        <li contenteditable="true">${hobby3}</li>
                        <li contenteditable="true">${hobby4}</li>
                        <li contenteditable="true">${hobby5}</li>
                    </ul>
                </div>
                <div class="Experience-section">
                    <span class="Experience-heading">Experience</span>
                    <hr>
                    <div class="Experience-information" contenteditable="true">${experience}
                        <br> linkedin: <a href="" contenteditable="true">${portfolioLinks1}</a> <br>
                        Instagram: <a href="" contenteditable="true">${portfolioLinks2}</a>
                    </div>
                </div>
               
            </div>

        </div>
       </div>`;

        div1.innerHTML = divInnerHtml;

        // making share able Link
        const uniqueID = (Math.random() * 1000000000).toString(36);
        const userURL = `${window.location.origin}/resume/${UserName}-${uniqueID}`;
        //
        resumeUniqueURL.innerHTML = userURL;


    }


    // ADDING IMAGE
    const file = ImageInput.files?.[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            const image = document.getElementById('profile-image-display') as HTMLImageElement;
            image.src = e.target?.result as string;

        }
        fileReader.readAsDataURL(file);
    };

});



