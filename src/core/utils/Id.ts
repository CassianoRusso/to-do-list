import { v4 as uuidv4 } from 'uuid'

export default class Id{
    static gerar(): string{
        return uuidv4()
    }
}