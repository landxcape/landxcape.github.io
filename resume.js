function resumeJson() {
    var jsonData = {
        name: 'Purna Kalyan Shakya',
        location: {
            permanent: 'Narayangadh, Chitwan, Nepal',
            temporaty: 'Kathmandu, Bagmati, Nepal',
        },
        contact: {
            gmail: 'landxcape09@gmail.com',
            linkedin: 'linkedin.com/in/purnashakya',
            github: 'github.com/landxcape',
        },
        summary: [
            'Electronics and Communication Engineer',
            'Programmer',
        ],
        experience: [{
            title: 'Programmer',
            organization: 'Engineering Solutions for Nepal Pvt. Ltd.',
            duration: 'Jun 2019 - Jan 2021 (1 year 8 months)',
        }],
        education: [{
            university: 'Pokhara University',
            college: 'Nepal Engineering College',
            degree: 'Bachelor of Electronics and Communication Engineering',
            year: '2014 - 2019',
        }],
        licensesAndCertifications: [{
            title: 'Electronics and Communication Engineer',
            issuingOrganization: 'Nepal Engineering Council',
        }],
        skills: {
            programming: {
                languages: ['Python', 'C', 'C++', 'Arduino',],
                tools: ['git', 'Django', 'Flutter', 'RaspberryPi',],
            }
        }
    };

    document.getElementById('resume').innerHTML = JSON.stringify(jsonData, undefined, 2);
}

document.addEventListener('DOMContentLoaded', () => resumeJson());