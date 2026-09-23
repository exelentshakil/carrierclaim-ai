/**
 * Auto-generated Media Assets from Pexels API
 * Project: carrierclaim-ai
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "17483873",
    "url": "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Abstract 3D render visualizing artificial intelligence and neural networks in digital form.",
    "avg_color": "#CECFCE"
},
  editorialPhotos: [
    {
    "id": "17483874",
    "url": "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Visual abstraction of neural networks in AI technology, featuring data flow and algorithms.",
    "avg_color": "#D1D2D5"
},
    {
    "id": "18069814",
    "url": "https://images.pexels.com/photos/18069814/pexels-photo-18069814.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Modern abstract 3D render showcasing a complex geometric structure in cool hues.",
    "avg_color": "#A1A2AA"
},
    {
    "id": "39492347",
    "url": "https://images.pexels.com/photos/39492347/pexels-photo-39492347.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Modern 3D render of interconnected geometric cubes in a futuristic abstract design.",
    "avg_color": "#3B4A56"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
