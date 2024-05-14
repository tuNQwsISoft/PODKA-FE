// audio files
import beautiful from './a_beautiful_day.mp3';
import world from './We_Are_The_World.mp3';
// import top from './dbang-world.mp3';
// import cinematic from './cinematic-time-lapse-115672.mp3';
// import forest from './forest-lullaby-110624.mp3';
// import podcast from './the-podcast-intro-111863.mp3';

// // audio thumbnails
// import lexin from './lexin.jpeg';
// import dbanj from './dbanj.png';
// import jackson from './jackson.jpeg';
// import trinix from './trinix.jpeg';

export const audios = [
    {
        title: 'Trinix ft Rushawn – Its a beautiful day',
        // src: beautiful,
        src: 'https://res.cloudinary.com/dij4phznu/video/upload/v1715568702/podka/audios/a_beautiful_day_d7kgvb.mp3',
        creator: 'Trinix ft Rushawn',
        guests: ['tuNQws', 'khuongtai'],
        likes: 16,
        nextAudioId: 1,
        description: 'A short description',
        // thumbnail: trinix,
    },
    {
        title: 'Michael Jackson – We Are The World',
        src: world,
        creator: 'Michael Jackson',
        guests: ['TriNgo', 'LeDuc'],
        likes: 14,
        previousAudioId: 0,
        description:
            'A long description which is long and take much time to read \n Hit enter',
        // thumbnail: jackson,
    },
    // {
    //     title: 'D’banj -Top Of The World',
    //     src: top,
    //     author: 'Dbanj',
    //     thumbnail: dbanj,
    // },
    // {
    //     title: 'Cinematic Time Lapse',
    //     src: cinematic,
    //     author: 'Lexin Music',
    //     thumbnail: lexin,
    // },
    // {
    //     title: 'Forest Lullaby',
    //     src: forest,
    //     author: 'Lesfm',
    // },
    // {
    //     title: 'The Podcast Intro',
    //     src: podcast,
    //     author: 'Music Unlimited',
    // },
];
