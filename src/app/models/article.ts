export interface Article {
    id: number,
    id_user: number,
    title: string,
    subtitle: string,
    description: string,
    date: string | Date | any,
    id_section: number,
    state: string
}
