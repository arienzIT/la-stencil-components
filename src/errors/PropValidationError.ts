
export class PropValidationError extends Error {
  component: string;

  constructor(component: string, ...params) {
    super(...params);
    this.name = 'PropValidationError';
    this.message = `${component} - ${this.message}`;
  }
}
