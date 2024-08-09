document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'May 2024- Aug 2024',
        title: 'SysAdmin | PACCAR',
        description: 'Responsible for monitoring network performance and assess network infrastructure components. Administer user access permissions, ensuring compliance with security best practice, and implementing automation tools and scripts to enhance efficiency and streamline repetitive tasks'
    },
    {
        date: 'December 2023- May 2024',
        title: 'College Innovation Specialist | Renton Technical College',
        description: 'Responsible for exploring and recognizing emerging trends and technologies in the field of education. Collaborating closely with faculty, administrators, and various stakeholders to comprehend their needs and address challenges.'
    },
  {
        date: 'Oct 2022- Jul 2023',
        title: 'Technical Support Analyst | Renton Technical College',
        description: 'Responsible for providing technical assistance and support to end-users and customers. Played a crucial role in ensuring that technology systems and applications are running smoothly, addressing issues, and helping users navigate technical challenges'
    },
    {
        date: 'Apr 2021 - Dec 2023',
        title: 'Cloud Network Technology Teaching Assistant | Renton Technical College',
        description: 'Support instructors in the delivery of computer network courses, assist students with understanding course materials, and contribute to the overall success of the cloud network education program.'
    },
    {
        date: 'Apr 2021 - Dec 2023t',
        title: 'LAN/WAN Lab Techinician | Renton Technical College',
        description: 'Responsible for setting up, maintenance, and troubleshooting of Local Area Networks (LAN) and Wide Area Networks (WAN) within our laboratory environment.'
    },
    {
        date: 'Feb 2003 - Jun 2018',
        title: 'Global Media Relations Legal Advisor | Booking.com',
        description: 'Played a critical role in providing legal counsel on media-related matters for EU and APAC, ensuring compliance with relevant laws, and mitigating legal risks associated with our organization\'s media activities..'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
