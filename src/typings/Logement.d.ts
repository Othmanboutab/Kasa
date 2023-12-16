interface Host {
    name: string;
    picture: string;
}

interface Logement {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}