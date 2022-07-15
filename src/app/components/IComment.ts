export interface IComment{
    id?: string,
    text: string,
    username: string,
    momentId: number,
    create_at?:string,
    updated_at?: string;
    
}