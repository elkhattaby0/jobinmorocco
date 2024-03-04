export const Region = [
    {id:1, 'name': 'Agadir'},
    {id:2, 'name': 'Béni Mellal-Khénifra'},
    {id:3, 'name': 'Casablanca-Mohammedia'},
    {id:4, 'name': 'Fes'},
    {id:5, 'name': 'Laayoune'},
    {id:6, 'name': 'Marrakech-Safi'},
    {id:7, 'name': 'Meknes'},
    {id:8, 'name': 'Oujda'},
    {id:9, 'name': 'Rabat-Sale-Kenitra'},
    {id:10, 'name': 'Settat'},
    {id:11, 'name': 'Tanger-Tetouan-Al Hoceima'},
    {id:12, 'name': 'Dakhla'},
    {id:13, 'name': 'Errachidia'},
    {id:14, 'name': 'Guelmim'},
];

export const Job = [
    {id:1, name: 'Commercial, sale '},
    {id:2, name: 'Management, accounting, finance'},
    {id:3, name: 'Computer science, new technologies'},
    {id:4, name: 'Legal '},
    {id:5, name: 'Management, general direction'},
    {id:6, name: 'Marketing, communication '},
    {id:7, name: 'Health and social professions'},
    {id:8, name: 'Service professions'},
    {id:9, name: 'Construction trades'},
    {id:10, name: 'Production, maintenance, quality'},
    {id:11, name: 'R&D, project management'},
    {id:12, name: 'HR, training'},
    {id:13, name: 'Secretariat, assistantship'},
    {id:14, name: 'Telemarketing, teleassistance'},
    {id:15, name: 'Tourism, hotels, restaurants '},
    {id:16, name: 'Transport, logistics '},
];

export const Educationallevels = [
    {id:1, name: 'Qualification before bac'},
    {id:2, name: 'Bac'},
    {id:3, name: 'Bac+1'},
    {id:4, name: 'Bac+2'},
    {id:5, name: 'Bac+3'},
    {id:6, name: 'Bac+4'},
    {id:7, name: 'Bac+5 and above'},
]

export const Experience = [
    {id:1, name: 'Student, recent graduate'},
    {id:2, name: 'Beginner < 2 years'},
    {id:3, name: 'Experience between 2 years and 5 years'},
    {id:4, name: 'Experience between 5 years and 10 years'},
    {id:5, name: 'Experience > 10 years'},
]

export const Contracttypes = [
    {id:1, name: 'CDI'},
    {id:2, name: 'CDD'},
    {id:3, name: 'Freelance'},
]

export const Languages = [
    {id:1, name: 'Arabic'},
    {id:2, name: 'English'},
    {id:3, name: 'French'},
]

export const SearchData = [ 
    { 
        key: 1, 
        title: 'Job', 
        data: Job, 
        isOpen: false
    }, 
    { 
        key: 2, 
        title: 'Activity area', 
        data: [], 
        isOpen: false
    }, 
    { 
        key: 3, 
        title: 'Educational levels', 
        data: Educationallevels, 
        isOpen: false
    }, 
    { 
        key: 4, 
        title: 'Experience Levels', 
        data: Experience, 
        isOpen: false
    },
    { 
        key: 5, 
        title: 'Contract types', 
        data: Contracttypes, 
        isOpen: false
    },
    { 
        key: 6, 
        title: 'Regions', 
        data: Region,  
        isOpen: false
    },
    { 
        key: 7, 
        title: 'LANGUAGES', 
        data: Languages,  
        isOpen: false
    },
]