export interface CertificateImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface Certification {
    title: string;
    categories: string[];
    status: string;
    certificateUrl: string;
    image?: CertificateImage;
}

export interface ContinuousLearning {
    title: string;
    text: string;
}
