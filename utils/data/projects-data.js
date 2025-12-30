import clutch1Image from '../../app/assets/projects/Clutch_1.png';
import clutch2Image from '../../app/assets/projects/Clutch_2.png';
import clutch3Image from '../../app/assets/projects/Clutch_3.png';
import clutch4Image from '../../app/assets/projects/Clutch_4.png';
import tucheze1Image from '../../app/assets/projects/Tucheze_1.png';
import tucheze2Image from '../../app/assets/projects/Tucheze_2.png';
import tucheze3Image from '../../app/assets/projects/Tucheze_3.png';
import tucheze4Image from '../../app/assets/projects/Tucheze_4.png';
import padSplit1Image from '../../app/assets/projects/PadSplit_1.png';
import padSplit2Image from '../../app/assets/projects/PadSplit_2.png';
import padSplit3Image from '../../app/assets/projects/PadSplit_3.png';
import padSplit4Image from '../../app/assets/projects/PadSplit_4.png';
import padSplit5Image from '../../app/assets/projects/PadSplit_5.png';
import padSplit6Image from '../../app/assets/projects/PadSplit_6.png';
import framebazaar1Image from '../../app/assets/projects/Framebazaar_1.png';
import framebazaar2Image from '../../app/assets/projects/Framebazaar_2.png';
import framebazaar3Image from '../../app/assets/projects/Framebazaar_3.png';
import framebazaar4Image from '../../app/assets/projects/Framebazaar_4.png';
import framebazaar5Image from '../../app/assets/projects/Framebazaar_5.png';
import framebazaar6Image from '../../app/assets/projects/Framebazaar_6.png';
import framebazaar7Image from '../../app/assets/projects/Framebazaar_7.png';
import fgDealer1Image from '../../app/assets/projects/FGDealer_1.png';
import fgDealer2Image from '../../app/assets/projects/FGDealer_2.png';
import fgDealer3Image from '../../app/assets/projects/FGDealer_3.jpg';
import fgDealer4Image from '../../app/assets/projects/FGDealer_4.jpg';
import fgDealer5Image from '../../app/assets/projects/FGDealer_5.png';
import butterfly1Image from '../../app/assets/projects/Butterfly_1.png';
import butterfly2Image from '../../app/assets/projects/Butterfly_2.png';
import butterfly3Image from '../../app/assets/projects/Butterfly_3.png';
import butterfly4Image from '../../app/assets/projects/Butterfly_4.png';
import butterfly5Image from '../../app/assets/projects/Butterfly_5.png';
import berhadEms1Image from '../../app/assets/projects/BerhadEMS_1.png';
import berhadEms2Image from '../../app/assets/projects/BerhadEMS_2.png';
import berhadEms3Image from '../../app/assets/projects/BerhadEMS_3.png';
import berhadEms4Image from '../../app/assets/projects/BerhadEMS_4.png';
import berhadEms5Image from '../../app/assets/projects/BerhadEMS_5.png';
import fusion1Image from '../../app/assets/projects/Fusion_1.png';
import fusion2Image from '../../app/assets/projects/Fusion_2.png';
import fusion3Image from '../../app/assets/projects/Fusion_3.png';
import fusion4Image from '../../app/assets/projects/Fusion_4.png';
import fusion5Image from '../../app/assets/projects/Fusion_5.png';
import fusion6Image from '../../app/assets/projects/Fusion_6.png';
import fusion7Image from '../../app/assets/projects/Fusion_7.png';
import fusion8Image from '../../app/assets/projects/Fusion_8.png';
import fusion9Image from '../../app/assets/projects/Fusion_9.png';
import fusion10Image from '../../app/assets/projects/Fusion_10.png';

const fusionImages = [
    fusion1Image,
    fusion2Image,
    fusion3Image,
    fusion4Image,
    fusion5Image,
    fusion6Image,
    fusion7Image,
    fusion8Image,
    fusion9Image,
    fusion10Image,
]

const clutchImages = [
    clutch1Image,
    clutch2Image,
    clutch3Image,
    clutch4Image,
];

const tuchezeImages = [
    tucheze1Image,
    tucheze2Image,
    tucheze3Image,
    tucheze4Image,
];

const padsplitImages = [
    padSplit1Image,
    padSplit2Image,
    padSplit3Image,
    padSplit4Image,
    padSplit5Image,
    padSplit6Image,
];

const framebazaarImages = [
    framebazaar1Image,
    framebazaar2Image,
    framebazaar3Image,
    framebazaar4Image,
    framebazaar5Image,
    framebazaar6Image,
    framebazaar7Image,
];

