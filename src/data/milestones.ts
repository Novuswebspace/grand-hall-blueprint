export interface Milestone {
  year: string;
  title: string;
  kannada: string;
  description: string;
  image?: string;
  category: 'foundation' | 'infrastructure' | 'recognition' | 'expansion' | 'digital' | 'achievement';
}

export const milestones: Milestone[] = [
  {
    year: "1952",
    title: "Foundation Establishment",
    kannada: "ಸ್ಥಾಪನೆ",
    description: "JSS Sangeetha Sabha was established with the vision of promoting Carnatic music in Karnataka",
    category: "foundation"
  },
  {
    year: "1958",
    title: "First Annual Conference",
    kannada: "ಮೊದಲ ವಾರ್ಷಿಕ ಸಮ್ಮೇಳನ",
    description: "Organized the inaugural annual music conference that became a cherished tradition",
    category: "foundation"
  },
  {
    year: "1962",
    title: "Youth Development Program",
    kannada: "ಯುವ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ",
    description: "Launched special programs to nurture young musical talents across Karnataka",
    category: "expansion"
  },
  {
    year: "1968",
    title: "Music Academy Partnership",
    kannada: "ಸಂಗೀತ ಅಕಾಡೆಮಿ ಸಹಯೋಗ",
    description: "Established partnerships with leading music academies for collaborative programs",
    category: "expansion"
  },
  {
    year: "1975",
    title: "State Recognition",
    kannada: "ರಾಜ್ಯ ಮಾನ್ಯತೆ",
    description: "Received official recognition from Karnataka State Government for cultural contributions",
    category: "recognition"
  },
  {
    year: "1980",
    title: "Grand Auditorium Inauguration",
    kannada: "ಮಹಾ ಸಭಾಗೃಹ ಉದ್ಘಾಟನೆ",
    description: "The magnificent main auditorium was inaugurated, providing a world-class venue for performances",
    category: "infrastructure"
  },
  {
    year: "1985",
    title: "International Artist Exchange",
    kannada: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಕಲಾವಿದರ ವಿನಿಮಯ",
    description: "Initiated international cultural exchange programs with musicians worldwide",
    category: "expansion"
  },
  {
    year: "1990",
    title: "Music Library Foundation",
    kannada: "ಸಂಗೀತ ಗ್ರಂಥಾಲಯ ಸ್ಥಾಪನೆ",
    description: "Established a comprehensive music library with rare recordings and manuscripts",
    category: "infrastructure"
  },
  {
    year: "1995",
    title: "Award Institution",
    kannada: "ಪುರಸ್ಕಾರ ಸ್ಥಾಪನೆ",
    description: "Instituted annual awards to recognize outstanding contributions to Carnatic music",
    category: "recognition"
  },
  {
    year: "1998",
    title: "Music Research Center",
    kannada: "ಸಂಗೀತ ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
    description: "Launched research initiatives to document and preserve traditional music forms",
    category: "achievement"
  },
  {
    year: "2000",
    title: "Digital Archive Initiative",
    kannada: "ಡಿಜಿಟಲ್ ಸಂಗ್ರಹಾಲಯ",
    description: "Pioneered digital preservation of classical music recordings and performances",
    category: "digital"
  },
  {
    year: "2005",
    title: "Education Outreach Program",
    kannada: "ಶಿಕ್ಷಣ ವಿಸ್ತರಣಾ ಕಾರ್ಯಕ್ರಮ",
    description: "Expanded educational programs to schools and colleges across South India",
    category: "expansion"
  },
  {
    year: "2008",
    title: "Modern Recording Studio",
    kannada: "ಆಧುನಿಕ ರೆಕಾರ್ಡಿಂಗ್ ಸ್ಟುಡಿಯೋ",
    description: "Established state-of-the-art recording facilities for artists and researchers",
    category: "infrastructure"
  },
  {
    year: "2012",
    title: "Diamond Jubilee Celebration",
    kannada: "ವಜ್ರ ಮಹೋತ್ಸವ",
    description: "Celebrated 60 years of service with grand festivities and special performances",
    category: "achievement"
  },
  {
    year: "2015",
    title: "Mobile App Launch",
    kannada: "ಮೊಬೈಲ್ ಆಪ್ ಪ್ರಾರಂಭ",
    description: "Launched mobile application for concert bookings and music learning",
    category: "digital"
  },
  {
    year: "2018",
    title: "Global Live Streaming",
    kannada: "ವಿಶ್ವವ್ಯಾಪಿ ಲೈವ್ ಸ್ಟ್ರೀಮಿಂಗ್",
    description: "Introduced live streaming of concerts to reach global Carnatic music enthusiasts",
    category: "digital"
  },
  {
    year: "2020",
    title: "Virtual Concert Platform",
    kannada: "ವರ್ಚುವಲ್ ಸಂಗೀತ ವೇದಿಕೆ",
    description: "Launched comprehensive virtual platform during pandemic, reaching audiences worldwide",
    category: "digital"
  }
];

export const getCategoryColor = (category: Milestone['category']): string => {
  // Use consistent red background for all badges (same as home page buttons)
  return 'bg-destructive';
};

export const getCategoryIcon = (category: Milestone['category']): string => {
  const icons = {
    foundation: '🏛️',
    infrastructure: '🏗️',
    recognition: '🏆',
    expansion: '🌟',
    digital: '💻',
    achievement: '🎉'
  };
  return icons[category];
};
