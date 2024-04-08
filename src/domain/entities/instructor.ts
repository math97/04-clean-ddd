import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface InstructorProps {
    name: string
  }

export class Instrucutor extends Entity<InstructorProps> {
  static create(
    props: InstructorProps,
    id?: UniqueEntityID,
  ) {
    const instructor = new Instrucutor(props, id)

    return instructor
  }
}