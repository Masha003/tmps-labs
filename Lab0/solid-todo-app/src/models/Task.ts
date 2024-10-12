// export class Task {
//   constructor(
//     public description: string,
//     public isCompleted: boolean = false
//   ) {}
// }

export class Task {
  private description: string;
  private isCompleted: boolean;

  constructor(description: string, isCompleted: boolean = false) {
    this.description = description;
    this.isCompleted = isCompleted;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(desc: string): void {
    this.description = desc;
  }

  getCompleted(): boolean {
    return this.isCompleted;
  }

  setCompletion(isCompleted: boolean): void {
    this.isCompleted = isCompleted;
  }
}