const FgDealerImages = [
    fgDealer1Image,
    fgDealer2Image,
    fgDealer3Image,
    fgDealer4Image,
    fgDealer5Image,
]

const butterflyImages = [
    butterfly1Image,
    butterfly2Image,
    butterfly3Image,
    butterfly4Image,
    butterfly5Image,
];

const berhadEmsImages = [
    berhadEms1Image,
    berhadEms2Image,
    berhadEms3Image,
    berhadEms4Image,
    berhadEms5Image,
];

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Fusion App - Storage Sizing Solution',
        description: `
            Fusion is a sizing and configuration tool that helps engineers and sales teams 
            design the right storage setup for customers based on their data, workload, and 
            performance needs. It’s a NetApp internal tool that helps design, plan, and 
            validate storage solutions quickly and accurately based on customer needs. 
        `,
        tools: [
            'React JS', 'Redux', 'Redux Saga', 'Bootstrap', 'Node JS', 'Express JS', 'MongoDB', 
            'Mongoose', 'Redis', 'Kafka', 'Azure', 'Socket.io', 'Python', 'Styled Components', 
            'Storybook', 
        ],
        role: 'Senior Fullstack Developer',
        code: '',
        images: fusionImages,
        demo: 'https://fusion.netapp.com/',
    },
    {
        id: 2,
        name: 'Clutch.app - Casino gaming and betting platform',
        description: `
            Clutch.app is a Web3-centric gaming and betting platform that blends traditional casino games, 
            sports betting, and crypto trading into a single community-driven experience. Designed as more 
            than a typical crypto casino, it offers casino classics like slots, blackjack, and roulette 
            alongside poker rooms and multi-asset trading markets — all within a wallet-native, high-reward 
            ecosystem. The platform also includes features such as an XP-based loyalty system, custom slot 
            creation tools, and a creator fee model that enables users to launch and monetize their own games. 
            Clutch.app focuses on community engagement and transparent reward systems, creating a play-to-earn 
            environment where activity and loyalty unlock perks.
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React JS', 'Redux','Material UI', 
            'Pixi JS', 'Node JS', 'Express JS', 'PostgreSQL', 'Sequelize', 'Redis', 'Bull Queue', 
            'AWS RDS', 'AWS S3', 'AWS ECS', 'Socket.io', 'Docker', 'Kubernetes', 'JWT', 'SendGrid',
            'BetBy SportsBook Integration', 'Storybook', 
        ],
        role: 'Lead Fullstack Developer',
        code: '',
        images: clutchImages,
        demo: 'https://www.clutch.app/',
    },
    {
        id: 3,
        name: 'Tucheze - Real-Time iGaming Platform',
        description: `
            Tucheze is a real-time online gaming platform designed for the Kenyan market, 
            offering high-engagement cash games such as Mine Game and Crash Game. The platform enables users 
            to place real-money bets, interact with game mechanics in real time, and manage wallets securely. 
            The Mine Game challenges players to reveal safe tiles on a grid while avoiding hidden mines to 
            increase rewards, whereas the Crash Game allows users to cash out before a dynamically increasing 
            multiplier crashes. The system was built with a strong focus on fairness, low latency, secure 
            transactions, and high concurrency to support continuous gameplay.
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React JS', 'Redux', 'Material UI', 
            'Pixi JS', 'Node JS', 'Express JS', 'PostgreSQL', 'Sequelize', 'Redis', 'Bull Queue', 
            'AWS RDS', 'AWS S3', 'AWS ECS', 'Socket.io', 'Docker', 'Kubernetes', 'JWT', 'SendGrid', 
            'Storybook', 
        ],
        code: '',
        role: 'Lead Full Stack Developer',
        images: tuchezeImages,
        demo: 'https://gongagonga.com',
    },
    {
        id: 4,
        name: 'Fantastic Gaming System - Live Casino Platform',
        description: `
            Fantastic Gaming System is a full-scale live casino gaming platform that enables users to participate 
            in real-time betting across multiple casino games and tables from anywhere. The system includes live 
            dealers, interactive game tables, secure wallet integration, and real-time streaming, allowing users 
            to place bets seamlessly while engaging with live casino environments. The platform was designed to 
            support high concurrency, low-latency streaming, and secure financial transactions while ensuring a 
            smooth and immersive user experience.        
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React JS', 'Redux', 'Material UI', 
            'Pixi JS', 'Node JS', 'Express JS', 'PostgreSQL', 'Sequelize', 'Redis', 'Bull Queue', 
            'AWS RDS', 'AWS S3', 'AWS ECS', 'Socket.io', 'Docker', 'Kubernetes', 'JWT', 'SendGrid', 
            'Storybook', 'WebRTC', 'NanoCosmos - Live Streaming Integration',
        ],
        code: '',
        images: FgDealerImages,
        demo: '',
        role: 'Senior Full Stack Developer',
    },
    {
        id: 5,
        name: 'Berhad EMS - Cloud-Based HR Management System',
        description: `
            Berhad EMS is a cloud-based HR management platform designed to centralize and automate core 
            HR operations for organizations. The system enables employers and employees to manage attendance, 
            leave policies, payroll processing, and employee records from a single unified platform. A key 
            feature of the application is facial recognition–based attendance marking, along with configurable 
            attendance and leave rules, location-based restrictions, and document upload capabilities to 
            support compliance and operational efficiency.        
        `,
        tools: [
            'CSS3', 'JavaScript', 'TypeScript', 'NativeBase', 'React Native', 'Redux', 'RTK Query', 
            'Node JS', 'Express JS', 'PostgreSQL', 'Sequelize', 'Redis', 'Bull Queue', 
            'AWS RDS', 'AWS S3', 'AWS ECS', 'Firebase', 'Socket.io', 'Docker', 'Kubernetes', 
            'JWT', 'SendGrid', 'Storybook', 'Face++ API - Facial Recognition Integration',
        ],
        code: '',
        images: berhadEmsImages,
        demo: 'https://play.google.com/store/apps/details?id=com.berhad_ems',
        role: 'Senior React Native Developer',
    },
    {
        id: 6,
        name: 'PadSplit - Affordable Housing Platform',
        description: `
            PadSplit is an affordable housing technology platform designed to provide safe, clean, and 
            fully furnished shared living spaces for the workforce. The platform enables users to discover 
            available rooms, manage memberships, handle weekly payments, and access housing services such as 
            utilities, WiFi, and laundry through a seamless digital experience. The system supports tenant 
            onboarding, house management, billing, and member communication, ensuring smooth operations for 
            both residents and administrators.
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React JS', 'Redux', 'Material UI', 
            'Node JS', 'Express JS', 'MongoDB', 'Mongoose', 'Redis', 'Kafka', 'AWS RDS', 'AWS S3', 'AWS ECS',
            'Socket.io', 'Docker', 'Kubernetes', 'JWT', 'SendGrid', 'Storybook',
        ],
        code: '',
        images: padsplitImages,
        demo: 'https://www.padsplit.com/',
        role: 'Senior Full Stack Developer',
    },
    {
        id: 7,
        name: 'Butterfly - Social Networking App',
        description: `
            Butterfly is a proximity-based social networking platform that lets users connect with people in 
            the same physical location through temporary “vibe-in” chat rooms. Users can join venue-specific 
            chats, discover nearby hotspots via the Vibe-In Map, send one-tap invites to friends, and unlock 
            community chats at frequently visited places. Conversations are time-bound to keep interactions 
            spontaneous and real-time. The platform is developed by Butterfly Social Network Inc. and is available 
            on the Apple App Store.
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Angular 9', 'Angular Apex Theme', 
            'React Native', 'NativeBase', 'Firebase', 'Node JS', 'Express JS', 'Knex JS', 'Objection JS', 
            'Redis', 'PostgreSQL', 'AWS RDS', 'AWS S3', 'AWS ECS', 'Socket.io', 'Docker', 'Kubernetes', 
            'JWT', 'SendGrid', 'MSG91', 'JWT',
        ],
        code: '',
        images: butterflyImages,
        demo: 'https://framebazaar.com/',
        role: 'Senior Full Stack Developer',
    },
    {
        id: 8,
        name: 'Framebazaar - Photo Frame Marketplace',
        description: `
            Framebazaar is an end-to-end e-commerce platform for online photo printing and custom framing, 
            built to deliver a seamless and premium buying experience. The platform enables users to upload 
            photos, customize frames (wood, metal, ornate), choose sizes and finishes, and preview framed 
            artwork before purchase. It also supports fine art giclée printing, gallery wall concepts, secure 
            checkout, order management, and logistics workflows, while highlighting sustainable materials and 
            museum-quality craftsmanship.
        `,
        tools: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Angular 9', 'Angular Apex Theme', 
            'Node JS', 'Express JS', 'Knex JS', 'Objection JS', 'Redis', 'PostgreSQL', 'AWS RDS', 'AWS S3', 
            'AWS ECS', 'Socket.io', 'Docker', 'Kubernetes', 'JWT', 'SendGrid', 'MSG91', 'Razorpay Integration',
            'JWT',
        ],
        code: '',
        images: framebazaarImages,
        demo: 'https://framebazaar.com/',
        role: 'Senior Full Stack Developer',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     images: [],     
//     demo: '',
// },