import { randomUUID } from "node:crypto"
import { Entity } from "../../core/entities/entity"

interface InstructorProps {
    name: string
  }

export class Instrucutor extends Entity<InstructorProps> {

}